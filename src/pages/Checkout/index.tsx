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
import { useNavigate } from 'react-router-dom'
import * as zod from 'zod'

import { PrimaryButton } from '../../components/PrimaryButton'
import { CheckoutDataContext } from '../../contexts/CheckoutDataContext'
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
  FormInputWrapper,
  InputErrorMessageText,
  PaymentContainer,
  PaymentHeader,
  SelectCoffeeWrapper,
} from './style'

const checkoutFormSchema = zod.object({
  CEP: zod
    .string()
    .min(8, 'Insira um CEP valido')
    .regex(/[0-9]{5}-[0-9]{3}/, 'Insira um CEP valido'),
  street: zod.string().min(1, 'Insira a rua do endereço de entrega'),
  number: zod
    .string({
      required_error: 'Insira o número do endereço de entrega',
    })
    .min(1, 'Insira o número do endereço de entrega'),

  complement: zod.string().optional(),
  district: zod.string().min(1, 'Insira o bairro do endereço de entrega'),
  city: zod.string().min(1, 'Insira a cidade do endereço de entrega'),
  UF: zod
    .string()
    .min(2, 'Insira o UF do endereço de entrega')
    .max(2, 'Insira o UF do endereço de entrega'),
  paymentMethod: zod.enum(['credit_card', 'debit_card', 'cash']),
})

type CheckoutFormInputs = zod.infer<typeof checkoutFormSchema>

export function Checkout() {
  const { coffeesInCart } = useContext(CoffeeContext)
  const { setCheckoutData } = useContext(CheckoutDataContext)
  const navigate = useNavigate()

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CheckoutFormInputs>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      paymentMethod: 'credit_card',
      CEP: '',
      city: '',
      complement: '',
      district: '',
      number: '',
      street: '',
      UF: '',
    },
  })

  const sumOfCoffeesPrice = calculateSumOfCoffeesPrice(coffeesInCart)
  const formattedSumOfCoffeesPrice = formatSubOfCoffeesPrice(sumOfCoffeesPrice)

  function formatSubOfCoffeesPrice(number: number) {
    return number
      .toFixed(1)
      .split('')
      .map(char => {
        if (char === '.') {
          return ','
        } else {
          return char
        }
      })
      .join('')
  }

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
    setCheckoutData({
      CEP: data.CEP,
      city: data.city,
      district: data.district,
      number: data.number,
      paymentMethod: data.paymentMethod,
      street: data.street,
      UF: data.UF,
      complement: data.complement,
      cost: {
        deliveryCost: deliveryCost,
        subtotal: sumOfCoffeesPrice,
        totalCost: totalCost,
      },
    })

    navigate('/success')
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
              render={({ field, fieldState }) => {
                return (
                  <FormInputWrapper gridArea="CEP">
                    <FormInput
                      mask="99999-999"
                      placeholder="CEP"
                      value={field.value}
                      onChange={event => {
                        const inputValue = event.target.value
                        field.onChange(inputValue)
                      }}
                    />
                    {fieldState.error && (
                      <InputErrorMessageText>
                        {fieldState.error.message}
                      </InputErrorMessageText>
                    )}
                  </FormInputWrapper>
                )
              }}
            />
            <Controller
              control={control}
              name="street"
              render={({ field, fieldState }) => {
                return (
                  <FormInputWrapper gridArea="ST">
                    <FormInput
                      placeholder="Rua"
                      value={field.value}
                      onChange={event => {
                        const inputValue = event.target.value
                        field.onChange(inputValue)
                      }}
                    />
                    {fieldState.error && (
                      <InputErrorMessageText>
                        {fieldState.error.message}
                      </InputErrorMessageText>
                    )}
                  </FormInputWrapper>
                )
              }}
            />

            <Controller
              control={control}
              name="number"
              render={({ field, fieldState }) => {
                return (
                  <FormInputWrapper gridArea="NU">
                    <FormInput
                      placeholder="Número"
                      value={field.value}
                      onChange={event => {
                        const inputValue = event.target.value
                        field.onChange(inputValue)
                      }}
                    />
                    {fieldState.error && (
                      <InputErrorMessageText>
                        {fieldState.error.message}
                      </InputErrorMessageText>
                    )}
                  </FormInputWrapper>
                )
              }}
            />

            <Controller
              control={control}
              name="complement"
              render={({ field, fieldState }) => {
                return (
                  <FormInputWrapper gridArea="COM">
                    <FormInput
                      placeholder="Complemento"
                      value={field.value}
                      onChange={event => {
                        const inputValue = event.target.value
                        field.onChange(inputValue)
                      }}
                    />

                    {fieldState.error && (
                      <InputErrorMessageText>
                        {fieldState.error.message}
                      </InputErrorMessageText>
                    )}
                  </FormInputWrapper>
                )
              }}
            />

            <Controller
              control={control}
              name="district"
              render={({ field, fieldState }) => {
                return (
                  <FormInputWrapper gridArea="DI">
                    <FormInput
                      placeholder="Bairro"
                      value={field.value}
                      onChange={event => {
                        const inputValue = event.target.value
                        field.onChange(inputValue)
                      }}
                    />

                    {fieldState.error && (
                      <InputErrorMessageText>
                        {fieldState.error.message}
                      </InputErrorMessageText>
                    )}
                  </FormInputWrapper>
                )
              }}
            />
            <Controller
              control={control}
              name="city"
              render={({ field, fieldState }) => {
                return (
                  <FormInputWrapper gridArea="CI">
                    <FormInput
                      placeholder="Cidade"
                      value={field.value}
                      onChange={event => {
                        const inputValue = event.target.value
                        field.onChange(inputValue)
                      }}
                    />

                    {fieldState.error && (
                      <InputErrorMessageText>
                        {fieldState.error.message}
                      </InputErrorMessageText>
                    )}
                  </FormInputWrapper>
                )
              }}
            />

            <Controller
              control={control}
              name="UF"
              render={({ field, fieldState }) => {
                return (
                  <FormInputWrapper gridArea="UF">
                    <FormInput
                      mask="aa"
                      placeholder="UF"
                      value={field.value}
                      onChange={event => {
                        const inputValue = event.target.value
                        field.onChange(inputValue.toUpperCase())
                      }}
                    />
                    {fieldState.error && (
                      <InputErrorMessageText>
                        {fieldState.error.message}
                      </InputErrorMessageText>
                    )}
                  </FormInputWrapper>
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
              <span>R$ {formattedSumOfCoffeesPrice}</span>
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
