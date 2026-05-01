import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContentProvider } from "@/context/ContentContext";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Motivations from "@/pages/Motivations";
import Philosophy from "@/pages/Philosophy";
import Traits from "@/pages/Traits";
import Events from "@/pages/Events";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <div className="App">
      <ContentProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/motivations" element={<Motivations />} />
              <Route path="/philosophy" element={<Philosophy />} />
              <Route path="/traits" element={<Traits />} />
              <Route path="/events" element={<Events />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <Toaster position="top-center" />
      </ContentProvider>
    </div>
  );
}

export default App;
