import { PrimaryButton } from '../../components/PrimaryButton'
import { CheckoutContainer, ColumnTitle } from './style'

export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        <ColumnTitle>Complete seu pedido</ColumnTitle>
      </div>
      <div>
        <ColumnTitle>Cafés selecionados</ColumnTitle>
        <div>
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
      </div>
    </CheckoutContainer>
  )
}
