import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CoffeeContext, ICoffee } from '../../contexts/CoffeeContext'
import { localStorageManager } from '../../utils/localStorageManager'

import {
  AddressButton,
  AddressIcon,
  HeaderContainer,
  LinkCardButton,
  LogoImgComponent,
} from './style'

interface IAddress {
  city: string
  state: string
}

export function Header() {
  const { coffeesInCart } = useContext(CoffeeContext)

  const [amountOfCoffeeInCart, setAmountOfCoffeeInCart] = useState(
    calculateAmountOfCoffeeInCart(coffeesInCart)
  )

  const [address, setAddress] = useState<IAddress | undefined>(undefined)

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
  const cepFromStorage = localStorageManager.getItem(
    '@coffee-delivery:cep-1.0.0'
  )
  useEffect(() => {
    console.log(cepFromStorage)

    axios
      .get(`https://cep.awesomeapi.com.br/json/${cepFromStorage}`)
      .then(response => {
        const { city, state } = response.data

        setAddress({
          city,
          state,
        })
      })
      .catch(() => {})
  }, [cepFromStorage])

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
          {address && (
            <span>
              {address.city}, {address.state}
            </span>
          )}
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
