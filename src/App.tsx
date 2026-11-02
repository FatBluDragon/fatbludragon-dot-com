import { HomePage } from './pages/HomePage.tsx';
import { Routes, Route } from 'react-router';
import { TermsOfService } from './pages/TermsOfService.tsx';
import { Gallery } from './pages/Gallery.tsx'

function App() {

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="terms-of-service" element={<TermsOfService />} />
      <Route path="gallery" element={<Gallery />} />
    </Routes>
  )  
}

export default App
