import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CheckoutDataContextProvider } from './contexts/CheckoutDataContext'
import { CoffeeContextProvider } from './contexts/CoffeeContext'
import { Router } from './routes/Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeeContextProvider>
          <CheckoutDataContextProvider>
            <Router />
            <GlobalStyle />
          </CheckoutDataContextProvider>
        </CoffeeContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
