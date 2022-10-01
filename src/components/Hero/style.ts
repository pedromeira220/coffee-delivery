import styled from 'styled-components'

export const HeroContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 6rem 0;

  display: flex;
  align-items: flex-start;
  gap: 3.5rem;
`

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Title = styled.h1`
  font-family: 'Baloo 2', cursive;
  line-height: 130%;
  font-size: 3rem;
  color: ${props => props.theme['base-title']};
`

export const Subtitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 400;
  color: ${props => props.theme['base-subtitle']};
`
