import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Button, Col, Row } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';

function UserModel({ showModel, closeModal }) {
    const [val, setVal] = useState({
        email: "",
        password: "",
        shopName: ""
    })
    const handleValueChange = (e) => {
        setVal({ ...val, [e.target.name]: e.target.value })
    }
    const handleAddUser = () => {
        axios.post("/register", {
            email: val.email,
            password: val.password,
            shopName: val.shopName
        })
            .then((res) => {
                toast.success("User added succesfully !", {
                    style: {
                        backgroundColor: 'black',
                        color: 'white',
                    }
                })
                closeModal()
            })
    }
    return (
        <div>
            <Modal show={showModel} centered>
                <Modal.Header>
                    <Modal.Title>Add User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row className='mb-3'>
                            <Col lg={3}><Form.Label>Name :</Form.Label></Col>
                            <Col>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter name"
                                    name='email'
                                    value={val.email}
                                    onChange={handleValueChange}
                                />
                            </Col>
                        </Row>
                        <Row className='mb-3'>
                            <Col lg={3}><Form.Label>Password :</Form.Label></Col>
                            <Col>
                                <Form.Control
                                    type="password"
                                    placeholder="Enter password"
                                    name='password'
                                    value={val.password}
                                    onChange={handleValueChange}
                                />
                            </Col>
                        </Row>
                        <Row className='mb-3'>
                            <Col lg={3}><Form.Label>Shop Name :</Form.Label></Col>
                            <Col>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter shop name"
                                    name='shopName'
                                    value={val.shopName}
                                    onChange={handleValueChange}
                                />

                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleAddUser}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default UserModel
