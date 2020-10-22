import styled, { css } from 'styled-components';

interface TaskProps {
  isSolution: boolean;
}

export const GlobalStyle = styled.div`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased
  }
  body, input, button, label{
    font: 16px "Roboto", sans-serif;
  }
  button {
    cursor: pointer;
  }
`;

export const Container = styled.div`
  background: #FDFCDC;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin: 24px 0px;
  }

  button {
    border-style: none;
    background: #12A454;
    height: 30px;
    width: 15%;
    color: #fff;
    margin-top: 8px;
  }
`;

export const ISTitle = styled.h1`
  margin-bottom: 24px;

`;

export const ISDescription = styled.span`
  font-size: 20px;
  margin-bottom: 8px;
`;

export const ISInstructions = styled.span`
  font-size: 20px;
  text-align: center;
  margin-bottom: 40px;
`;



export const FormContainer = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;

  #start, #end {
    width: 130px;
  }

  label {
    margin: 0px 8px;
  }

  button {
    margin-left: 8px;
    background: #363f5f;
    margin-top: 0px;
  }
`;

export const TableContainer = styled.section`
  margin-top: 30px;
  table {
    width: 100%;
    min-width: 800px;
    border-spacing: 0 8px;
    th {
      color: #363f5f;
      font-weight: normal;
      padding: 20px 32px;
      text-align: left;
      font-size: 16px;
      line-height: 24px;
    }
    td {
      padding: 20px 32px;
      border: 0;
      font-size: 16px;
      font-weight: normal;
      color: #fff;

    }
    td:first-child {
      border-radius: 8px 0 0 8px;
    }
    td:last-child {
      border-radius: 0 8px 8px 0;
    }
  }
`;

export const Tr = styled.tr<TaskProps>`
  background-color: #969cb3;
  ${props => props.isSolution && css`
  background-color: #12A454;
  `}
  
`;

export const Empty = styled.span`
  color: #363f5f;
`;