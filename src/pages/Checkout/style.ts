import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 28rem;
  gap: 2rem;
  margin-top: 2.5rem;

  & > div {
  }

  div:nth-child(1) {
  }
  div:nth-child(2) {
    & > div {
      background-color: ${props => props.theme['base-card']};
      padding: 2.5rem;

      footer {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        width: 100%;

        div {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: space-between;
        }

        span {
          font-size: 0.875rem;
        }

        span,
        h3 {
          line-height: 130%;
        }

        h3 {
          font-size: 1.25rem;
        }

        button {
          margin-top: 1.5rem;
          width: 100%;
        }
      }
    }
  }
`

export const ColumnTitle = styled.h4`
  font-family: 'Baloo 2', cursive;
  font-size: 1.125rem;
  line-height: 130%;
`
