import {Container} from "@mui/material";
import {Col, Row} from "react-bootstrap";
// import {cart_qty} from "../store/cart/cartSlice";
import {useSelector} from "react-redux";
import {userID, isAuthenticated} from "../store/user/userSlice";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import '../css/account.css'
import customAxios from "../axios/customAxios";


const Account = () => {
    const uid = useSelector(userID)
    const authed = useSelector(isAuthenticated)
    const navigate = useNavigate()
    const [userItems, setUserItems] = useState([])

    const getUserItems = async () => {
        if (authed) {

        }else{ //if not logged in
            alert('You are not authenticated!') //alert
            navigate('/login')  //navigate to login page
        }
    }
    return (
        <Container className='mt-5'>
            <h1 className='text-start'>Your Account</h1>
            <hr/>
            <Row className='h-50'>
                <Col sm={8}>
                {/*     FOR USER ITEMS ON SALE*/}
                    <h3 className='text-start'>Your Items</h3>
                </Col>
                <Col sm={4}>
                {/*    FOR USER INFO*/}
                    <div className='account-section'>

                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Account