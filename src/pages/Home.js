import {Carousel, Col, Container, Image, Row} from "react-bootstrap";
//import ItemCard from "../components/ItemCard";
import Product from "../components/Product";
import ProductCarousel from "../components/ProductCarousel";
import '../css/home.css'
import {useEffect} from "react";
import forest from '../forest_wide.jpeg'

const Home = ({products, getProduct, isLoading}) => {
    useEffect(() => {
        getProduct()
    }, [])
    return (
        <Container>
            <div>
                <Carousel className='mt-4' controls={true} wrap={true} variant='dark'>
                    <Carousel.Item>
                        <Image src={forest} fluid={true}/>
                        <Carousel.Caption>
                            <h3 style={{color: 'white'}}>First Slide</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src={forest} fluid/>
                        <Carousel.Caption>
                            <h3 style={{color: 'white'}}>Second Slide</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src={forest} fluid/>
                        <Carousel.Caption>
                            <h3 style={{color: 'white'}}>Third Slide</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src={forest} fluid/>
                        <Carousel.Caption>
                            <h3 style={{color: 'white'}}>Fourth Slide</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <Row className='' style={{borderBottom: '2px solid black'}}>
                <Col>
                    <h1 className='mt-5 text-start'>Our Best Sellers</h1>
                </Col>
            </Row>
            <ProductCarousel products={products}/>
            <Row className='' style={{borderBottom: '2px solid black'}}>
                <Col>
                    <h1 className='mt-5 text-start'>All Products</h1>
                </Col>
            </Row>
            <div style={{display: 'flex', flexWrap: "wrap"}}>
                {products.length > 0 ? products.map((e, i) => {
                    if(e.item_status){ //checks to see if item is hidden or not (true for show, false for hidden)
                        return (
                            <Product key={i} product={e}/>
                        )
                    }
                }) : <></>}
            </div>
        </Container>
    )
}

export default Home