import {Navbar, Container, Nav, Badge} from "react-bootstrap";
import {useSelector, useDispatch} from "react-redux";
import {cart_qty} from "../store/cart/cartSlice";
import {Link} from 'react-router-dom'
import {isAuthenticated} from "../store/user/userSlice";
import {userLogout} from '../store/user/userSlice'
import {useEffect} from "react";
import {useHistory} from "react-router-dom";

const Navigational = ({setShowModal}) => {
    const cartTotal = useSelector(cart_qty)
    const auth = useSelector(isAuthenticated)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        console.log('AUTH STATUS'  + auth)
        console.log(auth)
        if (!auth) {
            history.push('/')
        }
    }, [auth])

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to='/'>Marketplace</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/'>Home</Nav.Link>
                    </Nav>
                    <Nav className='justify-content-end'>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1" onClick={() => setShowModal(true)}>Cart  <Badge>{cartTotal}</Badge></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            {auth ? <button className='btn btn-link' onClick={() => dispatch(userLogout())}>Logout</button> : <Nav.Link as={Link} to='/login'>Login</Nav.Link>}
                            {/*<Nav.Link as={Link} to='/login'>Login</Nav.Link>*/}
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to='/account'>Account</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigational