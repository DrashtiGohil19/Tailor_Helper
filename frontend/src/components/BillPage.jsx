import { capitalize } from '@mui/material';
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const BillPage = React.forwardRef(({ data, pentData, shirtData, kurtaData, customerData }, ref) => {
    let itemNumber = 0
    const isShirtDataAvailable = shirtData.shirt_qty > 0;
    const isPentDataAvailable = pentData.pent_qty > 0;
    const isKurtaDataAvailable = kurtaData.kurta_qty > 0;

    useEffect(() => {
        const itemRows = document.querySelectorAll('.item-row');
        const lastItemRow = itemRows[itemRows.length - 1];
        if (lastItemRow) {
            lastItemRow.style.height = '150px';
        }
    }, [])
    return (
        <div ref={ref}>
            <section className="content mt-3">
                <div className="container-fluid pb-5">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card card-primary">
                                <div className="card-body table-responsive border border-dark">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="text-right">
                                                <h6>|| શ્રી ૧ ||</h6>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 text-right">
                                            <p className="mb-0">Vijaybhai : 94268 79057</p>
                                            <p>Rajanibhai : 88661 28000</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-3 text-center">
                                            <img src="images/cap.png" alt="Logo image" height="85px" />
                                        </div>
                                        <div className="col-sm-9 mb-1">
                                            <img src="images/logo.jpg" alt="logo" width='250px' height="100px" />
                                        </div>
                                        <div className="m-auto">
                                            <p>Shop No. 4, First Floor, Mira Complex Near Virat Nagar, Kapodra, Surat</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-7">
                                            <table>
                                                <tr>
                                                    <td>Name :</td>
                                                    <td style={{ textTransform: 'capitalize' }}>{customerData.customername}</td>
                                                </tr>
                                                <tr>
                                                    <td>Mobile :</td>
                                                    <td>{customerData.mobilenu}</td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div className="col-sm-5">
                                            <table>
                                                <tr>
                                                    <td>Bill No :</td>
                                                    <td>{customerData.bill_nu}</td>
                                                </tr>
                                                <tr>
                                                    <td>Date :</td>
                                                    <td>{new Date(customerData.bill_date).toLocaleDateString('en-GB')}</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                    <table className="table table-bordered text-center responsive border mt-1">
                                        <thead>
                                            <tr>
                                                <th className="p-1">No.</th>
                                                <th className="w-50 p-1">Item Name</th>
                                                <th className="p-1">Qty</th>
                                                <th className="p-1">Rate</th>
                                                <th className="p-1">Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {isShirtDataAvailable && (
                                                <tr className='item-row'>
                                                    <td className="p-1">{++itemNumber}</td>
                                                    <td className="p-1">shirt</td>
                                                    <td className="p-1">{shirtData.shirt_qty}</td>
                                                    <td className="p-1">{shirtData.shirt_rate}</td>
                                                    <td className="p-1">{shirtData.shirt_amt}</td>
                                                </tr>
                                            )}
                                            {isPentDataAvailable && (
                                                <tr className="mb-6 item-row">
                                                    <td className="p-0">{++itemNumber}</td>
                                                    <td className="p-0">Pent</td>
                                                    <td className="p-0">{pentData.pent_qty}</td>
                                                    <td className="p-0">{pentData.pent_rate}</td>
                                                    <td className="p-0">{pentData.pent_amt}</td>
                                                </tr>
                                            )}
                                            {isKurtaDataAvailable && (
                                                <tr className="mb-6 item-row">
                                                    <td className="p-0">{++itemNumber}</td>
                                                    <td className="p-0">Kurta</td>
                                                    <td className="p-0">{kurtaData.kurta_qty}</td>
                                                    <td className="p-0">{kurtaData.kurta_rate}</td>
                                                    <td className="p-0">{kurtaData.kurta_amt}</td>
                                                </tr>
                                            )}
                                            <tr className="border-top-none">
                                                <th colSpan={2} className="p-1">Total </th>
                                                <td className="p-1">
                                                    {((isPentDataAvailable ? pentData.pent_qty : 0) +
                                                        (isShirtDataAvailable ? shirtData.shirt_qty : 0) +
                                                        (isKurtaDataAvailable ? kurtaData.kurta_qty : 0))}
                                                </td>
                                                <td className="p-1"></td>
                                                <td className="p-1">{data.total_amt}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="row">
                                        <div className="col-sm-7 mt-3">
                                            <p style={{ fontSize: '13px' }} className="mb-1">1. કપડાં લેવા આવો ત્યારે બિલ અવશ્ય લાવવું.</p>
                                            <p style={{ fontSize: '13px' }} className="mb-1">2. સંજોગો વસાત કપડા ની ડિલિવરી માં ફેરફાર થઈ શકે છે.</p>
                                            <p style={{ fontSize: '13px' }} className="mb-1">3. કાપડ માં કોઈ નુકસાની હશે તો તેના માટે અમે જવાબદાર રહેશુ નહીં.</p>
                                        </div>
                                        <div className="col-sm-5">
                                            <table className="table">
                                                <tr>
                                                    <th className="p-1">Paid Amt :</th>
                                                    <td className="p-1">{data.paid_amt}</td>
                                                </tr>
                                                <tr>
                                                    <th className="p-1">Total Due Amt :</th>
                                                    <td className="p-1">{data.final_amt}</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
})

export default BillPage;
