import React, { useEffect } from 'react'
import html2pdf from 'html2pdf.js';

function Print_measurement({ shirtMeasurement, pentMeasurement, customerData, printPDF }) {

    useEffect(() => {
        if (printPDF) {
            getPDF()
        }
    }, [printPDF])

    const getPDF = () => {
        const element = document.getElementById('measurement-container')
        const options = {
            filename: "Measurement.pdf"
        }
        html2pdf(element, options)
    }
    return (
        <div id='measurement-container'>
            <section className="content mt-3">
                <div className="container-fluid pb-5">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card-primary">
                                <div className="card-body border border-dark">
                                    <div className='mb-2'>
                                        <b>Name :</b>
                                        <span className='ml-2 mr-4'>{customerData.name}</span>

                                        <b>Bill No :</b>
                                        <span className='ml-2'>{customerData.bill_nu}</span>
                                    </div>

                                    <div className="row">
                                        {
                                            shirtMeasurement.s_length !== "" &&
                                            shirtMeasurement.shoulder !== "" &&
                                            (shirtMeasurement.sleeve !== "" || shirtMeasurement.sleeve1 !== "" || shirtMeasurement.sleeve2 !== "") &&
                                            (shirtMeasurement.chest !== "" || shirtMeasurement.chest1 !== "" || shirtMeasurement.chest2 !== "") &&
                                            (shirtMeasurement.front !== "" || shirtMeasurement.front1 !== "" || shirtMeasurement.front2 !== "") &&
                                            shirtMeasurement.coller !== "" &&
                                            shirtMeasurement.cuff !== "" &&
                                            shirtMeasurement.extra_s.length > 0 && (
                                                <div className="col">
                                                    <table className="table table-bordered table-hover text-center responsive">
                                                        <thead>
                                                            <tr>
                                                                <th colSpan={8} className='bg-secondary p-1'>Shirt</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th>લંબાઈ</th>
                                                                <th>શોલ્ડર</th>
                                                                <th>સ્લીવ</th>
                                                                <th>છાતી</th>
                                                                <th>ફ્રન્ટ</th>
                                                                <th>કોલર</th>
                                                                <th>કફ</th>
                                                                <th>Other</th>
                                                            </tr>
                                                            <tr>
                                                                <td>{shirtMeasurement.s_length ?? ""}</td>
                                                                <td>{shirtMeasurement.shoulder ?? ""}</td>
                                                                <td>{(shirtMeasurement.sleeve ?? "") + ", " + (shirtMeasurement.sleeve1 ?? "") + ", " + (shirtMeasurement.sleeve2 ?? "")}</td>
                                                                <td>{(shirtMeasurement.chest ?? "") + ", " + (shirtMeasurement.chest1 ?? "") + "," + (shirtMeasurement.chest2 ?? "")}</td>
                                                                <td>{(shirtMeasurement.front ?? "") + ", " + (shirtMeasurement.front1 ?? "") + ", " + (shirtMeasurement.front2 ?? "")}</td>
                                                                <td>{shirtMeasurement.coller ?? ""}</td>
                                                                <td>{shirtMeasurement.cuff ?? ""}</td>
                                                                <td>{shirtMeasurement.extra_s.join(" ,  ")}</td>

                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            )}
                                    </div>
                                    <div className="row">
                                        {pentMeasurement.weist !== "" &&
                                            pentMeasurement.p_length !== "" &&
                                            pentMeasurement.hip !== "" &&
                                            pentMeasurement.round !== "" &&
                                            pentMeasurement.thigh !== "" &&
                                            (pentMeasurement.knee !== "" || pentMeasurement.knee1 !== "" || pentMeasurement.knee2 !== "") &&
                                            pentMeasurement.bottom !== "" &&
                                            pentMeasurement.extra_p.length > 0 && (
                                                <div className="col">
                                                    <table className="table table-bordered table-hover text-center responsive">
                                                        <thead>
                                                            <tr>
                                                                <th colSpan={8} className='bg-secondary p-1'>Pent</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th>કમર</th>
                                                                <th>લંબાઈ</th>
                                                                <th>સીટ</th>
                                                                <th>રાઉન્ડ</th>
                                                                <th>જાંઘ</th>
                                                                <th>ઘૂંટણ</th>
                                                                <th>બોટમ</th>
                                                                <th>Other</th>
                                                            </tr>
                                                            <tr>
                                                                <td>{pentMeasurement.weist ?? ""}</td>
                                                                <td>{pentMeasurement.p_length ?? ""}</td>
                                                                <td>{pentMeasurement.hip ?? ""}</td>
                                                                <td>{pentMeasurement.round ?? ""}</td>
                                                                <td>{pentMeasurement.thigh ?? ""}</td>
                                                                <td>{(pentMeasurement.knee ?? "") + ", " + (pentMeasurement.knee1 ?? "") + ", " + (pentMeasurement.knee2 ?? "")}</td>
                                                                <td>{pentMeasurement.bottom ?? ""}</td>
                                                                <td>{pentMeasurement.extra_p.join(" ,  ")}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            )}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Print_measurement
