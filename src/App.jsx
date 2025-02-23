import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./components/Home";
import AizuHackBasic from "./components/AizuHackBasic";
import AizuHackAdvanced from "./components/AizuHackAdvanced";
import Home_EN from "./components/en/Home_EN";
import AizuHackBasic_EN from "./components/en/AizuHackBasic_EN";
import Navbar_EN from "./components/en/Navbar_EN";
import AizuHackAdvanced_EN from "./components/en/AizuHackAdvanced_EN";
import Navbar from "./components/Navbar";

const AppContent = () => {
  const location = useLocation();
  const isRe = location.pathname.includes("/re-aizu-hack-2025");
  const isJa = location.pathname.includes("/ja");

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      {location.pathname === "/" ? (
        <Navbar re={isRe} />
      ) : isJa ? (
        <Navbar re={isRe} />
      ) : (
        <Navbar_EN re={isRe} />
      )}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ja" element={<Home />} />
          <Route path="/ja/aizu-hack-2025" element={<AizuHackBasic />} />
          <Route path="/ja/re-aizu-hack-2025" element={<AizuHackAdvanced />} />
          <Route path="/en" element={<Home_EN />} />
          <Route path="/en/aizu-hack-2025" element={<AizuHackBasic_EN />} />
          <Route
            path="/en/re-aizu-hack-2025"
            element={<AizuHackAdvanced_EN />}
          />
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
