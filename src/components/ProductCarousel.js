import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import '../css/carousel.css'

const ProductCarousel = ({products}) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 2000, min: 1024 },
            items: 4,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <>
            <Carousel
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                //ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={false} //may change to true of false depending
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                style={{marginTop: '25px'}}
            >

                {products.map((product, i) => {
                    if(product.item_status){
                        return (
                            <Product key={i} product={product}/>
                        )
                    }
                })}
                {/*<div><ItemCard/></div>*/}
                {/*<div><ItemCard/></div>*/}
                {/*<div><ItemCard/></div>*/}
                {/*<div><ItemCard/></div>*/}
                {/*<div><ItemCard/></div>*/}
                {/*<div><ItemCard/></div>*/}
                {/*<div><ItemCard/></div>*/}
            </Carousel>
        </>
    )
}

export default ProductCarousel