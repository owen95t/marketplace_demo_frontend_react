import {Button, Col, Form, Image, Modal, Row} from "react-bootstrap";
import customAxios from "../axios/customAxios";
import banana from '../banana.jpeg'
import {useState} from "react";

const NewItemModal = ({showModal, setShowModal, getUserItem}) => {
    const [itemName, setItemName] = useState('')
    const [itemDesc, setItemDesc] = useState('')
    const [itemPrice, setItemPrice] = useState(0.00)
    const [itemDiscount, setItemDiscount] = useState(0)

    const handleItemName = (name) => {
        setItemName(name)
    }

    const handleItemDesc = (desc) => {
        setItemDesc(desc)
    }

    const handleItemPrice = (price) => {
        setItemPrice(price)
    }

    const handleItemDiscount = (discount) => {
        setItemDiscount(discount)
    }

    const newItem = {
        item_name: itemName,
        item_desc: itemDesc,
        item_price: itemPrice,
        item_discount: itemDiscount
    }

    const createNewItem = async () => {
        if(!itemName || !itemPrice || !itemDiscount || !itemDesc){
            alert('Missing a field!')
            return
        }
        await customAxios.post('items/post', newItem).then(response => {
            if (response.status === 201) {
                alert('Created new item successfully!')
                getUserItem()
                setShowModal(false)
            }
        }).catch(e => {
            if (e) {
                alert('Error creating new item: ' + e)
            }
        })
    }
    return (
        <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header>
                Create New Item
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Row className='w-100'>
                        <Col sm={4}>
                            <Image src={banana} rounded fluid/>
                        </Col>
                        <Col sm={4}>
                            <Button variant='light' onClick={() => alert('This feature is not yet implemented!')}>Edit Image</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Form.Group>
                            <Form.Label>Item Name</Form.Label>
                            <Form.Control onChange={e => handleItemName(e.target.value)}/>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group>
                            <Form.Label>Item Description</Form.Label>
                            <Form.Control as='textarea' onChange={e => handleItemDesc(e.target.value)}/>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group>
                            <Form.Label>Price</Form.Label>
                            <Form.Control onChange={e => handleItemPrice(e.target.value)}/>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group>
                            <Form.Label>Discount (in percentage. ie. 10% discount put in 10)</Form.Label>
                            <Form.Control onChange={e => handleItemDiscount(e.target.value)}/>
                        </Form.Group>
                    </Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' type='button' onClick={() => setShowModal(false)}>Cancel</Button>
                <Button variant='success' type='button' onClick={createNewItem}>
                    Create new item
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default NewItemModal