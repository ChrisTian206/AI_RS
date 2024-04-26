import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import AzulaaiPage from './pages/AzulaaiPage'
import AboutUsPage from './pages/AboutUsPage'
import InqueryPage from './pages/InqueryPage'
import SummarizeStrataPage from './pages/SummarizeStrataPage'
import PropertyPage from './pages/PropertyPage'
import axios from 'axios'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'

function App() {

  //"http://localhost:8000/api"
  //https://ai-rs.onrender.com/api
  axios.defaults.baseURL = "https://ai-rs.onrender.com/api"

  return (
    <BrowserRouter>
      <Header />
      <main className='py-3'>
        <Routes>
          <Route path='/' Component={HomePage} exact />
          <Route path='/askaway' Component={AzulaaiPage} />
          <Route path='/about-us' Component={AboutUsPage} />
          <Route path='/inquery' Component={InqueryPage} />
          <Route path='/strata' Component={SummarizeStrataPage} />
          <Route path='/property/:id' Component={PropertyPage} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )

}

export default App
