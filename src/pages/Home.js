import {Col, Container, Row} from "react-bootstrap";
//import ItemCard from "../components/ItemCard";
import Product from "../components/Product";
import ProductCarousel from "../components/ProductCarousel";
import '../css/home.css'
// import {useState} from "react";

const Home = ({products}) => {
    // const sample = [
    //     {
    //         "_id": "618b82d1ce8f8f40f23e4096",
    //         "item_name": "best1",
    //         "item_desc": "testdesc",
    //         "item_price": 123.45,
    //         "item_discount": 0,
    //         "item_owner_id": "1",
    //         "date_created": "2021-11-09T09:55:42.266Z",
    //         "item_status": true,
    //         "item_rating": 0,
    //         "user_id": "618b783671427f053db23328",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "618b82d1ce8f8f40f23e4096",
    //         "item_name": "best2",
    //         "item_desc": "testdesc",
    //         "item_price": 123.45,
    //         "item_discount": 0,
    //         "item_owner_id": "1",
    //         "date_created": "2021-11-09T09:55:42.266Z",
    //         "item_status": true,
    //         "item_rating": 0,
    //         "user_id": "618b783671427f053db23328",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "618b82d1ce8f8f40f23e4096",
    //         "item_name": "best3",
    //         "item_desc": "testdesc",
    //         "item_price": 123.45,
    //         "item_discount": 0,
    //         "item_owner_id": "1",
    //         "date_created": "2021-11-09T09:55:42.266Z",
    //         "item_status": true,
    //         "item_rating": 0,
    //         "user_id": "618b783671427f053db23328",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "618b82d1ce8f8f40f23e4096",
    //         "item_name": "best4",
    //         "item_desc": "testdesc",
    //         "item_price": 123.45,
    //         "item_discount": 0,
    //         "item_owner_id": "1",
    //         "date_created": "2021-11-09T09:55:42.266Z",
    //         "item_status": true,
    //         "item_rating": 0,
    //         "user_id": "618b783671427f053db23328",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "618b82d1ce8f8f40f23e4096",
    //         "item_name": "best5",
    //         "item_desc": "testdesc",
    //         "item_price": 123.45,
    //         "item_discount": 0,
    //         "item_owner_id": "1",
    //         "date_created": "2021-11-09T09:55:42.266Z",
    //         "item_status": true,
    //         "item_rating": 0,
    //         "user_id": "618b783671427f053db23328",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "618b82d1ce8f8f40f23e4096",
    //         "item_name": "best6",
    //         "item_desc": "testdesc",
    //         "item_price": 123.45,
    //         "item_discount": 0,
    //         "item_owner_id": "1",
    //         "date_created": "2021-11-09T09:55:42.266Z",
    //         "item_status": true,
    //         "item_rating": 0,
    //         "user_id": "618b783671427f053db23328",
    //         "__v": 0
    //     }
    // ]

    return (
        <Container>

            <Row className='' style={{borderBottom: '2px solid black'}}>
                <Col>
                    <h1 className='mt-5 text-start'>Our Best Sellers</h1>
                </Col>
                {/*<Col>*/}
                {/*    <Button className='mt-5 float-end'>View All</Button>*/}
                {/*</Col>*/}
            </Row>
            <ProductCarousel products={products}/>
            <Row className='' style={{borderBottom: '2px solid black'}}>
                <Col>
                    <h1 className='mt-5 text-start'>All Products</h1>
                </Col>
            </Row>
            <div style={{display: 'flex', flexWrap: "wrap"}}>
                {products.length > 0 ? products.map((e, i) => {
                    if(e.item_status){
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