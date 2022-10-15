import { ShoppingCart } from 'phosphor-react'
import { ButtonHTMLAttributes } from 'react'
import { useTheme } from 'styled-components'
import { ButtonIconContainer } from './style'

interface ButtonIconsProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function ButtonIcon({ ...rest }: ButtonIconsProps) {
  const theme = useTheme()

  return (
    <ButtonIconContainer {...rest}>
      <ShoppingCart size={22} weight="fill" color={theme.white} />
    </ButtonIconContainer>
  )
}
