import { IAvailableCoffee } from '../../contexts/CoffeeContext'

export enum ActionTypes {
  DELETE_COFFEE_IN_CART_BY_ID = 'DELETE_COFFEE_IN_CART_BY_ID',
  ADD_COFFEE_IN_CART = 'ADD_COFFEE_IN_CART',
  UPDATE_COFFEE_IN_CART_BY_ID = 'UPDATE_COFFEE_IN_CART_BY_ID',
  CLEAR_COFFEES_IN_CART = 'CLEAR_COFFEES_IN_CART',
}

export function addCoffeeInCartAction(
  availableCoffee: IAvailableCoffee,
  amount: number
) {
  return {
    type: ActionTypes.ADD_COFFEE_IN_CART,
    payload: {
      availableCoffee,
      amount,
    },
  }
}

export function updateCoffeeInCartByIdAction(id: string, amount: number) {
  return {
    type: ActionTypes.UPDATE_COFFEE_IN_CART_BY_ID,
    payload: {
      id,
      amount,
    },
  }
}

export function deleteCoffeeInCartByIdAction(id: string) {
  return {
    type: ActionTypes.DELETE_COFFEE_IN_CART_BY_ID,
    payload: {
      coffeeId: id,
    },
  }
}

export function clearCoffeesInCartAction() {
  return {
    type: ActionTypes.CLEAR_COFFEES_IN_CART,
  }
}
