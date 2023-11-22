import { useState, useEffect } from "react";
import axios from "axios";
import Modal from 'react-bootstrap/Modal';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { toast } from "react-toastify";


export default function EditWorker({ showEdit, closeEdit, selectedId, WorkerEdit }) {
    const [val, setval] = useState({
        workername: "",
        customername: "",
        mobilenu: "",
    });

    const fetchData = () => {
        const apiEndpoint = WorkerEdit
            ? `/worker/single_worker/${selectedId}`
            : `/customer/single_customer/${selectedId}`

        axios.get(apiEndpoint)
            .then(function (res) {
                setval(res.data.data)
            })
    }

    useEffect(() => {
        fetchData()
    }, [selectedId])

    const handleChange = (e) => {
        setval({ ...val, [e.target.name]: e.target.value })
    }

    const handleEdit = (e) => {
        e.preventDefault()
        const apiEndpoint = WorkerEdit
            ? `/worker/update_worker/${selectedId}`
            : `/customer/update_customer/${selectedId}`

        const dataPayload = WorkerEdit
            ? { workername: val.workername, mobilenu: val.mobilenu }
            : { customername: val.customername, mobilenu: val.mobilenu };

        axios.put(apiEndpoint, dataPayload)
            .then(function (response) {
                if (response.data.status === "success") {
                    closeEdit()
                    const successMessage = WorkerEdit
                        ? 'Worker edited successfully!'
                        : 'Customer edited successfully!';

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
                closeEdit();
                const errorMessage = WorkerEdit
                    ? 'Failed to edit worker!'
                    : 'Failed to edit customer!';

                toast.error(errorMessage, {
                    autoClose: 4000,
                    style: {
                        backgroundColor: 'black',
                        color: 'white',
                    },
                });
            })

    }
    return (
        <div>
            <Modal centered show={showEdit}>
                <Modal.Header>
                    <Modal.Title>Edit {WorkerEdit ? "Worker" : "Customer"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row className='mb-3'>
                            <Col lg={2}><Form.Label>Name :</Form.Label></Col>
                            <Col>
                                <Form.Control
                                    type="text"
                                    name={WorkerEdit ? 'workername' : 'customername'}
                                    value={val.workername ? val.workername : val.customername}
                                    onChange={handleChange}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={2}><Form.Label>Mobile :</Form.Label></Col>
                            <Col>
                                <Form.Control
                                    type="number"
                                    name='mobile'
                                    value={val.mobilenu}
                                    onChange={handleChange}
                                />
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeEdit}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleEdit} >
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}
