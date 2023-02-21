import {Component} from 'react'

import {
  GradientContainer,
  Heading,
  ItemsContainer,
  Para,
  ColorContainer,
  ColorTab,
  ColorInput,
} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    selected: gradientDirectionsList[0],
    color2: '#014f7b',
    color1: '#8ae323',
  }

  changeSelected = item => this.setState({selected: item})

  changeColor1 = event => this.setState({color1: event.target.value})

  changeColor2 = event => this.setState({color2: event.target.value})

  render() {
    const {selected, color1, color2} = this.state

    return (
      <GradientContainer
        direction={selected.value}
        color1={color1}
        color2={color2}
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Para>Choose Direction</Para>
        <ItemsContainer>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              key={each.directionId}
              item={each}
              changeSelected={this.changeSelected}
              selected={selected}
            />
          ))}
        </ItemsContainer>
        <Para>Pick the Colors</Para>
        <ColorContainer>
          <ColorTab>
            <Para>{color1}</Para>
            <ColorInput
              type="color"
              value={color1}
              onChange={this.changeColor1}
            />
          </ColorTab>
          <ColorTab>
            <Para>{color1}</Para>
            <ColorInput
              type="color"
              value={color2}
              onChange={this.changeColor2}
            />
          </ColorTab>
        </ColorContainer>
      </GradientContainer>
    )
  }
}

export default GradientGenerator
