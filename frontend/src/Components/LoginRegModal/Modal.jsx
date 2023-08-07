import React, { useState } from 'react';
import './Modal.css'
import CreateAccount from './CreateAccount/CreateAccount';
import Login from './Login/Login';
import Card from 'react-bootstrap/Card';
import ModalImage from '../../assets/modal.png'
import Image from 'react-bootstrap/Image';
import { IoIosCloseCircle } from 'react-icons/io'

const Modal = ({ setModalToggle, modalToggle, toggle, setToggle }) => {

    return (<>
        {modalToggle ? (<div id={'modal_container'}>
            <Card border='1px' id='modal'
                className="position-absolute">
                <IoIosCloseCircle onClick={() => setModalToggle(false)}
                    style={{ position: 'absolute', right: '0px', top: '-20px', color: 'white', cursor: 'pointer' }} />
                <Card.Header className='fw-semibold text-center'
                    style={{ color: '#008A45', background: '#EFFFF4' }}>
                    Lets Learn, share & inspire each other with our passion for computer engineering. Sign Up now 🤘
                </Card.Header>
                <Card.Body className="d-flex justify-content-center ">
                    {toggle ? <Login setModalToggle={setToggle} /> : <CreateAccount setModalToggle={setToggle} />}
                    <div id={'modal_picture'}>
                        <Card.Text>
                            {toggle ? <span>Don't have an account yet? <span onClick={() => setToggle(prev => !prev)} style={{ cursor: 'pointer' }} className='text-primary'>Create new for free!</span>
                            </span> : <span>Already have an account? <span onClick={() => setToggle(prev => !prev)} style={{ cursor: 'pointer' }} className='text-primary'>Sign In</span></span>}</Card.Text>
                        <Image src={ModalImage} fluid width={320} style={{ objectFit: 'Container' }} alt='modalImage' />
                    </div>
                </Card.Body>
            </Card>
        </div>) : null}</>
    )
}

export default Modal