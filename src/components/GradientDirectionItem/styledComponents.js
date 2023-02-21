import styled from 'styled-components'

export const SelectionTab = styled.button`
  list-style-type: none;
  outline: none;
  border: none;
  background-color: #ffffff;
  color: #1e293b;
  opacity: ${props => props.opacity};
  width: 48%;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  margin-bottom: 1%;

  @media screen and (min-width: 768px) {
    width: 24%;
  }
`
