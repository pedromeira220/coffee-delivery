import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CoffeeContext, ICoffee } from '../../contexts/CoffeeContext'
import {
  AddressButton,
  AddressIcon,
  HeaderContainer,
  LinkCardButton,
  LogoImgComponent,
} from './style'

export function Header() {
  const { coffeesInCart } = useContext(CoffeeContext)

  const [amountOfCoffeeInCart, setAmountOfCoffeeInCart] = useState(
    calculateAmountOfCoffeeInCart(coffeesInCart)
  )

  useEffect(() => {
    setAmountOfCoffeeInCart(calculateAmountOfCoffeeInCart(coffeesInCart))
  }, [coffeesInCart])

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
        {amountOfCoffeeInCart ? (
          <Link to="/checkout">
            <LinkCardButton counterNumber={amountOfCoffeeInCart} />
          </Link>
        ) : (
          <LinkCardButton counterNumber={amountOfCoffeeInCart} disabled />
        )}
      </div>
    </HeaderContainer>
  )
}
