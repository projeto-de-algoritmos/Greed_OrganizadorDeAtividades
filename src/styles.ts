import styled from 'styled-components';

export const GlobalStyle = styled.div`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased
  }
  body {

  }
  body, input, button, label{
    font: 16px "Poppins", sans-serif;
  }
  button {
    cursor: pointer;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const FormContainer = styled.form`

  display: flex;
  flex-direction: row;
  align-items: center;
  label {
    margin: 0px 8px;
  }

  button {
    margin-left: 8px;
  }
`;

export const TableContainer = styled.section`
  margin-top: 64px;
  table {
    width: 100%;
    border-spacing: 0 8px;
    th {
      color: #969cb3;
      font-weight: normal;
      padding: 20px 32px;
      text-align: left;
      font-size: 16px;
      line-height: 24px;
    }
    td {
      padding: 20px 32px;
      border: 0;
      background: #E5E5E5;
      font-size: 16px;
      font-weight: normal;
      color: #363f5f;

    }
    td:first-child {
      border-radius: 8px 0 0 8px;
    }
    td:last-child {
      border-radius: 0 8px 8px 0;
    }
  }
`;
