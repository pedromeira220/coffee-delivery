import styled from 'styled-components'

export const HeroItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    color: ${props => props.theme.white};
    background-color: ${props => props.theme['yellow-dark']};
    padding: 0.5rem;
    border-radius: 50%;
    display: inline-flex;
    width: auto;
  }
`
