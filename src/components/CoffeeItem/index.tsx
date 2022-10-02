import { AmountCoffeeInput } from '../AmountCoffeeInput'
import { ButtonIcon } from '../ButtonIcon'
import {
  CoffeeImage,
  CoffeeItemContainer,
  CoffeeItemFooter,
  CoffeePrice,
  CoffeeTag,
  CoffeeTagWrapper,
  CurrencySymbol,
} from './style'

export function CoffeeItem() {
  return (
    <CoffeeItemContainer>
      <div>
        <CoffeeImage src="./coffee-expresso.png" alt="Café expresso imagem" />
        <CoffeeTagWrapper>
          <CoffeeTag>TRADICIONAL</CoffeeTag>
        </CoffeeTagWrapper>
        <h4>Expresso tradicional</h4>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </div>
      <CoffeeItemFooter>
        <span>
          <CurrencySymbol>R$</CurrencySymbol> <CoffeePrice>9,90</CoffeePrice>
        </span>
        <AmountCoffeeInput />
        <ButtonIcon />
      </CoffeeItemFooter>
    </CoffeeItemContainer>
  )
}
