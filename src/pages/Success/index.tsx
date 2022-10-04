import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  IconWrapper,
  Illustration,
  OrderInfo,
  OrderItem,
  SuccessPageContainer,
  TextBold,
} from './style'

export function Success() {
  return (
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
                Entrega em <TextBold>Rua João Daniel Martinelli, 102</TextBold>
              </span>
              <span> Farrapos- Porto Alegre, RS</span>
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
              <TextBold>Cartão de crédito</TextBold>
            </div>
          </OrderItem>
        </OrderInfo>
      </div>
      <Illustration src="./motoboy-illustration.png" />
    </SuccessPageContainer>
  )
}
