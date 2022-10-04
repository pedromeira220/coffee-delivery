import { InputHTMLAttributes } from 'react'
import { StyledInput } from './style'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...rest }: InputProps) {
  return <StyledInput type="text" {...rest} />
}
