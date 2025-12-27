import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import SideEffectDetail from "./pages/SideEffectDetail";
import Home from "./pages/Home";
import Guidance from "./pages/Guidance";
import PostRecovery from "./pages/PostRecovery";
import Navbar from "./components/Navbar";
function App() {
  return (
    <BrowserRouter>
      <Navbar isHome={location.pathname === "/"}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guidance" element={<Guidance />} />
        <Route path="/post-recovery" element={<PostRecovery />} />
        <Route path="/post-recovery/:effect" element={<SideEffectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
