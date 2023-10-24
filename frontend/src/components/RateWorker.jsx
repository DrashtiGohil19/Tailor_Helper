import { useEffect, useState } from "react";
import axios from "axios";
import Modal from 'react-bootstrap/Modal';
import { Button, Col, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";


export default function RateWorker({ rateModel, closeModel }) {
    const [val, setVal] = useState({
        shirt_rate: "",
        pent_rate: "",
        kurta_rate: ""
    })

    const handleChange = (e) => {
        setVal({ ...val, [e.target.name]: e.target.value })
    }

    const handleUpdate = () => {
        axios.post('http://localhost:5000/worker/rate_worker', {
            shirt_rate: val.shirt_rate,
            pent_rate: val.pent_rate,
            kurta_rate: val.kurta_rate
        })
            .then(function (res) {
                console.log(res.data);
                setVal(res.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    useEffect(() => {
        axios.get('http://localhost:5000/worker/rate_worker')
            .then(function (res) {
                console.log(res.data);
                setVal(res.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    return (
        <div>
            <Modal show={rateModel} centered>
                <Modal.Header>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row className='mb-3'>
                            <Col lg={3}><Form.Label>Shirt Rate :</Form.Label></Col>
                            <Col>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter name"
                                    name="shirt_rate"
                                    value={val.shirt_rate}
                                    onChange={handleChange}
                                />
                            </Col>
                        </Row>
                        <Row className='mb-3'>
                            <Col lg={3}><Form.Label>Pent Rate :</Form.Label></Col>
                            <Col>
                                <Form.Control
                                    type="number"
                                    placeholder="Enter mobile number"
                                    name="pent_rate"
                                    value={val.pent_rate}
                                    onChange={handleChange}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={3}><Form.Label>Kurta Rate :</Form.Label></Col>
                            <Col>
                                <Form.Control
                                    type="number"
                                    placeholder="Enter mobile number"
                                    name="kurta_rate"
                                    value={val.kurta_rate}
                                    onChange={handleChange}
                                />
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModel} >
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleUpdate}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
