import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Introduction from './pages/Introduction'
import Contract from './pages/Contract'
import Students from "./pages/Students";
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/contract" element={<Contract />} />
        <Route path="/students" element={<Students />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

