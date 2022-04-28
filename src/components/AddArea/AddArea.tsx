import { Container } from "./style"
import { useState, KeyboardEvent } from "react"

type Props = {
  addProp: (taskName: string) => void;
}

export const AddArea = ( props: Props ) => {
  const [ value, setValue ] = useState<string>("")

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.code === 'Enter' && value) {
      props.addProp(value);
      setValue('');
    }
  }
  return (
    <Container>
      <div>+</div>
      <input
        type="text"
        placeholder="Adicionar tarefa"
        value={ value }
        onChange={ (e) => setValue(e.target.value) }
        onKeyUp={ handleKeyUp }
      />
    </Container>
  )
}