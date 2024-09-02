
import './App.css'
import Home from './Components/Pages/Header/Index'
import { GlobalStyle } from './Components/Pages/Styles/styles'
import Summary from './Components/Pages/Summary'
function App() {


  return (
    <>
    <GlobalStyle />
      <Home/>
      <Summary/>
    </>
  )
}

export default App
