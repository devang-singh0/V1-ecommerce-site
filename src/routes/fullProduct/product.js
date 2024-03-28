import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ShoppingBag, ShoppingBagOpen } from 'phosphor-react'
import './product.scss'
export function Product() {
    let { id } = useParams();
    let products = useSelector((e) => e.apiSlice);
    let [isReview, setIsReview] = useState(false);
    let [isContent, setIsContent] = useState(true);
    let [currentProduct, setCurrentProduct] = useState();
    useEffect(() => {
        if (!products.value.isLoading) {
            products?.products?.data?.forEach((e) => {
                if (e.id == id) {
                    setCurrentProduct(e);
                    console.log()
                }
            })
        }
    }, [products]);
    function cartButtonClicked(e) {
        e.target.innerHTML = <span><ShoppingBag size={32} /></span> + 'Added to cart'
    }
    function info(e) {
        setIsContent(true);
        setIsReview(false);
        document.querySelector('#product #productTop .active').classList.remove('active')
        e.target.classList.add('active');
    }
    function review(e) {
        setIsReview(true);
        setIsContent(false);
        document.querySelector('#product #productTop .active').classList.remove('active')
        e.target.classList.add('active');
    }
    return (
        <>
            <main id="product">
                <div id="heading"><h2>{currentProduct?.attributes.title}</h2></div>
                <div id="productTop">
                    <button className="active" onClick={info}>Genral info</button>
                    <button onClick={review}>Reviews</button>
                </div> <hr />
                <div id="mainProduct">
                    <div id="img">
                        <img src={process.env.REACT_APP_URL + currentProduct?.attributes.img.data[0].attributes.url} alt="" />
                    </div>
                    {isContent && <div id="details">
                        <div id="price">
                            <p>₹{currentProduct?.attributes?.salePrice} <span>₹{currentProduct?.attributes?.price}</span><b>-{Math.ceil((currentProduct?.attributes?.price - currentProduct?.attributes?.salePrice) / currentProduct?.attributes?.price * 100)}%</b></p>
                            <div id="ratings">
                                <p id="star">⭐⭐⭐⭐⭐
                                </p>
                                <p>12 reviews</p>
                            </div>
                        </div>
                        <div id="cart">
                            <input type="number" placeholder="1" />
                            <button><span><ShoppingBag size={32} /></span>Add to cart</button>
                            <button><span><ShoppingBagOpen size={24} /></span>Go To Cart</button>
                        </div>
                        <div id="delivery">
                            <h3>Product Details</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <td>details</td>
                                        <td>product details</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>more details</td>
                                        <td>more details</td>
                                    </tr>
                                    <tr>
                                        <td>more details</td>
                                        <td>more details</td>
                                    </tr>
                                    <tr>
                                        <td>more details</td>
                                        <td>more details</td>
                                    </tr>
                                    <tr>
                                        <td>more details</td>
                                        <td>more details</td>
                                    </tr>
                                </tbody>
                            </table>
                            <h3>delivery</h3>
                            <p>Free standard shipping on orders over $35 before tax, plus free returns.</p>
                            <h3>Return</h3>
                            <p>You have 60 days to return the item(s) using any of the following methods:</p>
                            <ul>
                                <li>Free store return</li>
                                <li>Free returns via USPS Dropoff Service</li>
                            </ul>
                        </div>
                        <div id="imgDiv">
                            <img src={process.env.REACT_APP_URL + products?.value?.img?.data?.[0].attributes.img.data.attributes.url} alt="" />
                            <img src={process.env.REACT_APP_URL + products?.value?.img?.data?.[1].attributes.img.data.attributes.url} alt="" />
                            <img src={process.env.REACT_APP_URL + products?.value?.img?.data?.[2].attributes.img.data.attributes.url} alt="" />
                        </div>
                    </div>}
                    {isReview && <div id="reviews">
                        <div>
                            <img src={process.env.REACT_APP_URL + products?.value?.img?.data?.[8].attributes.img.data.attributes.url} alt="" />
                            <p><span>name</span><span>⭐⭐⭐⭐⭐</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus cum architecto incidunt cupiditate dolor officiis, corrupti laudantium rem amet, eos at?</p>
                        </div>
                        <div>
                            <img src={process.env.REACT_APP_URL + products?.value?.img?.data?.[8].attributes.img.data.attributes.url} alt="" />
                            <p><span>name</span><span>⭐⭐⭐⭐⭐</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus cum architecto incidunt cupiditate dolor officiis, corrupti laudantium rem amet, eos at?</p>
                        </div>
                        <div>
                            <img src={process.env.REACT_APP_URL + products?.value?.img?.data?.[8].attributes.img.data.attributes.url} alt="" />
                            <p><span>name</span><span>⭐⭐⭐⭐⭐</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus cum architecto incidunt cupiditate dolor officiis, corrupti laudantium rem amet, eos at?</p>
                        </div>
                        <div>
                            <img src={process.env.REACT_APP_URL + products?.value?.img?.data?.[8].attributes.img.data.attributes.url} alt="" />
                            <p><span>name</span><span>⭐⭐⭐⭐⭐</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus cum architecto incidunt cupiditate dolor officiis, corrupti laudantium rem amet, eos at?</p>
                        </div>
                        <div>
                            <img src={process.env.REACT_APP_URL + products?.value?.img?.data?.[8].attributes.img.data.attributes.url} alt="" />
                            <p><span>name</span><span>⭐⭐⭐⭐⭐</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus cum architecto incidunt cupiditate dolor officiis, corrupti laudantium rem amet, eos at?</p>
                        </div>
                        <div>
                            <img src={process.env.REACT_APP_URL + products?.value?.img?.data?.[8].attributes.img.data.attributes.url} alt="" />
                            <p><span>name</span><span>⭐⭐⭐⭐⭐</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus cum architecto incidunt cupiditate dolor officiis, corrupti laudantium rem amet, eos at?</p>
                        </div>
                    </div>}
                </div>
            </main>
        </>
    )
}