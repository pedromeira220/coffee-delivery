import styled from 'styled-components'
import { Input } from '../../components/Input'

export const CheckoutContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr 28rem;
  gap: 2rem;
  margin-top: 2.5rem;

  div:nth-child(1) {
  }
  div:nth-child(2) {
  }

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`

export const FormContainer = styled.div`
  & > div {
    background-color: ${props => props.theme['base-card']};
    margin-top: 1rem;
    border-radius: 6px;
    padding: 2.5rem;
  }
`

export const FormHeader = styled.header`
  display: flex;
  justify-content: flex-start;
  gap: 0.5rem;

  svg {
    color: ${props => props.theme['yellow-dark']};
  }

  h5 {
    font-size: 1rem;
    line-height: 130%;
    font-weight: 400;
    color: ${props => props.theme['base-subtitle']};
  }

  span {
    color: ${props => props.theme['base-text']};
    line-height: 130%;
    font-size: 0.875rem;
  }
`

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  gap: 0.75rem;
  margin-top: 2rem;

  grid-template-areas: 'CEP n n' 'ST ST ST' 'NU COM COM' 'DI CI UF';
`

interface FormInputProps {
  gridArea: string
}

export const FormInput = styled(Input)<FormInputProps>`
  grid-area: ${props => props.gridArea};
`

export const PaymentContainer = styled.div`
  background-color: ${props => props.theme['base-card']};
  margin-top: 0.75rem;
  border-radius: 6px;
  padding: 2.5rem;
`

export const PaymentHeader = styled.header`
  display: flex;
  justify-content: flex-start;
  gap: 0.5rem;

  svg {
    color: ${props => props.theme['purple']};
  }

  h5 {
    font-size: 1rem;
    line-height: 130%;
    font-weight: 400;
    color: ${props => props.theme['base-subtitle']};
  }

  span {
    color: ${props => props.theme['base-text']};
    line-height: 130%;
    font-size: 0.875rem;
  }

  & ~ div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;
  }
`

export const SelectCoffeeWrapper = styled.div`
  max-width: 28rem;

  & > div {
    background-color: ${props => props.theme['base-card']};
    padding: 2.5rem;
    border-radius: 6px 44px;
    margin-top: 1rem;
  }

  footer {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    width: 100%;

    div {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
    }

    span {
      font-size: 0.875rem;
    }

    span,
    h3 {
      line-height: 130%;
    }

    h3 {
      font-size: 1.25rem;
    }

    button {
      margin-top: 1.5rem;
      width: 100%;
    }
  }
`

export const ColumnTitle = styled.h4`
  font-family: 'Baloo 2', cursive;
  font-size: 1.125rem;
  line-height: 130%;
`
