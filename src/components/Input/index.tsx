import { InputHTMLAttributes } from 'react'
import { StyledInput } from './style'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * Mask string. Format characters are:
   * * `9`: `0-9`
   * * `a`: `A-Z, a-z`
   * * `\*`: `A-Z, a-z, 0-9`
   *
   * Any character can be escaped with backslash, which usually will appear as double backslash in JS strings.
   * For example, German phone mask with unremoveable prefix +49 will look like `mask="+4\\9 99 999 99"` or `mask={"+4\\\\9 99 999 99"}`
   */
  mask?: string | (string | RegExp)[]
}

export function Input({ mask = '', ...rest }: InputProps) {
  return <StyledInput type="text" {...rest} mask={mask} />
}
