import { useEffect, useState } from "react";
import axios from "axios";
import Modal from 'react-bootstrap/Modal';
import { Button, Col, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { userId } from "./LocalItem";

export default function Rate({ rateModel, closeModel, isCustomerRate }) {
    const [val, setVal] = useState({
        shirt_rate: "",
        pent_rate: "",
        kurta_rate: ""
    })

    const handleChange = (e) => {
        setVal({ ...val, [e.target.name]: e.target.value })
    }

    const apiEndpoint = isCustomerRate
        ? '/customer/ratecustomer'
        : '/worker/rate_worker'

    const handleUpdate = () => {

        axios.post(apiEndpoint, {
            shirt_rate: val.shirt_rate,
            pent_rate: val.pent_rate,
            kurta_rate: val.kurta_rate,
            userId: userId
        })
            .then(function (res) {
                setVal(res.data)
                console.log(res.data);
                closeModel()
                toast.success("Rate Saved Succesfully !", {
                    autoClose: 4000,
                    style: {
                        backgroundColor: 'black',
                        color: 'white',
                    },
                });
            })
            .catch(function (error) {
                toast.error("Failed to saved rate !", {
                    autoClose: 4000,
                    style: {
                        backgroundColor: 'black',
                        color: 'white',
                    },
                });
            })
    }

    useEffect(() => {
        axios.get(apiEndpoint + "?userId=" + userId)
            .then(function (res) {
                console.log(res.data);
                if (res.data.result !== null) {
                    setVal(res.data.result);
                }
            })
            .catch(function (error) {
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
