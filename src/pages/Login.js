import {Button, Form} from "react-bootstrap";
import '../css/form.css'
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {userLogin} from "../store/user/userSlice";
import {isAuthenticated} from "../store/user/userSlice";
import {useHistory} from "react-router-dom";

const Login = ({setLoading}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()
    const dispatch = useDispatch()
    const authed = useSelector(isAuthenticated)

    useEffect(() => {
        if (authed) {
            setLoading(false)
            history.push('/account')
        }
    },[authed])

    const preDispatch = () => {
        setLoading(true)
        dispatch(userLogin({email: email, password: password}))
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
                <Button className='mt-4' type="button" onClick={() => preDispatch()}>
                    Login
                </Button>
                <div className='mt-2'>
                    <Link to='/register'>Register</Link>
                </div>
            </Form>
        </div>
    )
}

export default Login