import {Button, Col, Container, Row} from "react-bootstrap";
//import ItemCard from "../components/ItemCard";
import Product from "../components/Product";
import ProductCarousel from "../components/ProductCarousel";
import '../css/home.css'

const Home = ({cart, addToCart, getCartAmount, removeFromCart}) => {
    const sample = [
        {
            "_id": "618b82d1ce8f8f40f23e4096",
            "item_name": "test24ggg",
            "item_desc": "testdesc",
            "item_price": 123.45,
            "item_discount": 0,
            "item_owner_id": "1",
            "date_created": "2021-11-09T09:55:42.266Z",
            "item_status": true,
            "item_rating": 0,
            "user_id": "618b783671427f053db23328",
            "__v": 0
        },
        {
            "_id": "618b82d1ce8f8f40f23e4096",
            "item_name": "test25ggg",
            "item_desc": "testdesc",
            "item_price": 123.45,
            "item_discount": 0,
            "item_owner_id": "1",
            "date_created": "2021-11-09T09:55:42.266Z",
            "item_status": true,
            "item_rating": 0,
            "user_id": "618b783671427f053db23328",
            "__v": 0
        },
        {
            "_id": "618b82d1ce8f8f40f23e4096",
            "item_name": "test26ggg",
            "item_desc": "testdesc",
            "item_price": 123.45,
            "item_discount": 0,
            "item_owner_id": "1",
            "date_created": "2021-11-09T09:55:42.266Z",
            "item_status": true,
            "item_rating": 0,
            "user_id": "618b783671427f053db23328",
            "__v": 0
        },
        {
            "_id": "618b82d1ce8f8f40f23e4096",
            "item_name": "test27ggg",
            "item_desc": "testdesc",
            "item_price": 123.45,
            "item_discount": 0,
            "item_owner_id": "1",
            "date_created": "2021-11-09T09:55:42.266Z",
            "item_status": true,
            "item_rating": 0,
            "user_id": "618b783671427f053db23328",
            "__v": 0
        },
        {
            "_id": "618b82d1ce8f8f40f23e4096",
            "item_name": "test28ggg",
            "item_desc": "testdesc",
            "item_price": 123.45,
            "item_discount": 0,
            "item_owner_id": "1",
            "date_created": "2021-11-09T09:55:42.266Z",
            "item_status": true,
            "item_rating": 0,
            "user_id": "618b783671427f053db23328",
            "__v": 0
        },
        {
            "_id": "618b82d1ce8f8f40f23e4096",
            "item_name": "test29ggg",
            "item_desc": "testdesc",
            "item_price": 123.45,
            "item_discount": 0,
            "item_owner_id": "1",
            "date_created": "2021-11-09T09:55:42.266Z",
            "item_status": true,
            "item_rating": 0,
            "user_id": "618b783671427f053db23328",
            "__v": 0
        }
    ]

    return (
        <Container>
            <ProductCarousel products={sample}/>
            <Row className='' style={{borderBottom: '2px solid black'}}>
                <Col>
                    <h1 className='mt-5 text-start'>Our Best Sellers</h1>
                </Col>
                <Col>
                    <Button className='mt-5 float-end'>View All</Button>
                </Col>
            </Row>
            <Row className='' style={{borderBottom: '2px solid black'}}>
                <Col>
                    <h1 className='mt-5 text-start'>All Products</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default Home