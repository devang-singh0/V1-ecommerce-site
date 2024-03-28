import IMAGES from "../../tempFolder/images copy/images"
import './topBrands.scss'
export default function TopBrand() {
    return (
        <>
            <div className="topBrands">
                <h3>Top <span>Electronics Brands</span></h3>
            </div>
            <div>
                <BrandDiv img={IMAGES.phone8} logo={IMAGES.appleLogo} brand='Apple' off='UP to 80% OFF' color='#313131' color2='#494949' color3='white' />
                <BrandDiv img={IMAGES.phone2} logo={IMAGES.miLogo} brand='xiaomi' off='UP to 80% OFF' color='#ffecdf' color2='#ffd1b0' color3='black' />
                <BrandDiv img={IMAGES.phone1} logo={IMAGES.realmeLogo} brand='realme' off='UP to 80% OFF' color='#fff3cc' color2='#f6de8d' color3='black' />
                <BrandDiv img={IMAGES.phone8} logo={IMAGES.appleLogo} brand='Apple' off='UP to 80% OFF' color2='#5996ff' color='#afccff' color3='black' />
                <BrandDiv img={IMAGES.phone2} logo={IMAGES.miLogo} brand='xiaomi' off='UP to 80% OFF' color='#afffd2' color2='#3dff91' color3='black' />
                <BrandDiv img={IMAGES.phone1} logo={IMAGES.realmeLogo} brand='realme' off='UP to 80% OFF' color='#ffa686' color2='#ff713d' color3='black' />
            </div>
        </>
    )
}
function BrandDiv({ color, logo, brand, off, img, color2, color3 }) {
    return (
        <>
            <div id="topBrands" style={{
                '--bgColor': color,
                '--color2': color2,
                '--color': color3,
            }}>
                <div>
                    <p>{brand}</p>
                    <img src={logo} />
                    <h3>{off}</h3>
                </div>
                <div>
                    <img src={img} />
                </div>
            </div>
        </>
    )
}