import { HeroContainer, Subtitle, Title, TitleWrapper } from './style'

export function Hero() {
  return (
    <HeroContainer>
      <TitleWrapper>
        <Title>Encontre o café perfeito para qualquer hora do dia</Title>
        <Subtitle>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </Subtitle>
      </TitleWrapper>

      <div>
        <img src="./coffee-hero.png" alt="" />
      </div>
    </HeroContainer>
  )
}
