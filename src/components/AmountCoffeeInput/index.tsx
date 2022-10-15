import { InputHTMLAttributes } from 'react'
import { Input } from './style'

interface AmountCoffeeInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

export function AmountCoffeeInput({ ...rest }: AmountCoffeeInputProps) {
  return <Input type="number" defaultValue={0} min={0} {...rest} />
}
