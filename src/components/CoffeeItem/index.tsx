import { IAvailableCoffee } from '../../contexts/CoffeeContext'
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
  const formattedCoffeePrice = formatCoffeePrice(availableCoffee.price)

  function formatCoffeePrice(price: number) {
    const formattedUsingLib = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price)

    const [symbol, amount] = formattedUsingLib.split(' ')
    return amount
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
        <AmountCoffeeInput />
        <ButtonIcon />
      </CoffeeItemFooter>
    </CoffeeItemContainer>
  )
}
