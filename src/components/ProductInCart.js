import {Col, Image, Row} from "react-bootstrap";
import banana from "../banana.jpeg";

/*
* ASSUME PRODUCT OBJ:
* {
*   item_name: ...,
*   item_price: ...,
*   ...:...,
*   qty:...,
* }
* */


const ProductInCart = ({product}) => {
    const calculateDiscount = (original, percent) => {
        let newPrice = original * (1-(percent/100))
        return (
            <>
                <strike>฿ {original} </strike><strong>  ฿ {newPrice.toFixed(2)}</strong>
            </>
        )
    }

    return (
        <>
            <Row>
                <Col>
                {/*    Image ALIGN LEFT*/}
                    <Image src={banana} rounded fluid/>
                </Col>
                <Col style={{display: 'flex', flexDirection: 'column'}}>
                {/*    Item name ALIGHT LEFT*/}
                    <strong className='text-start'>{product ? product.item_name : 'test'}</strong>
                    <p className='text-start'>Qty: {product.qty}</p>
                </Col>
                <Col>
                {/*    Item Price Align RIGHT*/}
                    <strong className='float-end'>{product.item_discount > 0 ? calculateDiscount(product.item_price, product.item_discount) : product.item_price}</strong>
                </Col>
            </Row>
        </>
    )
}

export default ProductInCart