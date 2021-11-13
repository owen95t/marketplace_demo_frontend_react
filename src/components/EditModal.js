import {Button, Col, Form, Image, Modal, Row} from "react-bootstrap";
import banana from "../banana.jpeg";
import {useState} from "react";
import customAxios from "../axios/customAxios";
import {useNavigate} from "react-router-dom";


//TODO: send EDIT
const EditModal = ({product, show, setShowModal, getInfo}) => {
    const [itemName, setItemName] = useState(product.item_name)
    const [itemDesc, setItemDesc] = useState(product.item_desc)
    const [itemPrice, setItemPrice] = useState(product.item_price)
    const [itemDiscount, setItemDiscount] = useState(product.item_discount)
    const navigate = useNavigate()

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

    const deleteItem = async () => {
        let id = product._id
        console.log('Item id for deletion: ' + id)
        await customAxios.delete('items/delete', {data: {item_id: id}}).then(response => {
            if (response.status === 200) {
                alert('Item deleted successfully!')
                setShowModal(false)
                getInfo()
                navigate('/account')
            }
        }).catch(e => {
            if (e) {
                alert('Delete Item Failed: ' + e)
            }
        })
    }

    const editItem = async () => {
        let id = product._id
        let edited = {
            item_name: itemName,
            item_desc: itemDesc,
            item_price: itemPrice,
            item_discount: itemDiscount
        }
        await customAxios.put('items/edit', {item_id: id, editedData: edited}).then(response => {
            if (response.status === 200) {
                alert('Item Edited Successfully!')

            }
        }).catch(e => {
            if (e) {
                alert('Item edit failed: ' + e)
            }
        })
    }


    return (
        <Modal show={show} onHide={() => setShowModal(false)}>
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
                            <Form.Control onChange={e => handleItemName(e.target.value)} value={itemName}/>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group>
                            <Form.Label>Item Description</Form.Label>
                            <Form.Control as='textarea' onChange={e => handleItemDesc(e.target.value)} value={itemDesc}/>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group>
                            <Form.Label>Price</Form.Label>
                            <Form.Control onChange={e => handleItemPrice(e.target.value)} value={itemPrice}/>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group>
                            <Form.Label>Discount (in percentage. ie. 10% discount put in 10)</Form.Label>
                            <Form.Control onChange={e => handleItemDiscount(e.target.value)} value={itemDiscount}/>
                        </Form.Group>
                    </Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' type='button' onClick={() => setShowModal(false)}>Cancel</Button>
                <Button variant='danger' type='button' onClick={() => deleteItem()}>Delete</Button>
                <Button variant='success' type='button' onClick={() => editItem()}>
                    Edit Item
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default EditModal