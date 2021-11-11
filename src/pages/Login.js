import {Button, Container, Form} from "react-bootstrap";
import '../css/form.css'
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

const Login = () => {

    return (
        <div className='Login'>
            <Form className='login-control'>
                <h1>Login</h1>
                <Form.Group size="lg" controlId="email">
                    <Form.Label className='float-start'>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        type="email"
                        //value={email}
                        //onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label className='float-start mt-3'>Password</Form.Label>
                    <Form.Control
                        type="password"
                        //value={password}
                        //onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button className='mt-4' type="submit" //disabled={!validateForm()}
                >
                    Login
                </Button>
                <div>
                    <Link to='/register'>Register</Link>
                </div>
            </Form>
        </div>
    )
}

export default Login