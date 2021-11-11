import {Navbar, Container, Nav, NavDropdown, Badge} from "react-bootstrap";
import {useEffect} from "react";

const Navigational = ({cart}) => {

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Marketplace</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="">Action</NavDropdown.Item>
                            <NavDropdown.Item href="">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className='justify-content-end'>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">Cart  <Badge>{cart.length}</Badge></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/">Login</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">Account</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigational