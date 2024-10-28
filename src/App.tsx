import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "@/pages/NotFound";
import SidebarV1 from "@/pages/SidebarV1";
import SidebarV2 from "@/pages/SIdebarV2";

function App() {
  return (
    <Router>
      <Routes>
        {/* Index */}
        <Route path="/v1" element={<SidebarV1/>} />
        <Route path="/v2" element={<SidebarV2/>} />

        {/* Error Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
