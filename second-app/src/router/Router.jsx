import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Home from '../pages/home/Home';
import Detail from '../pages/detail/Detail';
import RandomDog from "../pages/random-dog/RandomDog";
import NotFound from "../pages/errors/404";

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="/detail" element={<Detail />}></Route>
                <Route path="/random-dog" element={<RandomDog />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
    )
}