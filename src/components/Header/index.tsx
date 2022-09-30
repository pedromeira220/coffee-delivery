import { CartButton } from '../CartButton'
import {
  AddressButton,
  AddressIcon,
  HeaderContainer,
  LogoImgComponent,
} from './style'

export function Header() {
  return (
    <HeaderContainer>
      <LogoImgComponent
        src="./coffee-delivery-logo.svg"
        alt="coffee delivery logo"
      />

      <div>
        <AddressButton>
          <AddressIcon size={22} weight="fill" />
          <span>Campinas, SP</span>
        </AddressButton>
        <CartButton />
      </div>
    </HeaderContainer>
  )
}
