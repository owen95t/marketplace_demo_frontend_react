import {Button, Container, Modal} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {cartOjb, cart_qty, amount} from "../store/cart/cartSlice";
import {useSelector} from "react-redux";
import ProductInCart from "./ProductInCart";

const CartModal = ({showModal, setShowModal, products}) => {
    const cart = useSelector(cartOjb)
    const cartQty = useSelector(cart_qty)
    const cartAmount = useSelector(amount)
    return (
        <>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    Items In Your Cart
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        {cartQty ? (Object.values(cart).map((e, i) => <ProductInCart product={e} /> )) : <p>Your Car Is Empty!</p>}
                        <hr/>
                        <p className='float-start' style={{width: '50%'}}>Your Total: </p>
                        <p className='float-end text-end' style={{width: '50%'}}>฿ {cartAmount > 0 ? cartAmount : '0.00'}</p>
                    </Container>
                <Modal.Footer>
                    <Link to='/cart'>
                        <Button variant='danger' className='float-end' onClick={() => setShowModal(false)}>
                            Checkout
                        </Button>
                    </Link>
                </Modal.Footer>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default CartModal