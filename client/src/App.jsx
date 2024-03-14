import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
import AskAway from './components/AskAway'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <AskAway />
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
