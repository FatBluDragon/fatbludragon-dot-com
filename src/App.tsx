import { HomePage } from './pages/HomePage.tsx';
import { TermsOfService } from './pages/TermsOfService.tsx';
import { Routes, Route } from 'react-router';
import { TosTest } from './pages/TosTest.tsx';

function App() {

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="tos" element={<TermsOfService />} />
      <Route path="test" element={<TosTest />} />
    </Routes>
  )  
}

export default App
