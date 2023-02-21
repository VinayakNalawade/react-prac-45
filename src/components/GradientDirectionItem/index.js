import {SelectionTab, ListItem} from './styledComponents'

const GradientDirectionItem = props => {
  const {item, changeSelected, selected} = props

  const isSelected = item === selected

  const changeDirection = () => {
    changeSelected(item)
  }

  return (
    <ListItem>
      <SelectionTab
        opacity={isSelected ? '1' : '0.5'}
        onClick={changeDirection}
      >
        {item.displayText}
      </SelectionTab>
    </ListItem>
  )
}

export default GradientDirectionItem
