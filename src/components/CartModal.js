import {Button, Container, Modal} from 'react-bootstrap'

const CartModal = ({showModal, setShowModal, products}) => {
    return (
        <>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    Items In Your Cart
                </Modal.Header>
                <Modal.Body>
                {/*    TOP*/}
                {/*    BOTTOM*/}
                    <Container>
                        {products ? "" : <p>Your Cart Is Empty!</p>}
                        <hr/>
                        <p className='float-start' style={{width: '50%'}}>Your Total: </p>
                        <p className='float-end text-end' style={{width: '50%'}}>฿ 0</p>
                    </Container>
                <Modal.Footer>
                    <Button variant='danger' className='float-end' style={{}}>
                        Checkout
                    </Button>
                </Modal.Footer>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default CartModal