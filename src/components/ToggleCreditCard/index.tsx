import { CreditCard } from 'phosphor-react'
import { ToggleCreditCardButtonContainer } from './style'

export function ToggleCreditCard() {
  return (
    <ToggleCreditCardButtonContainer>
      <CreditCard size={16} />
      <span>Cartão de crédito</span>
    </ToggleCreditCardButtonContainer>
  )
}
