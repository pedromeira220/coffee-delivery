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
          <HeroItem />
          <HeroItem />
          <HeroItem />
          <HeroItem />
        </HeroItemsWrapper>
      </div>

      <div>
        <CoffeeImg src="./coffee-hero.png" />
      </div>
    </HeroContainer>
  )
}
