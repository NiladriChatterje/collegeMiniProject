import React from 'react';
import { Button } from 'react-bootstrap';
import { AiFillEye } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc'


const CreateAccount = ({ setModalToggle }) => {
    const [toggle, setToggle] = React.useState(() => false)
    return (
        <div className='create_account'>
            <h3>Create Account</h3>
            <div className="input-group">
                <input type="text" style={{ background: '#D9D9DB' }} className="form-control" placeholder='First name' />
                <input type="text" style={{ background: '#D9D9DB' }} className="form-control" placeholder='Last name' />
            </div>
            <input type="email" className="form-control" placeholder="email" style={{ background: '#D9D9DB' }} />
            <div className="inner-addon input-group left-addon w-100 position-relative">
                <input type={toggle ? 'text' : 'password'} className="form-control rounded" style={{ background: '#D9D9DB' }} placeholder="password" />
                <AiFillEye onClick={() => setToggle(prev => !prev)} cursor={'pointer'}
                    className='position-absolute top-50 end-0 translate-middle z-index-3' />
            </div>
            <input type={'password'} style={{ background: '#D9D9DB' }} className="form-control w-100" placeholder="confirm password" aria-label="" />
            <span id='mobile_button_view'>
                <Button className='mt-5 rounded-pill'>Create Account</Button>
                <span onClick={() => setModalToggle(true)} style={{ color: 'rgb(0,0,233)', cursor: 'pointer' }}>or, Sign In</span>
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

export default CreateAccount;