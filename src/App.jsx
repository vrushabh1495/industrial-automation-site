import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Technologies from './pages/Technologies'
import ITSolutions from './pages/ITSolutions'
import Siemens from './pages/Siemens'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/technologies' element={<Technologies/>}></Route>
        <Route path='/itsolutions' element={<ITSolutions/>}></Route>
        <Route path='/siemens' element={<Siemens/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
