import styled from 'styled-components'

export const ButtonIconContainer = styled.button`
  background-color: ${props => props.theme['purple-dark']};
  border: none;
  border-radius: 6px;
  padding: 0.5rem;
  transition-duration: 0.1s;
  width: 2.375rem;
  height: 2.375rem;

  &:hover {
    background-color: ${props => props.theme['purple']};
  }
`
