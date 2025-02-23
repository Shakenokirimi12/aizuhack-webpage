import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AizuHackBasic from "./components/AizuHackBasic";
import AizuHackAdvanced from "./components/AizuHackAdvanced";

const AppContent = () => {
  const location = useLocation();
  const isRe = location.pathname === "/re-aizu-hack-2025";

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar re={isRe} />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aizu-hack-2025" element={<AizuHackBasic />} />
          <Route path="/re-aizu-hack-2025" element={<AizuHackAdvanced />} />
        </Routes>
      </main>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
