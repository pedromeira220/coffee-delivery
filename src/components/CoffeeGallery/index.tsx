import { CoffeeItem } from '../CoffeeItem'
import { CoffeeGalleryContainer } from './style'

export function CoffeeGallery() {
  return (
    <CoffeeGalleryContainer>
      <h3>Nossos cafés</h3>
      <main>
        <CoffeeItem />
        <CoffeeItem />
        <CoffeeItem />
        <CoffeeItem />
        <CoffeeItem />
        <CoffeeItem />
        <CoffeeItem />
        <CoffeeItem />
      </main>
    </CoffeeGalleryContainer>
  )
}
