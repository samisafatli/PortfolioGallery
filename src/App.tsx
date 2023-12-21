import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { GalleryPage } from './Pages/GalleryPage/GalleryPage'
import { ContactPage } from './Pages/ContactPage/ContactPage'
import { HomePage } from './Pages/HomePage/HomePage'
import { Header } from './Components/Header/Header'
import { Footer } from './Components/Footer/Footer'

import './App.css'

function App() {
  return (
    <Router>
      <Header />
      <div className="main-container">
        <div className="content-grow">
          <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/Gallery' element={<GalleryPage />}></Route>
            <Route path='/Contact' element={<ContactPage />}></Route>
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  )
}

export default App
