import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CaretRight } from "phosphor-react";
import './featuredProducts.scss'
import SmallProductView from "../small product view/smallProductsView";
import {useSelector } from "react-redux/es/hooks/useSelector";
export default function FeaturedProducts() {
    let navigate = useNavigate();
    let products = useSelector((e) => e.apiSlice.value);
    let activeCat = useSelector((e) => e.apiSlice.activeHomeCat);
    let [featuredProducts, setFeaturedProducts] = useState('');
    useEffect(() => {
        if (!products.isLoading) {
            let i = [];
            products.data.data.forEach((e) => {
                if (e.attributes.name == activeCat) {
                    e.attributes.products.data.forEach((e) => {
                        if (i.length < 5) {
                            i.push(<SmallProductView key={e.id} data={e}/>);
                            console.log( );
                        }
                    })
                    setFeaturedProducts(i);
                }
            })
        }
    }, [products, activeCat])
    return (
        <>
            <div className="featuredProducts">
                <h3>Best deals on <span>{activeCat}</span></h3>
                <p onClick={()=>navigate(`/categories/${activeCat}`)}><span>View All</span> <span><CaretRight size={18} /></span></p>
            </div>
            <div>
                {featuredProducts}
            </div>
        </>
    )
}