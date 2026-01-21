import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PrivacyPolicy from "./pages/PrivacyPolicy"; // Import de la nouvelle page
import TermsOfService from "./pages/TermsOfService";
import FAQ from "./pages/FAQ";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route pour la page d'accueil */}
        <Route path="/" element={<Index />} />
        
        {/* Route pour la politique de confidentialité */}
        <Route path="/privacy" element={<PrivacyPolicy />} />

        <Route path="/terms" element={<TermsOfService />} />

        <Route path="/faq" element={<FAQ />} />
        
        {/* Tu pourras ajouter les CGU ici plus tard */}
        {/* <Route path="/terms" element={<TermsOfService />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;