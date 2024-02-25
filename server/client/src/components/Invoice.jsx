import React, { useEffect, useState } from 'react'
import "../App.css"
import axios from 'axios'
import html2pdf from 'html2pdf.js';
import { Col } from 'react-bootstrap';

function Invoice(props) {
    const [billData, setBillData] = useState([])
    const [customerData, setCustomerData] = useState({})

    const getBillData = () => {
        axios({
            url: `/bill/bill?customerId=${props.customer_id}`,
            method: "GET",
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then((response) => {
                setBillData(response.data.result)
                setCustomerData(response.data.customerData)

            })
            .catch((error) => {
                console.log(error);
            })
    }
    useEffect(() => {
        if (props.customer_id !== undefined) {
            getBillData()
        }
    }, [props.customer_id])

    useEffect(() => {
        if (props.print) {
            getPDF()
        }
    }, [props.print])

    const getPDF = () => {
        const element = document.getElementById('bill-container')
        const options = {
            filename: "Bill.pdf"
        }
        html2pdf(element, options)
    }

    return (
        <div className="card" id='bill-container'>
            <div className="card-header pb-0 text-right">
                <div className="row">
                    <div className="col">
                        || શ્રી ૧ ||
                    </div>
                    <div className="col">
                        <div>
                            <label className='mr-2'>Vijaybhai :</label>94268 79057 <br />
                            <label className='mr-2'>Raghubhai :</label>88661 28000
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <div className="row mb-4 justify-content-center">
                    <div className="col-sm-12 text-center">
                        <img src="images/cap.png" alt="logo" width='100px' height="90px" />
                        <img src="images/logo.jpg" className='logoImage' alt="logo" width='250px' height="100px" />
                    </div>
                </div>
                <div className='text-center'>
                    <p className='fw-3'>Shop No. 4, First Floor, Mira Complex Near Virat Nagar, Kapodra, Surat</p>
                </div>
                <div className="row mb-2">
                    <div className="col-4">
                        <label className='mr-2'>Name :</label>
                        {customerData.customername}
                    </div>
                    <div className="col-3">
                        <label className='mr-2'>
                            Bill Date :
                        </label>
                        {new Date().toLocaleDateString("en-GB")}
                    </div>
                    <div className="col-3">
                        <label className='mr-2'> Bill Number :</label>
                        {customerData.bill_nu}
                    </div>
                </div>
                <div className="table-responsive-sm">
                    <table className="table table-striped border text-center">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Item</th>
                                <th>Qty</th>
                                <th>Rate</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {billData?.map((item, i) => {
                                const filteredItems = ["shirt", "pent", "kurta"].filter(itemName => item[itemName]);

                                return filteredItems.map((itemName, j) => (
                                    <tr key={j}>
                                        <td>{j + 1}</td>
                                        <td>{itemName}</td>
                                        <td>{item[itemName][`${itemName}_qty`]}</td>
                                        <td>{item[itemName][`${itemName}_amt`] / item[itemName][`${itemName}_qty`]}</td>
                                        <td>{item[itemName][`${itemName}_amt`]}</td>
                                    </tr>
                                ));
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="row">
                    <Col lg={6} sm={6} xs={7}>
                        <label>Note :</label>
                        <p className="mb-1">1. કપડાં લેવા આવો ત્યારે બિલ અવશ્ય લાવવું.</p>
                        <p className="mb-1">2. સંજોગો વસાત કપડા ની ડિલિવરી માં ફેરફાર થઈ શકે છે.</p>
                        <p className="mb-1">3. કાપડ માં કોઈ નુકસાની હશે તો તેના માટે અમે જવાબદાર રહેશુ નહીં.</p>
                    </Col>
                    <Col lg={6} sm={6} xs={5}>
                        <table className="table table-clear">
                            <tbody>

                                {
                                    billData?.map((item, i) => {
                                        return (
                                            <>
                                                <tr>
                                                    <td>
                                                        <strong>Subtotal</strong>
                                                    </td>
                                                    <td>{item.total_amt}</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>Paid Amount</strong>
                                                    </td>
                                                    <td>{item.paid_amt}</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>Total Amount</strong>
                                                    </td>
                                                    <td>
                                                        <strong>{item.final_amt}</strong>
                                                    </td>
                                                </tr>
                                            </>
                                        )
                                    })
                                }

                            </tbody>
                        </table>
                    </Col>
                </div>
            </div>
        </div>
    )
}

export default Invoice
