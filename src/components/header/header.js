import { useState, useRef } from "react";
import { MagnifyingGlass, X, Columns, User, ShoppingCart } from 'phosphor-react';
import { useNavigate } from "react-router-dom";
import './headerStyle.scss'
import { useSelector } from "react-redux";
export function Header() {
    let ref = useRef();
    let products = useSelector((e) => e.apiSlice);
    let navigate = useNavigate();
    let [searchIcon, setSearchIcon] = useState(<MagnifyingGlass size={18} id="searchIcon" onClick={searchClicked} />)
    function searchClicked() {
        if (window.innerWidth <= 820) {
            document.querySelector('#searchDiv input').classList.toggle('active');
            if (document.querySelector('#searchDiv input').classList.contains('active')) {
                setSearchIcon(<X size={18} id="searchIcon" onClick={searchClicked} />)
            }
            else {
                setSearchIcon(<MagnifyingGlass size={18} id="searchIcon" onClick={searchClicked} />)
            }

        };
    }
    let [srchItemsVisible, setSrchItemsVisible] = useState(true);
    let [searchDiv, setSearchDiv] = useState();
    function search(e) {
        setSrchItemsVisible(true);
        let i = [];
        if (e.target.value.length > 2 && document.activeElement == ref?.current) {
            products?.products?.data?.forEach((elem) => {
                if (elem.attributes.title.toLowerCase().includes(e.target.value.toLowerCase())) {
                    i.push(<Srch data={elem} key={elem.id} />)
                }
            });
            if (i.length == 0) {
                i = [];
                i.push(<Srch data={null} key={1} />)
            }
        }
        setSearchDiv(i);
    }
    document.addEventListener('mousedown', (e) => {
        let div = document.querySelector('#searchDiv')
        console.log()
        if(!(ref?.current == (e.target)) && !(div?.contains?.(e.target))){
            setSrchItemsVisible(false)
        }
    })
    return (
        <>
            <nav id="navBar">
                <div id="logoDiv">
                    <Columns id="column" size={38} />
                    <h3>MegaMart</h3>
                </div>
                <div>
                    <div id="searchDiv">
                        <input placeholder="Search essentials, groceries and more..." onChange={search} ref={ref} />
                        {searchIcon}
                        {ref?.current?.value.length > 2 && srchItemsVisible && 
                            <div id="searchedProducts">
                                {searchDiv}
                            </div>}
                    </div>
                    <div id="userInteraction">
                        <div id="goToSign" onClick={() => navigate('/register')}>
                            <User size={24} id="userIcon" />
                            <p>Register</p>
                        </div>
                        <div className="line"></div>
                        <div id="goToCart">
                            <ShoppingCart size={24} id="cartIcon" />
                            <p>Cart</p>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
    function Srch({ data }) {
        return (
            <>
                {data !== null && <>
                    <div id="srch" onClick={() => { navigate(`/product/${data.id}`) }}>
                        <img src={process.env.REACT_APP_URL + data?.attributes?.img?.data[0].attributes.url} alt="" />
                        <p>{data.attributes.title}</p>
                    </div>
                </>
                }
                {data == null && <>
                    <div id="srch">
                        <img src={process.env.REACT_APP_URL + data?.attributes?.img?.data[0].attributes.url} alt="" />
                        <p> no products found . . .</p>
                    </div>
                </>
                }
            </>
        )
    }
}

