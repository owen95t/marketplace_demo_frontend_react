import {Col, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom"; //TODO: REACT ROUTER
import {useSelector} from "react-redux";
import {isAuthenticated, userEmail} from "../store/user/userSlice";
import {useEffect} from "react";

const AddressForm = () => {
    const auth = useSelector(isAuthenticated);
    const email = useSelector(userEmail)
    useEffect(() => {

    }, [])
    return (
        <Form>
            <Row>
                <Col>
                    <h4 className='text-start'>Contact Information</h4>
                </Col>
                <Col>
                    {auth ? <></> : <p className='text-end'>Already have an account? <Link to='/login'>Log in</Link></p> }
                </Col>
            </Row>
            <Row className='mt-2 mb-4'>
                <Form.Group>
                    {email ? <Form.Control placeholder='Email' value={email}/>: <Form.Control placeholder='Email'/>}
                </Form.Group>
            </Row>
            <hr/>
            <h4 className='text-start'>Shipping Address</h4>
            <Row className='mt-2 mb-3'>
                <Form.Group as={Col} controlId="formGridEmail">
                    {/*<Form.Label className='float-start'>First name</Form.Label>*/}
                    <Form.Control placeholder="First name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    {/*<Form.Label className='float-start'>Last name</Form.Label>*/}
                    <Form.Control placeholder="Last name" />
                </Form.Group>
            </Row>


            <Form.Group className="mb-3" controlId="formGridAddress1">
                {/*<Form.Label className='float-start mt-2'>Address</Form.Label>*/}
                <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
                {/*<Form.Label className='float-start'>Address 2</Form.Label>*/}
                <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                    {/*<Form.Label className='float-start'>City</Form.Label>*/}
                    <Form.Control placeholder='City'/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    {/*<Form.Label className='float-start'>Province</Form.Label>*/}
                    <Form.Select defaultValue="Bangkok" placeholder="Province">
                        <option selected disabled>Province</option>
                        <option>Bangkok</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                    {/*<Form.Label className='float-start'>Zip Code</Form.Label>*/}
                    <Form.Control placeholder='Zip Code'/>
                </Form.Group>
            </Row>
            <Row className='mb-3'>
                <Form.Group as={Col}>
                    {/*<Form.Label className='float-start'>Country</Form.Label>*/}
                    <Form.Select defaultValue="Choose...">
                        <option>Thailand</option>
                        <option>...</option>
                    </Form.Select>
                </Form.Group>
            </Row>
            <Row>
                <Col>
                    <Form.Group as={Col}>
                        <Form.Control placeholder='Phone number'/>
                    </Form.Group>
                </Col>
            </Row>
        </Form>
    )

}

export default AddressForm