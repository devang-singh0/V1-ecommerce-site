import { Home } from "./routes/home/home";
import {AllCatProducts} from './routes/categories/allCatProducts/allCatProducts'
import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import { thunk, imgThunk, productThunk } from './features/productData'
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import { Product } from "./routes/fullProduct/product";
import { Register } from "./routes/register/register";
export function App() {
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(thunk('/api/categories?populate[products][populate][0]=img&populate=*'))
        dispatch(imgThunk());
        dispatch(productThunk());
    }, [])
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" Component={Home}/>
                    <Route path="/categories/:id" Component={AllCatProducts}/>
                    <Route path="/product/:id" Component={Product}/>
                    <Route path="/register" Component={Register}/>
                </Routes>
            </Router>
        </>
    )
}