import { AmountCoffeeInput } from '../../../../components/AmountCoffeeInput'
import { RemoveButton } from '../../../../components/RemoveButton'
import {
  ButtonsWrapper,
  SelectedCoffeeItemContainer,
  SelectedCoffeeItemWrapper,
} from './style'

export function SelectedCoffeeItem() {
  return (
    <SelectedCoffeeItemContainer>
      <SelectedCoffeeItemWrapper>
        <img src="./coffee-expresso.png" />
        <span>
          <span>Expresso Tradicional</span>
          <ButtonsWrapper>
            <AmountCoffeeInput />
            <RemoveButton text="REMOVER" />
          </ButtonsWrapper>
        </span>
        <h3>R$ 9,90</h3>
      </SelectedCoffeeItemWrapper>

      <hr />
    </SelectedCoffeeItemContainer>
  )
}
