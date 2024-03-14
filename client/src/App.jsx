import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
import AskAway from './components/AskAway'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' Component={HomePage} exact />
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  )

}

export default App
