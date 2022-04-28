import styled from "styled-components";

type ContainerProps = {
  done: boolean
}

export const Container = styled.div(({ done }: ContainerProps) => (`
  display:flex;
  align-items:center;
  justify-content:flex-start;
  margin: 20px 0;
  padding: 10px;
  border-radius: 10px;
  background-color: #20212C;

  label {
    margin: 0px 10px;
    text-decoration: ${ done? 'line-through' : 'none' };
    color: white;
  }

  input {
    width: 20px;
    height: 20px;
  }
`))