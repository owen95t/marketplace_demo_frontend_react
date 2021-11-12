import {Container, Col, Row, Button} from "react-bootstrap";
import {useSelector, useDispatch} from "react-redux";
import {cartOjb, cart_qty, amount, clearCart} from "../store/cart/cartSlice";
import '../css/checkout.css'
import AddressForm from "../components/AddressForm";
import ProductInCart from "../components/ProductInCart";

const ShippingAndCart = () => {
    const cart = useSelector(cartOjb)
    const cartQty = useSelector(cart_qty)
    const cartAmount = useSelector(amount)
    //const dispatchClearCart = useDispatch(clearCart)

    return (
        <Container>
            <h1 className='text-start mt-4'>Your Cart</h1>
            <hr/>
            <Row className='w-100' style={{height:"45rem"}}>
                {/*LEFT FOR PRODUCT LIST*/}
                <Col sm={8}>
                    <AddressForm />
                </Col>
                {/*RIGHT FOR TOTAL*/}
                <Col sm={4}>
                    <div className='right-col-bg'>
                        <div>
                            <h3>Order Summary</h3>
                        </div>
                        <hr/>
                        {/*ProductInCart*/}
                        {cartQty > 0 ? (Object.values(cart).map((e, i) => (<ProductInCart product={e}/>))) : 'Your Cart Is Empty'}
                        <hr/>
                        <div>
                            <Row className=''>
                                <Col className='w-50'>
                                    <p className='text-start'>Subtotal ({cartQty} Items)</p>
                                    <p className='text-start'>Shipping Fee</p>
                                </Col>
                                <Col className='w-50'>
                                    <p className='text-end'>{cartAmount > 0 ? cartAmount.toFixed(2) : '0.00'}</p>
                                    <p className='text-end'>0.00</p>
                                </Col>
                            </Row>
                        </div>
                        <hr/>
                        <div>
                            <Row>
                                <Col className='w-50'>
                                    <p className='text-start'>
                                        Total
                                    </p>
                                </Col>
                                <Col className='w-50'>
                                    <p className='text-end'>
                                        {cartAmount > 0 ? cartAmount.toFixed(2) : '0.00'}
                                    </p>
                                </Col>
                            </Row>
                        </div>
                        <Button variant='warning' className='w-100 mt-4'>
                            Checkout
                        </Button>
                        {/*<Button variant='link' onClick={dispatchClearCart} className='mt-3 mb-0'>Clear Cart</Button>*/}
                    </div>
                </Col>
            </Row>

        </Container>
    )
}

export default ShippingAndCart