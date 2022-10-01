import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { HeroItem } from './components/HeroItem'
import {
  CoffeeImg,
  HeroContainer,
  HeroItemsWrapper,
  Subtitle,
  Title,
  TitleWrapper,
} from './style'

export function Hero() {
  return (
    <HeroContainer>
      <div>
        <TitleWrapper>
          <Title>Encontre o café perfeito para qualquer hora do dia</Title>
          <Subtitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </Subtitle>
        </TitleWrapper>
        <HeroItemsWrapper>
          <HeroItem
            text="Compra simples e segura"
            color="yellow-dark"
            icon={<ShoppingCart weight="fill" size={16} />}
          />
          <HeroItem
            text="Embalagem matem o café intacto"
            color="gray"
            icon={<Package size={16} weight="fill" />}
          />
          <HeroItem
            text="Entrega rápida e rastreada"
            color="yellow"
            icon={<Timer size={16} weight="fill" />}
          />
          <HeroItem
            text="O café chega fresquinho até você"
            color="purple"
            icon={<Coffee size={16} weight="fill" />}
          />
        </HeroItemsWrapper>
      </div>

      <div>
        <CoffeeImg src="./coffee-hero.png" />
      </div>
    </HeroContainer>
  )
}
