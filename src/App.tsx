import React, { FormEvent, useState } from 'react';
import { getHours, getMinutes } from 'date-fns';

import { GlobalStyle, Container, ISTitle, ISDescription, ISInstructions,FormContainer, TableContainer, Tr, Empty } from './styles';

interface TaskInterface {
  name: string;
  start: number;
  end: number;
  formattedStart: string;
  formattedEnd: string;
  isSolution: boolean;
}

const App: React.FC = () => {
  const [taskName, setTaskName] = useState('');
  const [taskStart, setTaskStart] = useState(0);
  const [taskEnd, setTaskEnd] = useState(0);
  const [tasks, setTasks] = useState<TaskInterface[]>([]);

  function handleAddTask(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    if (taskEnd < taskStart) {
      return ;
    }

    const newTask = {
      name: taskName,
      start: taskStart,
      end: taskEnd,
      formattedStart: `${getHours(taskStart) + 3}:${getMinutes(taskStart) < 10 ? '0' : ''}${getMinutes(taskStart)}`,
      formattedEnd: `${getHours(taskEnd) + 3}:${getMinutes(taskEnd) < 10 ? '0' : ''}${getMinutes(taskEnd)}`,
      isSolution: false,
    }
    setTasks([...tasks, newTask])
    
    setTaskName('');

  };

  function sortTasksByEndTime() {
    let sortedTasks = tasks;
    sortedTasks.sort(function (a, b) {
      return a.end - b.end;
    });

    return sortedTasks;
  }
  function handleIntervalScheduling() {
    const sortedTasks = sortTasksByEndTime();
    
    let solution: TaskInterface[] = [];
    solution.push(sortedTasks[0]);
    let count = 0;
    
    sortedTasks.map(task => {
      if(task.start >= solution[count].start){
        solution.push(task);
        count++;
      }
      return task;
    });
    solution.shift();

    solution.map(s => s.isSolution = true);

    setTasks(solution);
  };

  return (
    <GlobalStyle>
      <Container>
        <ISTitle>Organizador de atividades</ISTitle>
        <ISDescription>Está com a agenda lotada e não sabe quais atividades compensa mais você fazer para que consiga concluir o máximo possível?</ISDescription>
        <ISInstructions>Basta inserir as atividades que você precisa fazer e depois clicar em solução para saber qual a melhor combinação de atividades para hoje.</ISInstructions>
        <h1>Cadastro</h1>
        
          <FormContainer onSubmit={handleAddTask}>
            <label>Nome da atividade</label>
            <input id="name" name="name" value={taskName} onChange={e => setTaskName(e.target.value)} placeholder="Desenvolver projeto de PA" required/>
            <label>Início:</label>
            <input type="time" id="start" min="08:00" max="18:00" onChange={e => setTaskStart(e.target.valueAsNumber)} name="start" required /> 
            <label>Término:</label>
            <input type="time" id="end" min="08:00" max="18:00" onChange={e => setTaskEnd(e.target.valueAsNumber)} name="end" required /> 

            <button type="submit">Cadastrar</button>
          </FormContainer>

          <button onClick={handleIntervalScheduling}>Solução</button>
          <h1>Lista de atividades</h1>
          {tasks.length ? 
            <TableContainer>
              <table>
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Início</th>
                    <th>Término</th>
                  </tr>
                </thead>

                <tbody>
                  {tasks.map(task => (
                    <Tr key={task.name} isSolution={task.isSolution} >
                      <td className="title">{task.name}</td>
                      <td>{task.formattedStart}</td>
                      <td>{task.formattedEnd}</td>
                    </Tr>
                  ))}
                </tbody>
              </table>
            </TableContainer>
            : <Empty>Ainda não foi adicionado nenhuma atividade!</Empty>
            }
          
      </Container>
    </GlobalStyle>
  );
}

export default App;
