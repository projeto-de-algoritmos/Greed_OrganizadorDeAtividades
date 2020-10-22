# Organizador de Atividades

**Conteúdo da Disciplina**: Greed<br>

## Alunos
|Matrícula | Aluno |
| -- | -- |
| 18/0129058  |  Paulo Victor da Silva |
| 17/0045943  |  Thallys Silva Braz |

## Sobre 
Aplicação web que auxilia a organizar as atividades a serem feitas naquele dia de forma que consiga executar o máximo de atividades possíveis.
Aplicação utiliza do algoritmo ambicioso Interval Scheduling para poder gerar uma solução ótima para esse problema.

**Vídeo explicando sobre o projeto se encontra na pasta assets no repositório**

## Demo online

Fizemos o deploy da aplicação para o netlify para facilitar o uso sem precisar instalar nada na máquina do usuário.

**Link para a demo:** https://organizadordeatividades.netlify.app/

---

## Screenshots

<p align="center">
 <img src="https://github.com/projeto-de-algoritmos/Greed_OrganizadorDeAtividades/blob/main/assets/screen1.png" alt="Organizador de Atividades" /> 
 <img src="https://github.com/projeto-de-algoritmos/Greed_OrganizadorDeAtividades/blob/main/assets/screen2.png"  alt="Organizador de Atividades" />
 <img src="https://github.com/projeto-de-algoritmos/Greed_OrganizadorDeAtividades/blob/main/assets/screen3.png"  alt="Organizador de Atividades" />
</p>

---

## Instalação 
**Linguagem**: JavaScript<br>
**Framework**: React<br>

Primeiro de tudo é necessário ter o NodeJS instalado e o Yarn.

Depois, clone a aplicação. No terminal digite:
```git clone https://github.com/projeto-de-algoritmos/Greed_OrganizadorDeAtividades.git``` 

Entre na pasta da aplicação e execute os seguintes comandos no terminal:
1. ```yarn``` (Instala todas as dependências necessárias)
2. ```yarn start``` (Executa a aplicação)

---
## Uso 
O usuário deve cadastrar todas as atividades que estão pendentes para aquele dia, inserindo o nome da atividade, o horário que a atividade precisa ser iníciada e o horário na qual a atividade será finalizada.

Após cadastrar todas as atividades, basta clicar no botão "Solução" para que a aplicação calcule uma ótima solução para esse problema.

As atividades de fundo **azuis** significam que **Foram cadastradas**.
As atividades de fundo **verdes** significam que **Fazem parte do conjunto solução**.






