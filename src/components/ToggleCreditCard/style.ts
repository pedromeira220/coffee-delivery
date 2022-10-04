import styled from 'styled-components'

import * as Toggle from '@radix-ui/react-toggle'

export const ToggleCreditCardButtonContainer = styled(Toggle.Root)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem;
  color: ${props => props.theme['base-text']};
  border: none;
  border-radius: 6px;
  transition: 0.1s;
  border: 1px solid transparent;
  background-color: ${props => props.theme['base-button']};

  &:hover {
    background-color: ${props => props.theme['base-hover']};
    color: ${props => props.theme['base-subtitle']};
    cursor: pointer;
  }
  &[data-state='on'] {
    color: ${props => props.theme['base-text']};
    background-color: ${props => props.theme['purple-light']};
    border: 1px solid ${props => props.theme['purple']};
  }
  &:focus {
  }

  span {
    text-transform: uppercase;
    font-size: 0.75rem;
    line-height: 160%;
  }

  svg {
    color: ${props => props.theme.purple};
  }
`
