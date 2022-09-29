import { Trash } from 'phosphor-react'
import { ButtonHTMLAttributes } from 'react'
import { RemoveButtonContainer } from './style'

interface RemoveButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

export function RemoveButton({ text, ...rest }: RemoveButtonProps) {
  return (
    <RemoveButtonContainer {...rest}>
      <Trash size={16} />

      <span>{text}</span>
    </RemoveButtonContainer>
  )
}
