import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import ShariahCompliance from './pages/ShariahCompliance';
import InvestmentPlans from './pages/InvestmentPlans';
import SecurityTransparency from './pages/SecurityTransparency';
import About from './pages/About';
import Contact from './pages/Contact';
import Calculator from './pages/Calculator';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="shariah" element={<ShariahCompliance />} />
          <Route path="plans" element={<InvestmentPlans />} />
          <Route path="security" element={<SecurityTransparency />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

