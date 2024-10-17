import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Home} from "./pages/Home/Home";
import {AboutUs} from "./pages/AboutUs/AboutUs";
import {Services} from "./pages/Services/Services";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/sobre-nosotros" element={<AboutUs />}></Route>
                <Route path="/servicios" element={<Services />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
