import styled from 'styled-components'

export const SuccessPageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 6.375rem;
  margin-top: 5rem;

  h1 {
    font-family: 'Baloo 2', cursive;
    color: ${props => props.theme['yellow-dark']};
    line-height: 130%;
    font-weight: 800;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 400;
    margin-top: 0.25rem;
  }

  @media (max-width: 1100px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const OrderInfo = styled.div`
  padding: 2.5rem;
  display: flex;
  margin-top: 2.5rem;
  border-radius: 6px 36px;
  flex-direction: column;
  gap: 2rem;
  border: 1px solid ${props => props.theme['purple']};
  align-items: flex-start;
  justify-content: flex-start;
`

export const Illustration = styled.img`
  width: 30.75rem;

  @media (max-width: 1100px) {
    display: none;
  }
`

export const OrderItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;

  & > div {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 441px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const TextBold = styled.span`
  font-weight: 700;
`
interface IconWrapperProps {
  iconBg: 'purple' | 'yellow' | 'yellow-dark'
}

export const IconWrapper = styled.span<IconWrapperProps>`
  color: ${props => props.theme.white};

  padding: 0.5rem;
  border-radius: 50%;
  display: inline-flex;
  width: auto;
  background-color: ${props => {
    const colorString = props.iconBg
    let colorHex = ''

    switch (colorString) {
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

/*

${props => {
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
*/
