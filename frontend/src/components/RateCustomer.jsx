import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import axios from "axios";
import Footer from "./Footer";
import Modal from 'react-bootstrap/Modal';
import { Alert, Button } from 'react-bootstrap';
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";


function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className='text-center'>
                <h1 style={{ color: 'green' }}><IoCheckmarkDoneCircleSharp /></h1>
                <h5 style={{ color: 'green' }}>Rate Saved Succesfully</h5>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='success' className='m-auto' onClick={props.onHide}>OK</Button>
            </Modal.Footer>
        </Modal>
    );
}


export default function RateCustomer() {

    const [val, setVal] = useState({
        shirt_rate: 0,
        pent_rate: 0,
        kurta_rate: 0
    })
    const [modalShow, setModalShow] = useState(false);
    const [dataFetched, setDataFetched] = useState(false);

    const handleChange = (e) => {
        setVal({ ...val, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        axios.get("http://localhost:5000/customer/view_rate")
            .then(function (response) {
                console.log(response.data.data);
                if (response.data.data === null) {
                    setVal({
                        shirt_rate: 0,
                        pent_rate: 0,
                        kurta_rate: 0
                    })
                } else {
                    setDataFetched(true);
                    setVal(response.data.data)
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    const passdata = (e) => {
        e.preventDefault()
        if (dataFetched) {
            // ---- Data already fetched, update the existing data ----
            axios.put("http://localhost:5000/customer/update_rate", {
                shirt_rate: val.shirt_rate,
                pent_rate: val.pent_rate,
                kurta_rate: val.kurta_rate
            })
                .then(function (response) {
                    console.log(response);
                    if (response.data.status === "success") {
                        setModalShow(true)
                    }
                })
                .catch(function (error) {
                    console.log(error);
                })
        } else {
             // ---- No data fetched, add new data ----
            axios.post("http://localhost:5000/customer/add_rate", {
                shirt_rate: val.shirt_rate,
                pent_rate: val.pent_rate,
                kurta_rate: val.kurta_rate
            })
                .then(function (response) {
                    console.log(response);
                    if (response.data.status === "success") {
                        setModalShow(true)
                    }
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    }

    return (
        <div>
            <Sidebar />
            <Topbar />
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Add Rate</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Add Rate</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="content">
                    <div className="container-fluid pb-5">
                        <div className="row">
                            <div className="col-md-9 m-auto">
                                <div className="card card-primary">
                                    <div className="card-header">
                                        <h3 className="card-title">Rate For Customer</h3>
                                    </div>

                                    <div className="card-body table-responsive">
                                        <table id="example2" className="table table-bordered table-hover text-center responsive">
                                            <thead>
                                                <tr>
                                                    <th className="w-25">Item No.</th>
                                                    <th>Item Name</th>
                                                    <th className="w-25">Rate</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Shirt</td>
                                                    <td>
                                                        <div className="d-flex justify-content-center">
                                                            <input type="text" className="form-control form-control-sm w-50 text-center" name="shirt_rate" value={val.shirt_rate} onChange={handleChange} />
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Pent</td>
                                                    <td>
                                                        <div className="d-flex justify-content-center">
                                                            <input type="text" className="form-control form-control-sm w-50 text-center" name="pent_rate" value={val.pent_rate} onChange={handleChange} />
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>Kurta</td>
                                                    <td>
                                                        <div className="d-flex justify-content-center">
                                                            <input type="text" className="form-control form-control-sm w-50 text-center" name="kurta_rate" value={val.kurta_rate} onChange={handleChange} />
                                                        </div>
                                                    </td>
                                                </tr>
                                                <>
                                                    <td colSpan={3}>
                                                        <button className="btn btn-primary" onClick={passdata}>Save</button>
                                                    </td>
                                                </>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div>
            <Footer />
        </div>
    )
}
