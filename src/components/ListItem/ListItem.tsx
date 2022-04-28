import { Container } from "./styles"
import { Item } from '../../types/Item'
import { useState } from "react"

type Props = {
  item: Item,
  changeStatus(id: number): void,
}

export const ListItem = ({ item, changeStatus }: Props) => {
  const [isChecked, setIsChecked] = useState<boolean>(item.done)

  const handleStatue = () => {
    setIsChecked(!isChecked);
    changeStatus(item.id);
  }

  return(
    <Container done={ isChecked }>
      <input
        type="checkbox"
        checked={ item.done }
        onChange={ handleStatue }
      />

      <label>{ `${item.id}) ${item.name}. Status: ${item.done}` }</label>
    </Container>
  )
}