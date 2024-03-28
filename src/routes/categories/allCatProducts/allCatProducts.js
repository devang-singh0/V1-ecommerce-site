import { useParams, useNavigate } from "react-router-dom";
import './allCatProducts.scss'
import { CaretLeft } from "phosphor-react";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import SmallProductView from "../../../components/small product view/smallProductsView";
export function AllCatProducts() {
    const { id } = useParams();
    let [catProducts, setCatProducts] = useState();
    let categories = useSelector((e) => e.apiSlice.value);
    let navigate = useNavigate();
    useEffect(() => {
        if (!categories.isLoading) {
            categories.data.data.forEach((e) => {
                if (e.attributes.name == id) {
                    setCatProducts(e);
                }
            })
        }
    }, [categories])
    return (
        <>
            <div id="back">
                <p onClick={()=> navigate(-1)}><CaretLeft size={32}/></p>
            </div>
            <div className="categories">
                <h3>Best deals on <span>{id}</span></h3>
            </div>
            <div>
                {catProducts?.attributes.products.data.map((e) => <SmallProductView data={e} />)}
            </div>
        </>
    )
}