import React from 'react';
import { Button } from 'react-bootstrap'
import { AiFillEye } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'

const Login = ({ setModalToggle }) => {
    const [toggle, setToggle] = React.useState(() => false)

    return (
        <div className='login'>
            <h3>Sign In</h3>
            <input type="email" style={{ background: '#D9D9DB' }} className="form-control mt-5" placeholder="Email" />
            <div className="inner-addon input-group left-addon w-100 position-relative">
                <input type={toggle ? 'text' : 'password'} className="form-control rounded" style={{ background: '#D9D9DB' }} placeholder="Password" />
                <AiFillEye onClick={() => setToggle(prev => !prev)} cursor={'pointer'}
                    className='position-absolute top-50 end-0 translate-middle z-index-3' />
            </div>
            <span id='mobile_button_view'>
                <Button className='mt-5 rounded-pill'>Sign In</Button>
                <span onClick={() => setModalToggle(false)} style={{ color: 'rgb(0,0,233)', cursor: 'pointer' }}>or, Create Account</span>
            </span>
            <div className="input-group d-flex flex-column align-items-center" style={{ marginTop: '10px' }}>
                <Button variant='none' className="form-control w-100 rounded border" >
                    <BsFacebook className='me-2' />
                    Sign Up with Facebook
                </Button>
                <Button variant='none' className="form-control w-100 rounded border mt-2" >
                    <FcGoogle className='me-2' />
                    Sign Up with Google
                </Button>
                <span className='mt-4' style={{ fontSize: '0.8em', fontWeight: 'bold' }}>Forgot Password?</span>
            </div>
        </div>
    )
}

export default Login