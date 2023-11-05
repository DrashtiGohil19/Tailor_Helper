import axios from 'axios';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import '../App.css'
import { Button, Col, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';

export default function AddPerson({ showModel, closeModal, isAddingWorker }) {
    let [val, setval] = useState({
        name: "",
        mobilenu: "",
    })

    const handlevalue = (e) => {
        setval({ ...val, [e.target.name]: e.target.value })
    }

    const passdata = (e) => {
        e.preventDefault()

        const apiEndpoint = isAddingWorker
            ? "http://localhost:5000/worker/addworker"
            : "http://localhost:5000/customer/add_customer";

        const dataPayload = isAddingWorker
            ? { workername: val.name, mobilenu: val.mobilenu }
            : { name: val.name, mobilenu: val.mobilenu }

        axios.post(apiEndpoint, dataPayload)
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
                    ? 'Failed to add worker!'
                    : 'Failed to add customer!';

                toast.error(errorMessage, {
                    autoClose: 5000,
                    style: {
                        backgroundColor: 'black',
                        color: 'white',
                    },
                });
            });
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
                                    value={val.name}
                                    onChange={handlevalue}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={2}><Form.Label>Mobile :</Form.Label></Col>
                            <Col>
                                <Form.Control
                                    type="number"
                                    placeholder="Enter mobile number"
                                    name='mobilenu'
                                    value={val.mobilenu}
                                    onChange={handlevalue}
                                />
                            </Col>
                        </Row>
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
        </div>
    )
}
