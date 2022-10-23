import { ICoffee } from '../../contexts/CoffeeContext'
import { ActionTypes } from './actions'

export function coffeesInCartReducer(state: ICoffee[], action: any) {
  switch (action.type) {
    case ActionTypes.DELETE_COFFEE_IN_CART_BY_ID:
      return state.filter(coffee => coffee.id !== action.payload.coffeeId)
    case ActionTypes.ADD_COFFEE_IN_CART:
      //verificar se o café já está no carrinho, se tiver, aumentar somente o amount, se não adicionar ao carrinho
      let amount = 0,
        coffeeIsAlreadyInCart = false

      state.forEach(coffee => {
        console.log('coffee', coffee)
        console.log('availableCoffee', action.payload.availableCoffee)

        if (coffee.id === action.payload.availableCoffee.id) {
          amount = action.payload.amount + coffee.amount
          console.log(amount)

          coffeeIsAlreadyInCart = true
        }
      })

      let newCoffeesInCart: ICoffee[]

      if (coffeeIsAlreadyInCart) {
        newCoffeesInCart = state.map(coffee => {
          if (coffee.id === action.payload.availableCoffee.id) {
            return {
              ...coffee,
              amount,
            }
          }
          return coffee
        })
      } else {
        newCoffeesInCart = [
          {
            ...action.payload.availableCoffee,
            amount: coffeeIsAlreadyInCart ? amount : action.payload.amount,
          },
          ...state,
        ]
      }
      return newCoffeesInCart

    case ActionTypes.UPDATE_COFFEE_IN_CART_BY_ID:
      return state.map(coffee => {
        if (coffee.id === action.payload.id) {
          return { ...coffee, amount: action.payload.amount }
        }
        return coffee
      })
    case ActionTypes.CLEAR_COFFEES_IN_CART:
      return []
    default:
      return state
  }
}
