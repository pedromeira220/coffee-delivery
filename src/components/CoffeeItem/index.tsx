import { useContext, useState } from 'react'
import { CoffeeContext, IAvailableCoffee } from '../../contexts/CoffeeContext'
import { formatCoffeePrice } from '../../helpers/formatCoffeePrice'
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

interface CoffeeItemProps {
  availableCoffee: IAvailableCoffee
}

export function CoffeeItem({ availableCoffee }: CoffeeItemProps) {
  const { addCoffeeInCart } = useContext(CoffeeContext)

  const [amountOfCoffee, setAmountOfCoffee] = useState(0)

  const formattedCoffeePrice = formatCoffeePrice(availableCoffee.price)

  function handleAddToCart() {
    if (amountOfCoffee === 0) {
      return
    }
    addCoffeeInCart(availableCoffee, amountOfCoffee)
    setAmountOfCoffee(0)
  }

  function handleAmountCoffeeInputChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const amountInText = event.target.value
    const parsedAmount = parseInt(amountInText) // Amount of coffee

    setAmountOfCoffee(parsedAmount)
  }

  return (
    <CoffeeItemContainer>
      <div>
        <CoffeeImage src={availableCoffee.img} />
        <CoffeeTagWrapper>
          {availableCoffee.tagList.map(tag => {
            return <CoffeeTag key={tag}>{tag}</CoffeeTag>
          })}
        </CoffeeTagWrapper>
        <h4>{availableCoffee.title}</h4>
        <p>{availableCoffee.description}</p>
      </div>
      <CoffeeItemFooter>
        <span>
          <CurrencySymbol>R$</CurrencySymbol>{' '}
          <CoffeePrice>{formattedCoffeePrice}</CoffeePrice>
        </span>
        <AmountCoffeeInput
          onChange={handleAmountCoffeeInputChange}
          value={amountOfCoffee}
        />
        <ButtonIcon onClick={handleAddToCart} />
      </CoffeeItemFooter>
    </CoffeeItemContainer>
  )
}
