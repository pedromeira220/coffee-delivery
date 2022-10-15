import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { useContext } from 'react'

import { PrimaryButton } from '../../components/PrimaryButton'
import { ToggleCreditCard } from '../../components/ToggleCreditCard'
import { CoffeeContext, ICoffee } from '../../contexts/CoffeeContext'
import { formatCoffeePrice } from '../../helpers/formatCoffeePrice'
import { SelectedCoffeeItem } from './components/SelectedCoffeeItem'
import {
  CheckoutContainer,
  ColumnTitle,
  FormContainer,
  FormGrid,
  FormHeader,
  FormInput,
  PaymentContainer,
  PaymentHeader,
  SelectCoffeeWrapper,
} from './style'

export function Checkout() {
  const { coffeesInCart } = useContext(CoffeeContext)

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

  return (
    <CheckoutContainer>
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
            <FormInput gridArea="CEP" placeholder="CEP" />
            <FormInput gridArea="ST" placeholder="Rua" />
            <FormInput gridArea="NU" placeholder="Número" />
            <FormInput gridArea="COM" placeholder="Complemento" />
            <FormInput gridArea="DI" placeholder="Bairro" />
            <FormInput gridArea="CI" placeholder="Cidade" />
            <FormInput gridArea="UF" placeholder="UF" />
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
          <div>
            <ToggleCreditCard />
            <ToggleCreditCard />
            <ToggleCreditCard />
          </div>
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
              <span>R$ {formattedDeliveryCost}</span>
            </div>
            <div>
              <h3>Total</h3>
              <h3>R$ {formattedTotalCost}</h3>
            </div>
            <PrimaryButton text="Confirmar pedido" />
          </footer>
        </div>
      </SelectCoffeeWrapper>
    </CheckoutContainer>
  )
}
