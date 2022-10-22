import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { CheckoutDataContext } from '../../contexts/CheckoutDataContext'
import {
  IconWrapper,
  Illustration,
  OrderInfo,
  OrderItem,
  SuccessPageContainer,
  TextBold,
} from './style'

export function Success() {
  const { checkoutData } = useContext(CheckoutDataContext)

  function returnFormattedPaymentMethod(
    paymentMethod: typeof checkoutData.paymentMethod
  ) {
    switch (paymentMethod) {
      case 'cash':
        return 'Dinheiro'
      case 'credit_card':
        return 'Cartão de crédito'
      case 'debit_card':
        return 'Cartão de débito'
    }
  }

  return (
    <>
      {checkoutData.cost.totalCost ? (
        <SuccessPageContainer>
          <div>
            <h1>Uhu! Pedido confirmado</h1>
            <h3>Agora é só aguardar que logo o café chegará até você</h3>

            <OrderInfo>
              <OrderItem>
                <IconWrapper iconBg="purple">
                  <MapPin size={16} weight="fill" />
                </IconWrapper>
                <div>
                  <span>
                    Entrega em{' '}
                    <TextBold>
                      {checkoutData.street}, {checkoutData.number}
                    </TextBold>
                  </span>
                  <span>
                    {checkoutData.district} - {checkoutData.city},{' '}
                    {checkoutData.UF}
                  </span>
                </div>
              </OrderItem>
              <OrderItem>
                <IconWrapper iconBg="yellow">
                  <Timer size={16} weight="fill" />
                </IconWrapper>
                <div>
                  <span>Previsão de entrega</span>
                  <TextBold>20 min - 30 min </TextBold>
                </div>
              </OrderItem>
              <OrderItem>
                <IconWrapper iconBg="yellow-dark">
                  <CurrencyDollar size={16} weight="fill" />
                </IconWrapper>
                <div>
                  <span>Pagamento na entrega</span>
                  <TextBold>
                    {returnFormattedPaymentMethod(checkoutData.paymentMethod)}
                  </TextBold>
                </div>
              </OrderItem>
            </OrderInfo>
          </div>
          <Illustration src="./motoboy-illustration.png" />
        </SuccessPageContainer>
      ) : (
        <Navigate to="/checkout" />
      )}
    </>
  )
}
