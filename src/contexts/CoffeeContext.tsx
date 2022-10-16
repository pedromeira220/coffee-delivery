import { createContext, useReducer, useState } from 'react'
import {
  addCoffeeInCartAction,
  deleteCoffeeInCartByIdAction,
  updateCoffeeInCartByIdAction,
} from '../reducers/coffeesInCart/actions'
import { coffeesInCartReducer } from '../reducers/coffeesInCart/reducer'

export interface IAvailableCoffee {
  id: string
  title: string
  description: string
  price: number
  img: string
  tagList: string[]
}

export interface ICoffee {
  id: string
  title: string
  description: string
  price: number
  img: string
  tagList: string[]
  amount: number
}

interface CoffeeContextType {
  listOfAvailableCoffees: IAvailableCoffee[]
  coffeesInCart: ICoffee[]
  addCoffeeInCart: (availableCoffee: IAvailableCoffee, amount: number) => void
  updateCoffeeInCartById: (id: string, amount: number) => void
  deleteCoffeeInCartById: (id: string) => void
}

export const CoffeeContext = createContext({} as CoffeeContextType)

interface CoffeeContextProvider {
  children: React.ReactNode
}

export function CoffeeContextProvider({ children }: CoffeeContextProvider) {
  const [listOfAvailableCoffees, setListOfAvailableCoffees] = useState<
    IAvailableCoffee[]
  >([
    {
      id: '1',
      title: 'Expresso tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
      img: './coffee-expresso.png',
      tagList: ['Tradicional'],
    },
    {
      id: '2',
      title: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: 8.7,
      img: './coffee-americano.png',
      tagList: ['Tradicional'],
    },
    {
      id: '3',
      title: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      price: 11.9,
      img: './coffee-cremoso.png',
      tagList: ['Tradicional'],
    },
    {
      id: '4',
      title: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      price: 10.9,
      img: './coffee-gelado.png',
      tagList: ['Tradicional', 'Gelado'],
    },
    {
      id: '5',
      title: 'Café com leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      price: 13.9,
      img: './coffee-leite.png',
      tagList: ['Tradicional', 'Com leite'],
    },
  ])

  const [coffeesInCart, dispatch] = useReducer(coffeesInCartReducer, [])

  function addCoffeeInCart(availableCoffee: IAvailableCoffee, amount: number) {
    /* setCoffeesInCart(state => {
      const newCoffeesInCart = [
        { ...availableCoffee, amount: amount },
        ...state,
      ]

      return newCoffeesInCart
    }) */

    dispatch(addCoffeeInCartAction(availableCoffee, amount))
  }

  function updateCoffeeInCartById(id: string, amount: number) {
    /* const newCoffeeInCartList = coffeesInCart.map(coffee => {
      if (coffee.id === id) {
        return { ...coffee, amount }
      }
      return coffee
    })

    setCoffeesInCart(newCoffeeInCartList) */

    dispatch(updateCoffeeInCartByIdAction(id, amount))
  }

  function deleteCoffeeInCartById(id: string) {
    dispatch(deleteCoffeeInCartByIdAction(id))

    /* const newCoffeeInCartList = coffeesInCart.filter(coffee => coffee.id !== id)
    setCoffeesInCart(newCoffeeInCartList) */
  }

  return (
    <CoffeeContext.Provider
      value={{
        listOfAvailableCoffees,
        coffeesInCart,
        deleteCoffeeInCartById,
        updateCoffeeInCartById,
        addCoffeeInCart,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
