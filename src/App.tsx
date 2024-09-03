
import './App.css'
import { FinanceProvider } from './Components/Pages/Context'
import Home from './Components/Pages/Header/Index'
import { GlobalStyle } from './Components/Pages/Styles/styles'
import Summary from './Components/Pages/Summary'
function App() {


  return (
    <FinanceProvider>
      <GlobalStyle />
        <Home/>
        <Summary/>
    </FinanceProvider>
  )
}

export default App
