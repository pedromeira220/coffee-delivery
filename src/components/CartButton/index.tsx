import { ShoppingCart } from 'phosphor-react'
import { ButtonHTMLAttributes } from 'react'
import { CartButtonContainer, Counter } from './style'

interface CartButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  counterNumber?: number
}

export function CartButton({ counterNumber, ...rest }: CartButtonProps) {
  return (
    <CartButtonContainer {...rest}>
      <ShoppingCart weight="fill" size={22} />
      {counterNumber && <Counter>{counterNumber}</Counter>}
    </CartButtonContainer>
  )
}
