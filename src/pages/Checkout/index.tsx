import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { PrimaryButton } from '../../components/PrimaryButton'
import { ToggleCreditCard } from '../../components/ToggleCreditCard'
import { SelectedCoffeeItem } from './components/SelectedCoffeeItem'
import {
  CheckoutContainer,
  ColumnTitle,
  FormContainer,
  FormHeader,
  PaymentContainer,
  PaymentHeader,
  SelectCoffeeWrapper,
} from './style'

export function Checkout() {
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
          <SelectedCoffeeItem />
          <footer>
            <div>
              <span>Total dos itens</span>
              <span>R$ 29,70</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>
            <div>
              <h3>Total</h3>
              <h3>R$ 33,20</h3>
            </div>
            <PrimaryButton text="Confirmar pedido" />
          </footer>
        </div>
      </SelectCoffeeWrapper>
    </CheckoutContainer>
  )
}
