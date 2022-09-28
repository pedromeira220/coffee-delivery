import { ButtonHTMLAttributes } from 'react'
import { PrimaryButtonContainer } from './styles'

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

export function PrimaryButton({ text, ...rest }: PrimaryButtonProps) {
  return <PrimaryButtonContainer {...rest}>{text}</PrimaryButtonContainer>
}
