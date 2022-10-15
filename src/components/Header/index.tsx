import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CoffeeContext, ICoffee } from '../../contexts/CoffeeContext'
import { CartButton } from '../CartButton'
import {
  AddressButton,
  AddressIcon,
  HeaderContainer,
  LogoImgComponent,
} from './style'

export function Header() {
  const { coffeesInCart } = useContext(CoffeeContext)

  const amountOfCoffeeInCart = calculateAmountOfCoffeeInCart(coffeesInCart)

  function calculateAmountOfCoffeeInCart(coffeesInCart: ICoffee[]) {
    let amount = 0

    coffeesInCart.forEach(coffee => {
      amount += coffee.amount
    })

    //If there is no value do not render cart counter
    return amount === 0 ? undefined : amount
  }

  return (
    <HeaderContainer>
      <Link to="/">
        <LogoImgComponent
          src="./coffee-delivery-logo.svg"
          alt="coffee delivery logo"
        />
      </Link>

      <div>
        <AddressButton>
          <AddressIcon size={22} weight="fill" />
          <span>Campinas, SP</span>
        </AddressButton>
        <Link to="/checkout">
          <CartButton counterNumber={amountOfCoffeeInCart} />
        </Link>
      </div>
    </HeaderContainer>
  )
}
