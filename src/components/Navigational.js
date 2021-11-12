import {Navbar, Container, Nav, Badge} from "react-bootstrap";
import {useSelector} from "react-redux";
import {count} from "../store/cart/cartSlice";

const Navigational = ({setShowModal}) => {
    const cart = useSelector((state) => state.cart.cart)
    const cartTotal = useSelector(count)

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Marketplace</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        {/*<Nav.Link href="">Link</Nav.Link>*/}
                        {/*<NavDropdown title="Dropdown" id="basic-nav-dropdown">*/}
                        {/*    <NavDropdown.Item href="">Action</NavDropdown.Item>*/}
                        {/*    <NavDropdown.Item href="">Another action</NavDropdown.Item>*/}
                        {/*    <NavDropdown.Item href="">Something</NavDropdown.Item>*/}
                        {/*    <NavDropdown.Divider />*/}
                        {/*    <NavDropdown.Item href="">Separated link</NavDropdown.Item>*/}
                        {/*</NavDropdown>*/}
                    </Nav>
                    <Nav className='justify-content-end'>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1" onClick={() => setShowModal(true)}>Cart  <Badge>{cartTotal}</Badge></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/login" to='/login'>Login</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href='/account' to='/account'>Account</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigational