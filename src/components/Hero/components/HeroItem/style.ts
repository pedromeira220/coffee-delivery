import styled from 'styled-components'
import { colorsType } from '.'

export const HeroItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

interface IconWrapperProps {
  color: colorsType
}

export const IconWrapper = styled.span<IconWrapperProps>`
  color: ${props => props.theme.white};

  padding: 0.5rem;
  border-radius: 50%;
  display: inline-flex;
  width: auto;
  background-color: ${props => {
    const colorString = props.color
    let colorHex = ''

    switch (colorString) {
      case 'gray':
        colorHex = props.theme['base-text']
        break
      case 'purple':
        colorHex = props.theme['purple']
        break
      case 'yellow-dark':
        colorHex = props.theme['yellow-dark']
        break
      case 'yellow':
        colorHex = props.theme['yellow']
        break
    }

    return colorHex
  }};
`
