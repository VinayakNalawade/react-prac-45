import styled from 'styled-components'

export const GradientContainer = styled.div`
  min-height: 100vh;
  background-image: linear-gradient(
    to ${props => `${props.direction}, ${props.color1}, ${props.color2}`}
  );
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const Heading = styled.h1`
  font-size: 28px;
`

export const Para = styled.p`
  color: #ededed;
  font-size: 20px;
`

export const ItemsContainer = styled.ul`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  width: 85%;
  max-width: 650px;
`

export const ColorContainer = styled.ul`
  padding: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 70%;
  max-width: 400px;
`

export const ColorInput = styled.input`
  border: none;
  outline: none;
  width: 75px;
  padding: 0;
`

export const ColorTab = styled.li`
  list-style-type: none;
  display: flex;
  width: 50%;

  flex-direction: column;
  align-items: center;
`

export const GenerateButton = styled.button`
  border: none;
  outline: none;
  width: 100px;
  background-color: #00c9b7;
  color: #1e293b;
  padding: 10px;
  border-radius: 8px;
`
