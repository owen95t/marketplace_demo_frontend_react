import {Button, Form} from "react-bootstrap";
import '../css/form.css'
import {Link} from "react-router-dom";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {userRegister} from "../store/user/userSlice";

const Register = ({setLoading}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const preDispatch = () => {
        setLoading(true)
        dispatch(userRegister({email: email, password: password}))
        setEmail('')
        setPassword('')
        setLoading(false)
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
                <Button className='mt-4' type="button" onClick={() => preDispatch()}>
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