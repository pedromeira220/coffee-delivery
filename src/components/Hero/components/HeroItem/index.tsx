import { HeroItemContainer, IconWrapper } from './style'

export type colorsType = 'yellow-dark' | 'yellow' | 'gray' | 'purple'
interface HeroItemsProps {
  text: string
  icon: React.ReactNode
  color: colorsType
}

export function HeroItem({ color, icon: Icon, text }: HeroItemsProps) {
  return (
    <HeroItemContainer>
      <IconWrapper color={color}>{Icon}</IconWrapper>
      <p>{text}</p>
    </HeroItemContainer>
  )
}
