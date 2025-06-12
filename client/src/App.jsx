import { BrowserRouter, Routes, Route } from "react-router-dom";
import PricingCalculator from "./pages/PricingCalculator";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PricingCalculator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
