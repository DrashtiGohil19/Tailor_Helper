import Sidebar from './Sidebar'
import Topbar from './Topbar'
import React, { useState, useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { GoAlertFill } from "react-icons/go"
import { AiFillCheckSquare } from "react-icons/ai"
import '../App.css'
import axios from 'axios';
import { toast } from 'react-toastify';
import { userId } from './LocalItem';
import { Navigate, useNavigate } from 'react-router-dom';
import Footer from './Footer';

export default function Dashboard() {

    const [pending, setPending] = useState()
    const [complete, setComplete] = useState()
    const [deliver, setDeliver] = useState()
    const [alert, setAlert] = useState()
    const navigate = useNavigate()
    const token = localStorage.getItem("token");

    const sortDeliveryData = () => {
        axios.get('/bill/order?userId=' + userId, {
            headers: {
                'Authorization': token
            }
        })
            .then((response) => {
                setPending(response.data.pendingData)
                setComplete(response.data.completedData)
                setDeliver(response.data.deliveryData)
            })
    }
    const deliveryAlert = () => {
        axios.get('/bill/delivery_alert?userId=' + userId, {
            headers: {
                'Authorization': token
            }
        })
            .then((response) => {
                setAlert(response.data.deliveryData)
            })
    }
    const checkIsLoggedIn = () => {
        axios.get("/userdata?id=" + userId)
            .then((response) => {
                let isLoggedIn = response.data.user.isLoggedIn
                if (!isLoggedIn) {
                    localStorage.clear()
                    navigate("/")
                }
            })
    }

    useEffect(() => {
        const storedUserId = localStorage.getItem("userId");
        const isLoggedIn = localStorage.getItem("isLoggedIn");

        if (storedUserId === null || isLoggedIn === null) {
            localStorage.clear();
            navigate("/");
        } else {
            sortDeliveryData();
            deliveryAlert();
            checkIsLoggedIn()
            document.title = "Simplex Tailor - Dashboard";
        }
    }, [navigate]);

    // useEffect(() => {
    //     checkIsLoggedIn()
    // }, [])
    const handleChange = (e, id) => {
        const statusValue = e.target.value
        let successMSG = ''
        if (statusValue === "1") {
            successMSG = "Order marked as completed!";
        } else if (statusValue === "2") {
            successMSG = "Order marked as delivered!";
        }

        axios.put(`/bill/update_status/${id}`, {
            status: statusValue
        }, {
            headers: {
                'Authorization': token
            }
        })
            .then((response) => {
                if (response.data.status === 'success') {
                    setPending((prevVal) => prevVal.filter(item => item._id !== id));
                    deliveryAlert()
                    sortDeliveryData()
                    toast.success(successMSG, {
                        autoClose: 4000,
                        style: {
                            backgroundColor: 'black',
                            color: 'white',
                        },
                    });
                }
            })
    }
    return (
        <>
            <Sidebar />
            <Topbar />
            <div className='content-wrapper' style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Dashboard</h1>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="content">
                    <Tabs
                        defaultActiveKey="delivery alert"
                        transition={true}
                        className="mb-3"
                    >
                        {/* ------------------ delivery alert tab ------------------------- */}

                        <Tab eventKey="delivery alert" title='Delivery Alert'>
                            <section className="content">
                                <div className="container-fluid">
                                    {/* <div className="row">
                                        <div className="col-12"> */}
                                    <div className="card">
                                        <div className="card-body table-responsive">
                                            <table className="table table-bordered table-hover text-center responsive">
                                                <thead>
                                                    <tr>
                                                        <th>Alert</th>
                                                        <th>Name</th>
                                                        <th>Bill Nu.</th>
                                                        <th>Boking Date</th>
                                                        <th>Delivery Date</th>
                                                        <th>Shirt</th>
                                                        <th>Pent</th>
                                                        <th>Kurta</th>
                                                        <th>Total</th>
                                                        <th>Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        alert?.map((item, index) => {
                                                            const today = new Date().toLocaleDateString('en-GB')
                                                            const deliveryDate = new Date(item.delivery_date).toLocaleDateString('en-GB');
                                                            const isRowRed = deliveryDate < today;

                                                            const shirtQty = item.shirt?.shirt_qty || 0;
                                                            const pentQty = item.pent?.pent_qty || 0;
                                                            const kurtaQty = item.kurta?.kurta_qty || 0;

                                                            const totalQty = shirtQty + pentQty + kurtaQty;
                                                            return (
                                                                <tr key={index} style={{ color: isRowRed ? '#d00000' : '', fontWeight: isRowRed ? '500' : '' }}>
                                                                    {
                                                                        isRowRed ? <td style={{ color: '#dd1c1a', fontSize: 20, padding: 5 }}><GoAlertFill /></td> : <td></td>
                                                                    }
                                                                    <td style={{ textTransform: 'capitalize' }}>{item.customer_id.customername}</td>
                                                                    <td>{item.customer_id.bill_nu}</td>
                                                                    <td>{new Date(item.booking_date).toLocaleDateString('en-GB')}</td>
                                                                    <td>{new Date(item.delivery_date).toLocaleDateString('en-GB')}</td>
                                                                    <td>{item.shirt_qty}</td>
                                                                    <td>{item.pent_qty}</td>
                                                                    <td>{item.kurta_qty}</td>
                                                                    <td>{totalQty}</td>
                                                                    <td style={{ color: item.status === 0 ? '#ff8800' : item.status === 1 ? 'green' : '', fontSize: 20, padding: 5 }}>
                                                                        {item.status === 0 ? <GoAlertFill /> : <AiFillCheckSquare />}
                                                                    </td>
                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                        {/* </div>
                                        </div> */}
                                    </div>
                                </div>
                            </section>
                        </Tab>

                        {/* ------------------ pending order tab ------------------------- */}
                        <Tab eventKey="pending order" title="Pending Order">
                            <section className="content">
                                <div className="container-fluid">
                                    <div className="card">
                                        <div className="card-body table-responsive">
                                            <table className="table table-bordered table-hover text-center responsive" >
                                                <thead>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Bill Nu.</th>
                                                        <th>Boking Date</th>
                                                        <th>Delivery Date</th>
                                                        <th>Quentity</th>
                                                        <th>Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        pending?.map((item, index) => {
                                                            const shirtQty = item.shirt?.shirt_qty || 0;
                                                            const pentQty = item.pent?.pent_qty || 0;
                                                            const kurtaQty = item.kurta?.kurta_qty || 0;

                                                            const totalQty = shirtQty + pentQty + kurtaQty;
                                                            return (
                                                                <tr key={index}>
                                                                    <td style={{ textTransform: 'capitalize' }}>{item.customer_id.customername}</td>
                                                                    <td>{item.customer_id.bill_nu}</td>
                                                                    <td>{new Date(item.booking_date).toLocaleDateString('en-GB')}</td>
                                                                    <td>{new Date(item.delivery_date).toLocaleDateString('en-GB')}</td>
                                                                    <td>{totalQty}</td>
                                                                    <td>
                                                                        <select onChange={(e) => handleChange(e, item._id)}>
                                                                            <option value={0}>Pending</option>
                                                                            <option value={1}>Complete</option>
                                                                            <option value={2}>Deliver</option>
                                                                        </select>
                                                                    </td>
                                                                </tr>

                                                            )
                                                        })
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                        {/* </div>
                                        </div> */}
                                    </div>
                                </div>
                            </section>
                        </Tab>
                        {/* ------------------ completed order tab ----------------------- */}
                        <Tab eventKey="completed order" title="Completed Order">
                            <section className="content">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="card">
                                                <div className="card-body table-responsive">
                                                    <table className="table table-bordered table-hover text-center responsive">
                                                        <thead>
                                                            <tr>
                                                                <th>Name</th>
                                                                <th>Bill Nu.</th>
                                                                <th>Boking Date</th>
                                                                <th>Delivery Date</th>
                                                                <th>Quentity</th>
                                                                <th>Status</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {
                                                                complete?.map((item, index) => {
                                                                    const shirtQty = item.shirt?.shirt_qty || 0;
                                                                    const pentQty = item.pent?.pent_qty || 0;
                                                                    const kurtaQty = item.kurta?.kurta_qty || 0;

                                                                    const totalQty = shirtQty + pentQty + kurtaQty;
                                                                    return (
                                                                        <tr key={index}>
                                                                            <td style={{ textTransform: 'capitalize' }}>{item.customer_id.customername}</td>
                                                                            <td>{item.customer_id.bill_nu}</td>
                                                                            <td>{new Date(item.booking_date).toLocaleDateString('en-GB')}</td>
                                                                            <td>{new Date(item.delivery_date).toLocaleDateString('en-GB')}</td>
                                                                            <td>{totalQty}</td>
                                                                            <td>
                                                                                <select onChange={(e) => handleChange(e, item._id)}>
                                                                                    <option value={1}>Complete</option>
                                                                                    <option value={2}>Deliver</option>
                                                                                </select>
                                                                            </td>
                                                                        </tr>
                                                                    )
                                                                })
                                                            }
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </Tab>

                        {/* ------------------- delivery alert tab --------------------- */}
                        <Tab eventKey="delivered order" title="Delivered Order">
                            <section className="content">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="card">
                                                <div className="card-body table-responsive">
                                                    <table className="table table-bordered table-hover text-center responsive">
                                                        <thead>
                                                            <tr>
                                                                <th>Name</th>
                                                                <th>Bill Nu.</th>
                                                                <th>Delivery Date</th>
                                                                <th>Updated Delivery</th>
                                                                <th>Quentity</th>
                                                                <th>Status</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {
                                                                deliver?.map((item, index) => {
                                                                    const shirtQty = item.shirt?.shirt_qty || 0;
                                                                    const pentQty = item.pent?.pent_qty || 0;
                                                                    const kurtaQty = item.kurta?.kurta_qty || 0;

                                                                    const totalQty = shirtQty + pentQty + kurtaQty;
                                                                    return (
                                                                        <tr key={index}>
                                                                            <td style={{ textTransform: 'capitalize' }}>{item.customer_id.customername}</td>
                                                                            <td>{item.customer_id.bill_nu}</td>
                                                                            <td>{new Date(item.delivery_date).toLocaleDateString('en-GB')}</td>
                                                                            <td>{item.actual_delivery_date ? new Date(item.actual_delivery_date).toLocaleDateString('en-GB') : "-"}</td>
                                                                            <td>{totalQty}</td>
                                                                            <td style={{ padding: 7 }}>
                                                                                <AiFillCheckSquare style={{ color: 'green', fontSize: 20 }} />
                                                                            </td>
                                                                        </tr>
                                                                    )
                                                                })
                                                            }
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </Tab>
                    </Tabs>
                </section>
            </div >
            <Footer />
        </>
    )
}
