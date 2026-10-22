import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav/Nav'
import SectionOne from './components/SectionOne/SectionOne'
import Footer from './components/Footer/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav ></Nav>
      <SectionOne></SectionOne>
      <Footer></Footer>
    </>


  )
}

export default App
