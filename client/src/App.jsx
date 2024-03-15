import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
import AskAway from './components/AskAway'
import AzulaaiPage from './pages/AzulaaiPage'
import ListingPage from './pages/ListingPage'
import AboutUsPage from './pages/AboutUsPage'
import InqueryPage from './pages/InqueryPage'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <main className='py-3'>
        <Routes>
          <Route path='/' Component={HomePage} exact />
          <Route path='/askaway' Component={AzulaaiPage} />
          <Route path='/listing' Component={ListingPage} />
          <Route path='/about-us' Component={AboutUsPage} />
          <Route path='/inquery' Component={InqueryPage} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )

}

export default App
