import {Col, Container, Row} from "react-bootstrap";
//import ItemCard from "../components/ItemCard";
import Product from "../components/Product";
import ProductCarousel from "../components/ProductCarousel";
import '../css/home.css'
import {useEffect} from "react";

const Home = ({products, getProduct, isLoading}) => {
    useEffect(() => {
        getProduct()
    }, [])
    return (
        <Container>
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