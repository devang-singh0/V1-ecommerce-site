import './sliderStyles.scss'
import { CaretLeft, CaretRight, Translate } from 'phosphor-react'
import IMAGES from "../../tempFolder/images copy/images"
import { useState } from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
export default function ImageSlider() {
    let [dealIndex, setDealIndex] = useState(0);
    let timeoutRef = useRef(null);
    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
    }
    useEffect(() => {
        resetTimeout();
        getSliderSize();
        let circle = document.querySelectorAll('#circles span');
        circle.forEach((e) => {
            if (e.classList.contains('active')) {
                e.classList.remove('active');
            }
            circle[dealIndex].classList.add('active');
        })
        timeoutRef.current = setInterval(() => {
            dealIndex < 4 ? setDealIndex(dealIndex + 1) : setDealIndex(0);
        }, 3000);
        return () => {
            resetTimeout();
        }
    }, [dealIndex])
    function moveLeft() {
        dealIndex > 0 ? setDealIndex(dealIndex - 1) : setDealIndex(4);
    }
    function moveRight() {
        dealIndex < 4 ? setDealIndex(dealIndex + 1) : setDealIndex(0);
    }
    let [sliderWidth, setSliderWidth] = useState(1000);
    window.addEventListener('resize', getSliderSize)
    function getSliderSize() {
        if (window.innerWidth < 1100 && window.innerWidth>900) {
            setSliderWidth(800);
        }
        else if (window.innerWidth > 1100) {
            setSliderWidth(1000)
        }
        else if (window.innerWidth < 900 && window.innerWidth>700) {
            setSliderWidth(600);
        }
        else if (window.innerWidth < 700 && window.innerWidth>400) {
            setSliderWidth(350);
        }
    }
    return (
        <>
            <main id="imageSlider" style={{ '--sliderWidth': sliderWidth + 'px', }}>
                <div id="moveLeft" onClick={moveLeft}><CaretLeft size={24} /></div>
                <section>
                    <div style={{ transform: `translateX(${dealIndex * - sliderWidth}px)`, }}>
                        <Images color1='#212844' color2='#2c3454' img={IMAGES.smartwatch} />
                        <Images color1='#ff1212' color2='#ff6868' img={IMAGES.smartwatch3} />
                        <Images color1='#797979' color2='#9f9f9f' img={IMAGES.smartwatch2} />
                        <Images color1='#000' color2='#3b3b3b' img={IMAGES.smartwatch4} />
                        <Images color1='#71706e' color2='#beb4a0' img={IMAGES.smartwatch5} />
                    </div>
                </section>
                <div id='circles'>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div id="moveRight" onClick={moveRight}><CaretRight size={24} /></div>
            </main>
        </>
    )

    function Images(prop) {
        return (
            <div className="scrollImages" style={{ '--color1': prop.color1, '--color2': prop.color2, '--sliderWidth': sliderWidth + 'px', }}>
                <div><p>Best Deal Online on Smart Watches</p><h3>SMART WEARABLE.</h3><h2>UP to 80% OFF</h2></div>
                <div><img src={prop.img} /></div>
            </div>
        )
    }
}
