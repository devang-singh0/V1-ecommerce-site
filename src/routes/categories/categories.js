import { useSelector, useDispatch } from 'react-redux'
import './categoryStyles.scss'
import { useEffect, useState } from 'react';
import { changeActiveHomeCat } from '../../features/productData';
export default function Categories() {
    let categories = useSelector((e) => e.apiSlice.value);
    let activeHomeCat = useSelector((e) => e.apiSlice.activeHomeCat);
    let [catName, setCatName] = useState('');
    let dispatch = useDispatch();
    useEffect(() => {
        if (!categories.isLoading) {
            let li = document.querySelectorAll('#categories li');
            li.forEach(element => {
                if (element.classList.contains('active')) {
                    element.classList.remove('active');
                }
                if(element.textContent == activeHomeCat){
                    element.classList.add('active');
                }
            });
        }
    }, [activeHomeCat, categories])
    useEffect(() => {
        if (!categories.isLoading) {
            dispatch(changeActiveHomeCat(categories.data.data[Math.floor(Math.random() * 7)].attributes.name))
            let i = [];
            categories.data.data.map(element => {
                i.push(<li key={element.id} onClick={(e)=> dispatch(changeActiveHomeCat(e.target.textContent))}>{element.attributes.name}</li>)
            });
            setCatName(i);
        }
    }, [categories])
    return (
        <>
            <ul id='categories'>
                {catName}
            </ul>
        </>
    )
}