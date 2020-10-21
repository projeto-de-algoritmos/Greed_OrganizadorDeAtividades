import React, { FormEvent, useState } from 'react';
import { getHours, getMinutes } from 'date-fns';

import { GlobalStyle, Container, FormContainer, TableContainer } from './styles';

interface TaskInterface {
  name: string;
  start: number;
  end: number;
  formattedStart: string;
  formattedEnd: string;
}

const App: React.FC = () => {
  const [taskName, setTaskName] = useState('');
  const [taskStart, setTaskStart] = useState(0);
  const [taskEnd, setTaskEnd] = useState(0);
  const [tasks, setTasks] = useState<TaskInterface[]>([]);

  function handleAddTask(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();


    const newTask = {
      name: taskName,
      start: taskStart,
      end: taskEnd,
      formattedStart: `${getHours(taskStart) + 3}:${getMinutes(taskStart) < 10 ? '0' : ''}${getMinutes(taskStart)}`,
      formattedEnd: `${getHours(taskEnd) + 3}:${getMinutes(taskEnd) < 10 ? '0' : ''}${getMinutes(taskEnd)}`,
    }
    setTasks([...tasks, newTask])
    
    setTaskName('');

  };

  function sortTasksByEndTime() {
    let sortedTasks = tasks.sort(function (a, b) {
      return a.end - b.end;
    });

    return sortedTasks;
  }
  function handleIntervalScheduling() {
    const sortedTasks = sortTasksByEndTime();
    
     let solution: TaskInterface[] = [];
     solution.push(sortedTasks[0]);
     console.log(solution);

    if (sortedTasks){
      for(let j = 1; j < tasks.length -1; j++){
        if (sortedTasks[j].start >= solution[j - 1].end){
          solution.push(sortedTasks[j]);
        }
      }
    }
    
    
  };

  return (
    <GlobalStyle>
      <Container>
        <h1>Cadastro de atividades</h1>
        
          <FormContainer onSubmit={handleAddTask}>
            <label>Nome da Atividade</label>
            <input id="name" name="name" value={taskName} onChange={e => setTaskName(e.target.value)} placeholder="Desenvolver projeto de PA" required/>
            <label>Início:</label>
            <input type="time" id="start" onChange={e => setTaskStart(e.target.valueAsNumber)} name="start" required /> 
            <label>Término:</label>
            <input type="time" id="end" onChange={e => setTaskEnd(e.target.valueAsNumber)} name="end" required /> 

            <button type="submit">Cadastrar</button>
          </FormContainer>

          <button onClick={handleIntervalScheduling} >Solucao</button>
          <h1>Lista de atividades</h1>
          
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
                  <tr key={task.name}>
                    <td className="title">{task.name}</td>
                    <td>{task.formattedStart}</td>
                    <td>{task.formattedEnd}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableContainer>
      </Container>
    </GlobalStyle>
  );
}

export default App;
