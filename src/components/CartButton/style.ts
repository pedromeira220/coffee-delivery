import styled from 'styled-components'

export const CartButtonContainer = styled.button`
  background-color: ${props => props.theme['yellow-light']};
  display: flex;
  border: none;
  border-radius: 6px;
  padding: 0.5rem;
  position: relative;

  svg {
    color: ${props => props.theme['yellow-dark']};
  }

  &:hover {
    cursor: pointer;
  }
`

export const Counter = styled.span`
  position: absolute;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background-color: ${props => props.theme['yellow-dark']};
  top: -0.5rem;
  right: -0.5rem;
  color: ${props => props.theme['white']};
  font-size: 0.75rem;
`
