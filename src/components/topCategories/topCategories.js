import { useEffect } from 'react'
import './TopCategoriesStyles.scss'
import { catThunk } from '../../features/productData';
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function TopCategory() {
    let categories = useSelector((e)=> e.apiSlice.value);
    let [catData, setCatData] = useState();
    let dispatch = useDispatch();
    useEffect(()=>{
        dispatch(catThunk('/api/categories?populate=*'))
    }, [])
    useEffect(()=>{
        if(!categories.isLoading){
            setCatData(categories.categories.data);
        }
    }, [categories])
    return (
        <>
            <div className="topCategories">
                <h3>Shop from <span>Top Caregories</span></h3>
            </div>
            <div>
                {catData?.map((e)=> <TopCategories key={e.id} data={e}/>)}
            </div>
        </>
    )
}

function TopCategories({data}) {
    let navigate = useNavigate();
    return (
        <>
            <div id="topCategories" onClick={()=> navigate(`/categories/${data.attributes.name}`)}>
                <div>
                <img src={process.env.REACT_APP_URL + data.attributes.img.data.attributes.url} />
                </div>
                <p>{data.attributes.name}</p>
            </div>
        </>
    )
}