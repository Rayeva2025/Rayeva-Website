import './App.css'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Contact from './pages/Contact'

function App() {
  return (
    <>
    {/* <div className="min-h-screen bg-gradient-to-br from-[#DAFBE6] to-[#E7F6FF]"> */}
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    {/* </div> */}
    </>
  )
}

export default App