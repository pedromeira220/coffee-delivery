import { CoffeeGallery } from '../../components/CoffeeGallery'
import { Hero } from '../../components/Hero'
import { HomeContainer } from './style'

export function Home() {
  return (
    <HomeContainer>
      <Hero />
      <CoffeeGallery />
    </HomeContainer>
  )
}
