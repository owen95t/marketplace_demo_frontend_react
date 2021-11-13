import {Button, Form} from "react-bootstrap";
import '../css/form.css'
import {Link} from "react-router-dom";
import {useState} from "react";
import customAxios from "../axios/customAxios";
import {useHistory} from "react-router-dom";

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    const sendRegister = async () => {
        await customAxios.post('users/register', {email: email, password: password}).then((result => {
            if (result.status === 200) {
                alert('Registration Successful!')
                history.push('/login')
            }
        })).catch(e => {
            if (e) {
                console.log(e)
                alert('Registration failed. Reason: ' + e.response.data.message)
            }
        })
    }

    return (
        <div className='Login'>
            <Form className='login-control'>
                <h1>Register</h1>
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
                <Button className='mt-4' type="button" onClick={sendRegister}>
                    Register
                </Button>
                <div>
                    <Link to='/login'>Login</Link>
                </div>
            </Form>
        </div>
    )
}

export default Register