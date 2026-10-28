import { HomePage } from './pages/HomePage.tsx';
import { TermsOfService } from './pages/TermsOfService.tsx'
import { Routes, Route } from 'react-router'

function App() {

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="Terms_of_Service" element={<TermsOfService />} />
    </Routes>
  )  
}

export default App
