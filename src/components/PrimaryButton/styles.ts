import styled from 'styled-components'

export const PrimaryButtonContainer = styled.button`
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.yellow};
  border: none;
  padding: 0.75rem 2.8125rem; // 45px
  border-radius: 6px;
  transition-duration: 0.1s;

  &:hover {
    background-color: ${props => props.theme['yellow-dark']};
  }
`
