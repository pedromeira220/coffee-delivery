import { ShoppingCart } from 'phosphor-react'
import { CartButtonContainer, Counter } from './style'

interface CartButtonProps {
  counterNumber?: number
}

export function CartButton({ counterNumber }: CartButtonProps) {
  return (
    <CartButtonContainer>
      <ShoppingCart weight="fill" size={22} />
      {counterNumber && <Counter>{counterNumber}</Counter>}
    </CartButtonContainer>
  )
}
