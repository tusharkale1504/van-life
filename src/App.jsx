import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/header/Header";
import { Home } from "./pages/homePage/Home";
import { Footer } from "./components/footer/Footer";
import { Van } from "./pages/vanPage/Van";
import { VanInfo } from "./pages/vanInfo/VanInfo";
import About from "./pages/about/About";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/vans' element={<Van />} />
        <Route path='/van/:id' element={<VanInfo />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
