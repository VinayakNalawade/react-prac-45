import styled from 'styled-components'

export const ListItem = styled.li`
  list-style-type: none;
  width: 48%;
  @media screen and (min-width: 768px) {
    width: 24%;
  }
`

export const SelectionTab = styled.button`
  outline: none;
  border: none;
  background-color: #ffffff;
  color: #1e293b;
  opacity: ${props => props.opacity};
  border-radius: 8px;
  padding: 10px;
  width: 100%;
  text-align: center;
  margin-bottom: 1%;
`
