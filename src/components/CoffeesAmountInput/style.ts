import styled from 'styled-components'

export const CoffeesAmountInputContainer = styled.span`
  display: flex;
  flex-direction: row;

  background: ${props => props.theme['base-button']};
  color: ${props => props.theme['base-title']};
  border: 0;
  border-radius: 6px;
  width: 4.5rem;
  padding: 0.5rem;
  gap: 0.25rem;
  margin-right: 0.5rem;

  button {
    border: 0;
    background: none;
    color: ${props => props.theme['purple']};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.875;
    transition: color 0.2s;
    &:hover {
      color: ${props => props.theme['purple-dark']};
      cursor: pointer;
    }
  }
  > span {
    min-width: 1.25rem;
    text-align: center;
  }
`
