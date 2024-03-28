import { Header } from "../../components/header/header";
import Categories from "../categories/categories";
import ImageSlider from "../../components/imageSlider/imageSlider";
import TopBrand from "../../components/topBrands/topBrands";
import './homeStyles.scss'
import Footer from "../../components/footer/footer";
import TopCategory from "../../components/topCategories/topCategories";
import FeaturedProducts from "../../components/featured products/featuredProducts";
export function Home(){
    return(
        <>
            <Header />
            <Categories />
            <ImageSlider />
            <FeaturedProducts />
            <TopBrand />
            <TopCategory />
            <Footer />
            {/* <div id="particles-js"></div> */}
        </>
    )
}