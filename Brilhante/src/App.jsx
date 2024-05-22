import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import "./Context/GlobalContext.jsx"
import { BrilhanteContextProvider } from './Context/GlobalContext.jsx'
import Footer from './Components/Footer.jsx'

function App() {

  return (
    <>
      <BrilhanteContextProvider>

        <Header />

        <Outlet />
        
        <Footer />

      </BrilhanteContextProvider>
    </>
  )
}

export default App
