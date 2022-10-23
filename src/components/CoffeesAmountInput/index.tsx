import { Minus, Plus } from 'phosphor-react'
import { CoffeesAmountInputContainer } from './style'

interface CoffeesAmountInputProps {
  amount: number
  incrementAmountCoffees: () => void
  decrementAmountCoffees: () => void
}

export function CoffeesAmountInput({
  amount,
  incrementAmountCoffees,
  decrementAmountCoffees,
}: CoffeesAmountInputProps) {
  return (
    <CoffeesAmountInputContainer>
      <button onClick={decrementAmountCoffees} type="button">
        <Minus />
      </button>

      <span>{amount}</span>
      <button onClick={incrementAmountCoffees} type="button">
        <Plus />
      </button>
    </CoffeesAmountInputContainer>
  )
}
