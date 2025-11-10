
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import Resumegn from './pages/Resumegn'
import Pnf from './pages/Pnf'
import Header from './components/Header'
import Footer from './components/Footer'
import Form from './components/Form'
import History from './pages/History'

function App() {

  return (
    <>
    <Header/>
 <Routes>
  <Route path="/" element={<Landing/>}/>
  <Route path="/resumeGenerate" element={<Resumegn/>}/>
  <Route path="/Form" element={<Form/>}/>
  <Route path="/history" element={<History/>}/>
  <Route path="/*" element={<Pnf/>}/>
 </Routes>
 <Footer/>
    </>
  )
}

export default App
