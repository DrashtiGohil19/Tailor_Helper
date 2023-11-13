import axios from "axios";
import { useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { toast } from "react-toastify";

export default function AddWork({ showModel1, closeModal1, selectedId }) {
    let [val, setval] = useState({
        date: "",
        shirt: "",
        pent: "",
        kurta: "",
        withdrawal: ""
    });

    var [name, setName] = useState('')

    const handleChange = (e) => {
        setval({ ...val, [e.target.name]: e.target.value })
    };

    useEffect(() => {
        axios.get(`http://localhost:5000/worker/single_worker/${selectedId}`)
            .then(function (res) {
                setName(res.data.data.workername)
            })
            .catch(function (error) {
            })
    }, [])

    const passdata = (e) => {
        e.preventDefault()
        axios.post("http://localhost:5000/worker/addwork", {
            worker_id: selectedId,
            date: val.date,
            shirt: val.shirt,
            pent: val.pent,
            kurta: val.kurta,
            withdrawal: val.withdrawal,
        })
            .then(function (response) {
                closeModal1()
                if (response.data.status === "success") {
                    toast.success("Data saved succesfully !", {
                        autoClose: 4000,
                        style: {
                            backgroundColor: 'black',
                            color: 'white',
                        },
                    })
                }
            })
            .catch(function (error) {
                toast.error('please enter another data !', {
                    autoClose: 5000,
                    style: {
                        backgroundColor: 'black',
                        color: 'white',
                    },
                })
                closeModal1()
            })
    }
    return (

        <Modal centered show={showModel1}>
            <Modal.Header >
                <Modal.Title>Add Work</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Row className="mb-3">
                        <Col lg={2}><Form.Label>Name :</Form.Label></Col>
                        <Col>
                            <Form.Control
                                type="text"
                                placeholder="Enter name"
                                autoFocus
                                name='name'
                                value={name}
                                onChange={handleChange}
                            />
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col lg={2}><Form.Label>Date :</Form.Label></Col>
                        <Col>
                            <Form.Control
                                type="date"
                                name='date'
                                value={val.date}
                                onChange={handleChange}
                            />
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col lg={2}><Form.Label>Shirt :</Form.Label></Col>
                        <Col>
                            <Form.Control
                                type="number"
                                placeholder="Enter shirt"
                                autoFocus
                                name='shirt'
                                value={val.shirt}
                                onChange={handleChange}
                            />
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col lg={2}><Form.Label>Pent :</Form.Label></Col>
                        <Col>
                            <Form.Control
                                type="number"
                                placeholder="Enter pent"
                                autoFocus
                                name='pent'
                                value={val.pent}
                                onChange={handleChange}
                            />
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col lg={2}><Form.Label>Kurta :</Form.Label></Col>
                        <Col>
                            <Form.Control
                                type="number"
                                placeholder="Enter kurta"
                                autoFocus
                                name='kurta'
                                value={val.kurta}
                                onChange={handleChange}
                            />
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col lg={3}><Form.Label>Withdrawal :</Form.Label></Col>
                        <Col>
                            <Form.Control
                                type="number"
                                placeholder="Enter withdrawal"
                                autoFocus
                                name='withdrawal'
                                value={val.withdrawal}
                                onChange={handleChange}
                            />
                        </Col>
                    </Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={closeModal1}>
                    Close
                </Button>
                <Button variant="primary" onClick={passdata}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
