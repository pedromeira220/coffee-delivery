import { zodResolver } from '@hookform/resolvers/zod'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useContext } from 'react'
import { Controller, useForm } from 'react-hook-form'
import * as zod from 'zod'

import { PrimaryButton } from '../../components/PrimaryButton'
import { CoffeeContext, ICoffee } from '../../contexts/CoffeeContext'
import { formatCoffeePrice } from '../../helpers/formatCoffeePrice'
import { SelectedCoffeeItem } from './components/SelectedCoffeeItem'
import {
  CheckoutContainerForm,
  ChoosePaymentContainer,
  ChoosePaymentMethodButton,
  ColumnTitle,
  FormContainer,
  FormGrid,
  FormHeader,
  FormInput,
  PaymentContainer,
  PaymentHeader,
  SelectCoffeeWrapper,
} from './style'

const checkoutFormSchema = zod.object({
  CEP: zod.string(),
  street: zod.string(),
  number: zod.string(),
  complement: zod.string(),
  district: zod.string(),
  city: zod.string(),
  UF: zod.string().min(2).max(2),
  paymentMethod: zod.enum(['credit_card', 'debit_card', 'cash']),
})

type CheckoutFormInputs = zod.infer<typeof checkoutFormSchema>

export function Checkout() {
  const { coffeesInCart } = useContext(CoffeeContext)

  const { handleSubmit, control } = useForm<CheckoutFormInputs>({
    resolver: zodResolver(checkoutFormSchema),
  })

  const sumOfCoffeesPrice = calculateSumOfCoffeesPrice(coffeesInCart)

  function calculateSumOfCoffeesPrice(coffeeList: ICoffee[]) {
    let priceAmount = 0

    coffeeList.forEach(coffee => {
      priceAmount += coffee.price * coffee.amount
    })

    return priceAmount
  }

  const deliveryCost = 3.5
  const formattedDeliveryCost = formatCoffeePrice(deliveryCost)

  const totalCost = sumOfCoffeesPrice + deliveryCost
  const formattedTotalCost = formatCoffeePrice(totalCost)

  const isConfirmButtonDisabled = sumOfCoffeesPrice === 0

  function handleConfirmOrder(data: CheckoutFormInputs) {
    console.log(data)
  }

  return (
    <CheckoutContainerForm onSubmit={handleSubmit(handleConfirmOrder)}>
      <FormContainer>
        <ColumnTitle>Complete seu pedido</ColumnTitle>

        <div>
          <FormHeader>
            <MapPinLine size={22} />
            <div>
              <h5>Endereço de entrega</h5>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </FormHeader>
          <FormGrid>
            <Controller
              control={control}
              name="CEP"
              render={({ field }) => {
                return (
                  <FormInput
                    gridArea="CEP"
                    placeholder="CEP"
                    value={field.value}
                    onChange={event => {
                      const inputValue = event.target.value
                      field.onChange(inputValue)
                    }}
                  />
                )
              }}
            />
            <Controller
              control={control}
              name="street"
              render={({ field }) => {
                return (
                  <FormInput
                    gridArea="ST"
                    placeholder="Rua"
                    value={field.value}
                    onChange={event => {
                      const inputValue = event.target.value
                      field.onChange(inputValue)
                    }}
                  />
                )
              }}
            />

            <Controller
              control={control}
              name="number"
              render={({ field }) => {
                return (
                  <FormInput
                    gridArea="NU"
                    placeholder="Número"
                    value={field.value}
                    onChange={event => {
                      const inputValue = event.target.value
                      field.onChange(inputValue)
                    }}
                  />
                )
              }}
            />

            <Controller
              control={control}
              name="complement"
              render={({ field }) => {
                return (
                  <FormInput
                    gridArea="COM"
                    placeholder="Complemento"
                    value={field.value}
                    onChange={event => {
                      const inputValue = event.target.value
                      field.onChange(inputValue)
                    }}
                  />
                )
              }}
            />

            <Controller
              control={control}
              name="district"
              render={({ field }) => {
                return (
                  <FormInput
                    gridArea="DI"
                    placeholder="Bairro"
                    value={field.value}
                    onChange={event => {
                      const inputValue = event.target.value
                      field.onChange(inputValue)
                    }}
                  />
                )
              }}
            />
            <Controller
              control={control}
              name="city"
              render={({ field }) => {
                return (
                  <FormInput
                    gridArea="CI"
                    placeholder="Cidade"
                    value={field.value}
                    onChange={event => {
                      const inputValue = event.target.value
                      field.onChange(inputValue)
                    }}
                  />
                )
              }}
            />

            <Controller
              control={control}
              name="UF"
              render={({ field }) => {
                return (
                  <FormInput
                    gridArea="UF"
                    placeholder="UF"
                    value={field.value}
                    onChange={event => {
                      const inputValue = event.target.value
                      field.onChange(inputValue)
                    }}
                  />
                )
              }}
            />
          </FormGrid>
        </div>

        <PaymentContainer>
          <PaymentHeader>
            <CurrencyDollar size={22} />
            <div>
              <h5>Pagamento</h5>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </PaymentHeader>

          <Controller
            control={control}
            name="paymentMethod"
            render={({ field }) => {
              return (
                <>
                  <ChoosePaymentContainer
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <ChoosePaymentMethodButton value="credit_card">
                      <CreditCard size={16} />
                      <span>Cartão de crédito</span>
                    </ChoosePaymentMethodButton>

                    <ChoosePaymentMethodButton value="debit_card">
                      <Bank size={16} />
                      <span>Cartão de débito</span>
                    </ChoosePaymentMethodButton>

                    <ChoosePaymentMethodButton value="cash">
                      <Money size={16} />
                      <span>Dinheiro</span>
                    </ChoosePaymentMethodButton>
                  </ChoosePaymentContainer>
                </>
              )
            }}
          />
        </PaymentContainer>
      </FormContainer>

      <SelectCoffeeWrapper>
        <ColumnTitle>Cafés selecionados</ColumnTitle>

        <div>
          {coffeesInCart.map(coffee => {
            return <SelectedCoffeeItem coffee={coffee} key={coffee.id} />
          })}

          <footer>
            <div>
              <span>Total dos itens</span>
              <span>R$ {sumOfCoffeesPrice}</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>
                R$ {isConfirmButtonDisabled ? 0 : formattedDeliveryCost}
              </span>
            </div>
            <div>
              <h3>Total</h3>
              <h3>R$ {isConfirmButtonDisabled ? 0 : formattedTotalCost}</h3>
            </div>
            <PrimaryButton
              text="Confirmar pedido"
              disabled={isConfirmButtonDisabled}
            />
          </footer>
        </div>
      </SelectCoffeeWrapper>
    </CheckoutContainerForm>
  )
}
