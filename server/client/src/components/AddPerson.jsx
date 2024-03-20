import axios from 'axios';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import '../App.css'
import { Button, Col, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { token } from './LocalItem';

export default function AddPerson({ showModel, closeModal, isAddingWorker }) {
    let [val, setval] = useState({
        name: "",
        mobilenu: "",
        register_nu: ""
    })
    const [validationErrors, setValidationErrors] = useState({
        name: '',
        mobilenu: '',
    });
    const userId = localStorage.getItem("userId")
    const handlevalue = (e) => {
        setval({ ...val, [e.target.name]: e.target.value })
        setValidationErrors({ ...validationErrors, [e.target.name]: '' });
    }
    const validateForm = () => {
        let isValid = true;
        const errors = {};

        if (val.name.trim() === '') {
            errors.name = 'Name is required';
            isValid = false;
        }

        if (val.mobilenu.trim() === '') {
            errors.mobilenu = 'Mobile number is required';
            isValid = false;
        } else if (!/^\d{10}$/.test(val.mobilenu)) {
            errors.mobilenu = 'Mobile number should be a 10-digit number';
            isValid = false;
        }

        setValidationErrors(errors);
        return isValid;
    };

    const passdata = (e) => {
        e.preventDefault()

        if (validateForm()) {
            const apiEndpoint = isAddingWorker
                ? "/worker/addworker"
                : "/customer/add_customer";

            const dataPayload = isAddingWorker
                ? { workername: val.name, mobilenu: val.mobilenu, userId: userId }
                : { name: val.name, mobilenu: val.mobilenu, userId: userId, register_nu: val.register_nu }

            axios.post(apiEndpoint, dataPayload, {
                headers: {
                    'Authorization': token
                }
            })
                .then(function (response) {
                    if (response.data.status === 'success') {
                        closeModal()
                        const successMessage = isAddingWorker
                            ? 'Worker added successfully!'
                            : 'Customer added successfully!';

                        toast.success(successMessage, {
                            autoClose: 4000,
                            style: {
                                backgroundColor: 'black',
                                color: 'white',
                            },
                        });
                    }
                })
                .catch(function (error) {
                    closeModal();
                    const errorMessage = isAddingWorker
                        ? 'Failed to add worker! Try with another mobile number.'
                        : 'Failed to add customer! Try with another mobile number.';

                    toast.error(errorMessage, {
                        autoClose: 5000,
                        style: {
                            backgroundColor: 'black',
                            color: 'white',
                        },
                    });
                });
        }
    }

    return (
        <div>
            <Modal show={showModel} centered>
                <Modal.Header>
                    <Modal.Title>{isAddingWorker === true ? 'Add Worker' : 'Add Customer'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row className='mb-3'>
                            <Col lg={2}><Form.Label>Name :</Form.Label></Col>
                            <Col>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter name"
                                    autoFocus
                                    name='name'
                                    className={`form-control ${validationErrors.name ? 'is-invalid' : ''}`}
                                    value={val.name}
                                    onChange={handlevalue}
                                />
                                {validationErrors.name && (
                                    <div className="text-danger">{validationErrors.name}</div>
                                )}
                            </Col>
                        </Row>
                        <Row className='mb-3'>
                            <Col lg={2}><Form.Label>Mobile :</Form.Label></Col>
                            <Col>
                                <Form.Control
                                    type="number"
                                    placeholder="Enter mobile number"
                                    name='mobilenu'
                                    className={`form-control ${validationErrors.mobilenu ? 'is-invalid' : ''}`}
                                    value={val.mobilenu}
                                    onChange={handlevalue}
                                />
                                {validationErrors.mobilenu && (
                                    <div className="text-danger">{validationErrors.mobilenu}</div>
                                )}
                            </Col>
                        </Row>
                        {
                            !isAddingWorker &&
                            <Row>
                                <Col lg={2}>
                                    <Form.Label>Book Nu.</Form.Label>
                                </Col>
                                <Col>
                                    <Form.Control type="number" placeholder='Enter book Nu.' className="form-control" name="register_nu" value={val.register_nu} onChange={handlevalue} />
                                </Col>
                            </Row>
                        }
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={passdata}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </div >
    )
}
