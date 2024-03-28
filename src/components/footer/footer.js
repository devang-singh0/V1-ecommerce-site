import './footerStyles.scss'
import {WhatsappLogo, Phone} from 'phosphor-react'
import IMAGES from '../../tempFolder/images copy/images'
import { PhosphorLogo } from 'phosphor-react'
export default function Footer() {
    return (
        <>
            <footer>
                <section id="upper">
                    <div>
                        <h2>MegaMart</h2>
                        <div>
                            <h3>Contact Us</h3>
                            <p><span><WhatsappLogo size={24} /></span><span>
                                <span>Whats App</span>
                                <span>+1 202-918-2132</span>
                            </span></p>
                            <p><span><Phone size={24} /></span><span>
                                <span>Call Us</span>
                                <span>+1 202-918-2132</span>
                            </span></p>
                        </div>
                        <div>
                            <h3>Download App</h3>
                            <div>
                                <img src={IMAGES.playStore} alt="" />
                                <img src={IMAGES.appStore} alt="" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2>Most Popular Categories</h2>
                        <ul>
                            <li className="active">SmartPhones</li>
                            <li>Electronics</li>
                            <li>Groceries</li>
                            <li>Premium Fruits</li>
                            <li>Home & Kitchen</li>
                            <li>Fashion</li>
                            <li>Beauty</li>
                        </ul>
                    </div>
                    <div><h2>Customer Services</h2>
                        <ul>
                            <li>About Us</li>
                            <li>Terms & Conditions</li>
                            <li>FAQ</li>
                            <li>Privacy Policy</li>
                            <li>E-waste Policy</li>
                            <li>Cancellation & Return POlicy</li>
                        </ul>
                    </div>
                    <div></div>
                </section>
                <hr />
                <section id="lower">
                    <h2>© 2023 All rights reserved. MegaMart Pvt Ltd.</h2>
                </section>
            </footer>
        </>
    )
}