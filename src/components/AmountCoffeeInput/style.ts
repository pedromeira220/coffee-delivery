import styled from 'styled-components'

export const Input = styled.input`
  border: none;
  background-color: ${props => props.theme['base-button']};
  border-radius: 6px;
  padding: 0.5rem 0.34375rem;
  width: 4.5rem;
  text-align: center;
  line-height: 130%;
  font-size: 1rem;
  color: ${props => props.theme['base-title']};
`
