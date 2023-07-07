import { BrowserRouter, Route, Routes } from "react-router-dom";
import EunBean from "./pages/EunBean";
import HeeJung from "./pages/HeeJung";
import Hyein from "./pages/Hyein";
import Jisoo from "./pages/Jisoo";
import SeongGyeong from "./pages/SeongGyeong";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/eun-bean" element={<EunBean />} />
        <Route path="/hee-jung" element={<HeeJung />} />
        <Route path="/" element={<Hyein />} />
        <Route path="/ji-soo" element={<Jisoo />} />
        <Route path="/seong-gyeong" element={<SeongGyeong />} />
      </Routes>
    </BrowserRouter>
  );
}
