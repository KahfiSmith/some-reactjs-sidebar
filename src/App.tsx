import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NotFound from "./pages/NotFound";
import Index from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        {/* Index */}
        <Route path="/" element={<Index />} />

        {/* Error Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
