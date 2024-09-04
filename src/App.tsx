
import './App.css'
import { FinanceProvider } from './Components/Context'
import Grafico from './Components/Grafico'
import Home from './Components/Header/Index'
import { GlobalStyle } from './Components/Styles/styles'
import Summary from './Components/Summary'
function App() {


  return (
    <FinanceProvider>
      <GlobalStyle />
        <Home/>
        <Summary/>
        <Grafico/>
    </FinanceProvider>
  )
}

export default App
