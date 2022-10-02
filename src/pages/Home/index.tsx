import { CoffeeGallery } from '../../components/CoffeeGallery'
import { Header } from '../../components/Header'
import { Hero } from '../../components/Hero'
import { HomeContainer, HomeWrapper } from './style'

export function Home() {
  return (
    <HomeContainer>
      <HomeWrapper>
        <Header />
        <Hero />
        <CoffeeGallery />
      </HomeWrapper>
    </HomeContainer>
  )
}
