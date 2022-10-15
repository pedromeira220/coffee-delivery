import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'
import { CoffeeItem } from '../CoffeeItem'
import { CoffeeGalleryContainer } from './style'

export function CoffeeGallery() {
  const { listOfAvailableCoffees } = useContext(CoffeeContext)

  return (
    <CoffeeGalleryContainer>
      <h3>Nossos cafés</h3>
      <main>
        {listOfAvailableCoffees.map(coffee => {
          return <CoffeeItem availableCoffee={coffee} key={coffee.id} />
        })}
      </main>
    </CoffeeGalleryContainer>
  )
}
