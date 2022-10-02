import { ShoppingCart } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { ButtonIconContainer } from './style'

export function ButtonIcon() {
  const theme = useTheme()

  return (
    <ButtonIconContainer>
      <ShoppingCart size={22} weight="fill" color={theme.white} />
    </ButtonIconContainer>
  )
}
