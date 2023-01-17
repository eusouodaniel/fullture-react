import Home from "../pages/Home"
import Contact from "../pages/Contact"
import NotFound from "../pages/errors/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/contato" element={<Contact/>}></Route>
                <Route path="*" element={<NotFound/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}