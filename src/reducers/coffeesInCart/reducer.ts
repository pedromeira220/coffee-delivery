import { ICoffee } from '../../contexts/CoffeeContext'
import { ActionTypes } from './actions'

export function coffeesInCartReducer(state: ICoffee[], action: any) {
  switch (action.type) {
    case ActionTypes.DELETE_COFFEE_IN_CART_BY_ID:
      return state.filter(coffee => coffee.id !== action.payload.coffeeId)
    case ActionTypes.ADD_COFFEE_IN_CART:
      const newCoffeesInCart = [
        {
          ...action.payload.availableCoffee,
          amount: action.payload.amount,
        },
        ...state,
      ]

      return newCoffeesInCart
    case ActionTypes.UPDATE_COFFEE_IN_CART_BY_ID:
      return state.map(coffee => {
        if (coffee.id === action.payload.id) {
          return { ...coffee, amount: action.payload.amount }
        }
        return coffee
      })
    default:
      return state
  }
}
