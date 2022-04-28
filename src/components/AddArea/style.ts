import styled from "styled-components";

export const Container = styled.div`
  border-radius: 10px;
  border: 1px solid #555;
  margin: 20px 0;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    text-align: center;
    margin-right: 5px;
  }

  input {
    border: 0px;
    background: transparent;
    outline: 0;
    color: #FFF;
    font-size: 1.2rem;
    width: 100%
  }
`