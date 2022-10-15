import styled from 'styled-components'

export const CoffeeItemContainer = styled.div`
  background-color: ${props => props.theme['base-card']};
  padding: 1.5rem 1.25rem;
  border-radius: 0.375rem 2.25rem;
  position: relative;
  display: flex;
  flex-direction: column;

  & div {
    margin: 0 auto;
    text-align: center;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h4 {
    font-size: 1.25rem;
    margin-top: 1rem;
    font-family: 'Baloo 2', cursive;
  }

  p {
    text-align: center;
    max-width: 13.5rem;
    margin-top: 0.5rem;
    color: ${props => props.theme['base-label']};
    font-size: 0.875rem;
  }
`

export const CoffeeImage = styled.img`
  width: 7.5rem;
`

export const CoffeeTagWrapper = styled.span`
  margin-top: 0.75rem;
`

export const CoffeeTag = styled.span`
  background-color: ${props => props.theme['yellow-light']};
  color: ${props => props.theme['yellow-dark']};
  padding: 0.25rem 0.5rem;
  border-radius: 100px;
  font-size: 0.625rem;
  font-weight: bold;
  text-transform: uppercase;
`

export const CoffeeItemFooter = styled.footer`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const CurrencySymbol = styled.span`
  color: ${props => props.theme['base-text']};
`

export const CoffeePrice = styled.span`
  color: ${props => props.theme['base-text']};
  font-size: 1.5rem;
  font-weight: 700;
`
