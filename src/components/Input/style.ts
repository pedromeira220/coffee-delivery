import ReactInputMask from 'react-input-mask'
import styled from 'styled-components'

export const StyledInput = styled(ReactInputMask)`
  background-color: ${props => props.theme['base-input']};
  border: 1px solid ${props => props.theme['base-button']};
  padding: 0.75rem;
  font-size: 0.875rem;
  color: ${props => props.theme['base-text']};
  border-radius: 4px;
  width: 100%;

  &::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${props => props.theme['base-label']};
    opacity: 1; /* Firefox */
  }

  &:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${props => props.theme['base-label']};
  }

  &::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ${props => props.theme['base-label']};
  }

  &:focus {
    outline: 1px solid ${props => props.theme['yellow-dark']};
  }
`
