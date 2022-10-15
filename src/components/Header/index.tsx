import { Link } from 'react-router-dom'
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
      <Link to="/">
        <LogoImgComponent
          src="./coffee-delivery-logo.svg"
          alt="coffee delivery logo"
        />
      </Link>

      <div>
        <AddressButton>
          <AddressIcon size={22} weight="fill" />
          <span>Campinas, SP</span>
        </AddressButton>
        <Link to="/checkout">
          <CartButton />
        </Link>
      </div>
    </HeaderContainer>
  )
}
