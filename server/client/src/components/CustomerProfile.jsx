import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import axios from 'axios'
import { useParams } from 'react-router-dom';

function CustomerProfile() {
    const [val, setVal] = useState()
    const [name, setName] = useState()
    const params = useParams()
    useEffect(() => {
        axios.get(`/customer/customerprofile/${params.id}`, {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })
            .then(function (res) {
                setVal(res.data.customerData)
                setName(res.data.data.customername)
            })
            .catch(function (error) {
            })
    }, [params.id])
    return (
        <div>
            <Sidebar />
            <Topbar />
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Customer Profile</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content">
                    <div className="container-fluid">
                        <div className="card card-default">
                            <div className="card-header">
                                <h3 className="card-title" style={{ textTransform: 'capitalize' }}>{name}'s Order Data</h3>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="table-responsive">
                                            <table className="table table-bordered table-hover text-center responsive">
                                                <thead>
                                                    <tr>
                                                        <th>Booking Date</th>
                                                        <th>Delivery Date</th>
                                                        <th>Updated Delivery </th>
                                                        <th>Shirt</th>
                                                        <th>Pent</th>
                                                        <th>Kurta</th>
                                                        <th>Total Amount</th>
                                                        <th>Advance Paid</th>
                                                        <th>Final Amount</th>
                                                        <th>Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        val?.map((item, index) => {
                                                            return (
                                                                <tr>
                                                                    <td>{new Date(item.booking_date).toLocaleDateString('en-GB')}</td>
                                                                    <td>{new Date(item.delivery_date).toLocaleDateString('en-GB')}</td>
                                                                    <td>{item.actual_delivery_date ? new Date(item.actual_delivery_date).toLocaleDateString('en-GB') : "-"}</td>
                                                                    <td>{item.shirt_qty}</td>
                                                                    <td>{item.pent_qty}</td>
                                                                    <td>{item.kurta_qty}</td>
                                                                    <td>{item.total_amt}</td>
                                                                    <td>{item.paid_amt}</td>
                                                                    <td>{item.final_amt}</td>
                                                                    <td>{item.status === 0 ? "Pending" : item.status === 1 ? "Complete" : item.status === 2 ? "Delivered" : ''}</td>
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
                    </div>
                </section>
            </div>
        </div>
    )
}

export default CustomerProfile
