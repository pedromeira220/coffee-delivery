import { MapPin } from 'phosphor-react'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;

  & > div {
    display: flex;
    gap: 0.75rem;
    align-items: center;
    justify-content: center;
  }
`

export const LogoImgComponent = styled.img`
  width: 5.25rem;
`

export const AddressButton = styled.button`
  display: flex;
  gap: 0.25rem;
  justify-content: center;
  align-items: center;
  border: none;
  color: ${props => props.theme['purple-dark']};
  background-color: ${props => props.theme['purple-light']};
  padding: 0.5rem;
  border-radius: 6px;
`

export const AddressIcon = styled(MapPin)`
  color: ${props => props.theme.purple};
`
