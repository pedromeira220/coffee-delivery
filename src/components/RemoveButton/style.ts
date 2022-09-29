import styled from 'styled-components'

export const RemoveButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme['base-text']};
  background-color: ${props => props.theme['base-button']};
  border: none;
  border-radius: 6px;
  gap: 0.25rem;
  transition-duration: 0.1s;
  line-height: 160%;
  font-size: 0.75rem;
  height: 2rem;
  padding: 0.5rem;

  &:hover {
    background-color: ${props => props.theme['base-hover']};
    color: ${props => props.theme['base-subtitle']};
  }

  svg {
    color: ${props => props.theme.purple};
  }
`
