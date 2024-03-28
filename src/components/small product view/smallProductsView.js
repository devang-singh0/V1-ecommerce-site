import './smallProductsViewStyles.scss'
import { useNavigate } from 'react-router-dom'
export default function SmallProductView({data}) {
    let navigate = useNavigate();
    return (
        <>
            <div id="productSmallDiv" onClick={()=> navigate(`/product/${data.id}`)}>
                <div>
                    <img src={process.env.REACT_APP_URL +data.attributes.img.data[0].attributes.url} />
                </div>
                <p>{Math.floor((data.attributes.price - data.attributes.salePrice) / data.attributes.salePrice * 100)}% off</p>
                <h3>{data.attributes.title}</h3>
                <h4><span>₹{data.attributes.salePrice}</span> <span>₹{data.attributes.price}</span></h4>
                <hr />
                <h5>Save &nbsp;-&nbsp; ₹{data.attributes.price - data.attributes.salePrice}</h5>
            </div>
        </>
    )
}
