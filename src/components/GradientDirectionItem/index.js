import {SelectionTab} from './styledComponents'

const GradientDirectionItem = props => {
  const {item, changeSelected, selected} = props

  const isSelected = item === selected

  const changeDirection = () => {
    changeSelected(item)
  }

  return (
    <SelectionTab
      as="li"
      opacity={isSelected ? '1' : '0.5'}
      onClick={changeDirection}
    >
      {item.displayText}
    </SelectionTab>
  )
}

export default GradientDirectionItem
