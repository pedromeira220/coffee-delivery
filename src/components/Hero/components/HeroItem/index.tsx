import { ShoppingCart } from 'phosphor-react'
import { HeroItemContainer } from './style'

export function HeroItem() {
  return (
    <HeroItemContainer>
      <span>
        <ShoppingCart weight="fill" size={16} />
      </span>
      <p>Compra simples e segura</p>
    </HeroItemContainer>
  )
}
