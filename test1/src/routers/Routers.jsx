import { BrowserRouter,Route, Routes } from "react-router-dom"
import Signup from "../page/register/Signup";


const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Routers;