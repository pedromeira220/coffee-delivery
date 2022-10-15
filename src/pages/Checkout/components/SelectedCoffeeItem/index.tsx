import { useContext, useState } from 'react'
import { AmountCoffeeInput } from '../../../../components/AmountCoffeeInput'
import { RemoveButton } from '../../../../components/RemoveButton'
import { CoffeeContext, ICoffee } from '../../../../contexts/CoffeeContext'
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
  const { updateCoffeeInCartById, deleteCoffeeInCartById } =
    useContext(CoffeeContext)

  const [amountOfCoffee, setAmountOfCoffee] = useState(coffee.amount)

  const formattedCoffeePrice = formatCoffeePrice(coffee.price)

  function handleAmountCoffeeInputChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const amountInText = event.target.value
    const amount = parseInt(amountInText)

    setAmountOfCoffee(amount)

    updateCoffeeInCartById(coffee.id, amount)
  }

  function handleDeleteCoffee() {
    deleteCoffeeInCartById(coffee.id)
  }

  return (
    <SelectedCoffeeItemContainer>
      <SelectedCoffeeItemWrapper>
        <img src={coffee.img} />
        <span>
          <span>{coffee.title}</span>
          <ButtonsWrapper>
            <AmountCoffeeInput
              value={amountOfCoffee}
              onChange={handleAmountCoffeeInputChange}
            />
            <RemoveButton
              text="REMOVER"
              type="button"
              onClick={handleDeleteCoffee}
            />
          </ButtonsWrapper>
        </span>
        <h3>R$ {formattedCoffeePrice}</h3>
      </SelectedCoffeeItemWrapper>

      <hr />
    </SelectedCoffeeItemContainer>
  )
}
