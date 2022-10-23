import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
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
            <ToastContainer
              position="bottom-right"
              autoClose={2.5 * 1000} //2.5 seconds
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
            <Router />
            <GlobalStyle />
          </CheckoutDataContextProvider>
        </CoffeeContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
