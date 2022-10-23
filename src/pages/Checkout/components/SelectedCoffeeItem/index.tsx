import { useContext, useEffect, useState } from 'react'
import { CoffeesAmountInput } from '../../../../components/CoffeesAmountInput'
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

  function handleDeleteCoffee() {
    deleteCoffeeInCartById(coffee.id)
  }

  function onDecrementAmountCoffees() {
    setAmountOfCoffee(state => {
      if (state > 0) {
        return state - 1
      }

      return state
    })
  }

  function onIncrementAmountCoffees() {
    setAmountOfCoffee(state => state + 1)
  }

  useEffect(() => {
    updateCoffeeInCartById(coffee.id, amountOfCoffee)
  }, [amountOfCoffee])

  return (
    <SelectedCoffeeItemContainer>
      <SelectedCoffeeItemWrapper>
        <img src={coffee.img} />
        <span>
          <span>{coffee.title}</span>
          <ButtonsWrapper>
            <CoffeesAmountInput
              amount={amountOfCoffee}
              decrementAmountCoffees={onDecrementAmountCoffees}
              incrementAmountCoffees={onIncrementAmountCoffees}
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
