import { Container, Area, Header } from "./App.styles";
import { Item } from "./types/Item";
import { useState } from 'react';
import { ListItem } from "./components/ListItem/ListItem";
import { AddArea } from "./components/AddArea/AddArea";
import './App.css';

const App = () => {
  const [list, setList] = useState<Item[]>([])

  const handleAddtask = (taskName: string) => {
    setList([...list, {id: list.length + 1, name: taskName, done: false}]);
  }

  const changeStatus = (id: number) => {
    setList(list.map((item) => { // corro o array
      if(item.id === id) {  // se o id do listItem for IGUAL ao id passado pelo parametro
        return {...item, done: !item.done} // eu mantenho as propriedades e mudo só o done pra o valor reverso do atual, caso contrário, retorna nada.
      }
      return item
    }));
  }

  return(
    <Container>
      <Area>
        <Header>
          Todo List
        </Header>

      <AddArea addProp={ handleAddtask } /> { /* Fazer um prop drilling do bem pra não setar global context */ }

      {list.map((item, index) => {
        return(
          <ListItem key={ index } item={ item } changeStatus={ changeStatus } />
        )
      })}
      </Area>
    </Container>
  )
}

export default App;