import { Header } from '../../components/Header'
import { Hero } from '../../components/Hero'
import { HomeContainer, HomeWrapper } from './style'

export function Home() {
  return (
    <HomeContainer>
      <HomeWrapper>
        <Header />
        <Hero />
      </HomeWrapper>
    </HomeContainer>
  )
}
