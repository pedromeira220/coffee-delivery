import { AmountCoffeeInput } from '../../../../components/AmountCoffeeInput'
import { RemoveButton } from '../../../../components/RemoveButton'
import { ICoffee } from '../../../../contexts/CoffeeContext'
import { formatCoffeePrice } from '../../../../helpers/formatCoffeePrice'
import {
  ButtonsWrapper,
  SelectedCoffeeItemContainer,
  SelectedCoffeeItemWrapper,
} from './style'

interface SelectedCoffeeItemProps {
  coffee: ICoffee
}

export function SelectedCoffeeItem({ coffee }: SelectedCoffeeItemProps) {
  const formattedCoffeePrice = formatCoffeePrice(coffee.price)

  return (
    <SelectedCoffeeItemContainer>
      <SelectedCoffeeItemWrapper>
        <img src={coffee.img} />
        <span>
          <span>{coffee.title}</span>
          <ButtonsWrapper>
            <AmountCoffeeInput defaultValue={coffee.amount} />
            <RemoveButton text="REMOVER" />
          </ButtonsWrapper>
        </span>
        <h3>R$ {formattedCoffeePrice}</h3>
      </SelectedCoffeeItemWrapper>

      <hr />
    </SelectedCoffeeItemContainer>
  )
}
