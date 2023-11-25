import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import GalleryPage from './Pages/GalleryPage/GalleryPage'
import ContactPage from './Pages/ContactPage/ContactPage'
import HomePage from './Pages/HomePage/HomePage'
import Header from './Components/Header/Header'

function App() {
  return (
  <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/Gallery' element={<GalleryPage/>}></Route>
      <Route path='/Contact' element={<ContactPage/>}></Route>
    </Routes>
  </Router>
  )
}

export default App
