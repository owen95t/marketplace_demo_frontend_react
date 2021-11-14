import {Container} from "@mui/material";
import {Button, Col, Image, Row} from "react-bootstrap";
// import {cart_qty} from "../store/cart/cartSlice";
import {useSelector} from "react-redux";
import {userEmail, isAuthenticated, userAddress} from "../store/user/userSlice";
import {useEffect, useState} from "react";
import '../css/account.css'
import customAxios from "../axios/customAxios";
import Product from "../components/Product";
import blankProfileImage from '../blank_profile.png'
import NewItemModal from "../components/NewItemModal";
import {useHistory} from "react-router-dom";


const Account = ({setLoading}) => {
    const authed = useSelector(isAuthenticated)
    const history = useHistory()
    const [userItems, setUserItems] = useState([])
    const email = useSelector(userEmail)
    const address = useSelector(userAddress)

    const [showModal, setShowModal] = useState(false)

    const handleModal = (boo) => {
        setShowModal(boo)
    }

    const getUserItems = async () => {
        if (authed) {
            setLoading(true)
            //user id is extracted from req.session on server side
            await customAxios.get('items/getUserItems').then(response => {
                if (response.status === 200) {
                    setUserItems([...response.data])
                }
                setLoading(false)
            }).catch(e => {
                console.log('Error retrieving your items' + e)
                alert('Error retrieving your items!' + e)
                setLoading(false)
            })
        }
        // else{ //if not logged in
        //     //alert('You are not authenticated!') //alert
        //     //history.push(
        //     //navigate('/login')  //navigate to login page
        // }
    }

    useEffect(() => {
        getUserItems()
    }, [])

    return (
        <Container className='mt-5'>
            <h1 className='text-start'>Your Account</h1>
            <hr/>
            <Row className='h-50'>
                {/*<Row>*/}
                {/*    <Col sm={8}>*/}
                {/*        <h3 className='text-start'>Your Items</h3>*/}
                {/*    </Col>*/}
                {/*    <Col sm={4}>*/}
                {/*        <h3 className='text-start'>Your Details</h3>*/}
                {/*    </Col>*/}
                {/*</Row>*/}
                <Col sm={8}>
                {/*     FOR USER ITEMS ON SALE*/}
                    <Row>
                        <Col>
                            <h3 className='text-start'>Your Items</h3>
                        </Col>
                        <Col>
                            <Button className='float-end' variant='success' type='button' onClick={() => handleModal(true)}>Create New Item</Button>
                        </Col>
                    </Row>
                    <hr/>
                    {/*Display products*/}
                    <div style={{display: 'flex', flexWrap: "wrap"}}>
                        {userItems.map((e, i) => (
                            <Product product={e}/>
                        ))}
                    </div>
                </Col>
                <Col sm={4}>
                {/*    FOR USER INFO*/}
                    <div className='account-section'>
                        <div className='w-50'>
                            <Image src={blankProfileImage} fluid roundedCircle/>
                        </div>
                        <div className='text-start mt-3'>
                            <p><strong>Email:</strong> {email.length > 0 ? email : 'No Email Address'}</p>
                            {/*Is address empty or not?*/}
                            <strong>Shipping Address: </strong>
                            {Object.keys(address).length === 0 ? 'No Address Given' : <>{Object.keys(address).map((e, i) => (<p>{e}</p>))}</>}
                        </div>
                    </div>
                </Col>
            </Row>
            <NewItemModal showModal={showModal} setShowModal={handleModal} getUserItem={getUserItems}/>
        </Container>
    )
}

export default Account