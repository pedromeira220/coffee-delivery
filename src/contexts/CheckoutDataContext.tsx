import { createContext, ReactNode, useState } from 'react'

interface CheckoutData {
  complement?: string | undefined
  number: string
  CEP: string
  street: string
  district: string
  city: string
  UF: string
  paymentMethod: 'credit_card' | 'debit_card' | 'cash'
  cost: {
    deliveryCost: number
    subtotal: number
    totalCost: number
  }
}

interface CheckoutDataContextType {
  checkoutData: CheckoutData
  setCheckoutData: React.Dispatch<React.SetStateAction<CheckoutData>>
}

export const CheckoutDataContext = createContext({} as CheckoutDataContextType)

interface CheckoutDataContextProviderProps {
  children: ReactNode
}

export function CheckoutDataContextProvider({
  children,
}: CheckoutDataContextProviderProps) {
  const [checkoutData, setCheckoutData] = useState<CheckoutData>({
    CEP: '',
    city: '',

    district: '',
    number: '',
    paymentMethod: 'credit_card',
    street: '',
    UF: '',
    complement: '',
    cost: {
      deliveryCost: 0,
      subtotal: 0,
      totalCost: 0,
    },
  })

  return (
    <CheckoutDataContext.Provider value={{ checkoutData, setCheckoutData }}>
      {children}
    </CheckoutDataContext.Provider>
  )
}
