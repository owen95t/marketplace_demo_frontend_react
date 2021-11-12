import {Button, Form} from "react-bootstrap";
import '../css/form.css'
import {Link} from "react-router-dom";
import {useState} from "react";
import customAxios from "../axios/customAxios";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const sendLogin = async () => {
        await customAxios.post('users/login', {email: email, password: password}).then(result => {
            if (result.status === 200) {
                alert('Login Success!')
                navigate('../account')
            }
        }).catch(e => {
            if (e) {
                alert('Login failed. PLease try again. ' + e)
            }
        })
    }

    return (
        <div className='Login'>
            <Form className='login-control'>
                <h1>Login</h1>
                <Form.Group size="lg" controlId="email">
                    <Form.Label className='float-start'>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label className='float-start mt-3'>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button className='mt-4' type="button" onClick={sendLogin}>
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