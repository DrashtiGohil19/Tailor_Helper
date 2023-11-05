import React, { useEffect, useRef, useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { toast } from "react-toastify";
import ReactToPrint from "react-to-print";
import Print_measurement from "./Print_measurement";
import Footer from "./Footer";

export default function Measurement() {

    const [val, setVal] = useState({
        customername: "",
        mobilenu: "",
        booking_date: "",
        delivery_date: "",
        pent_qty: "",
        shirt_qty: "",
        bill_nu: "",

        extra_p: [],
        weist: "",
        p_length: "",
        hip: "",
        round: "",
        thigh: "",
        knee: "",
        knee1: "",
        knee2: "",
        bottom: "",

        extra_s: [],
        s_length: "",
        shoulder: "",
        sleeve: "",
        sleeve1: "",
        sleeve2: "",
        chest: "",
        chest1: "",
        chest2: "",
        front: "",
        front1: "",
        front2: "",
        coller: "",
        cuff: ""
    })
    const params = useParams()
    const [dataExists, setDataExists] = useState(false);
    const ref = useRef(null)

    const handleChange = (e) => {
        const { value, checked, type } = e.target;
        const { extra_p, extra_s } = val;

        if (type === 'checkbox') {
            if (checked) {
                if (e.target.name === 'extra_p') {
                    setVal({ ...val, extra_p: [...extra_p, value] });
                } else if (e.target.name === 'extra_s') {
                    setVal({ ...val, extra_s: [...extra_s, value] });
                }
            } else {
                if (e.target.name === 'extra_p') {
                    setVal({ ...val, extra_p: extra_p.filter((e) => e !== value) });
                } else if (e.target.name === 'extra_s') {
                    setVal({ ...val, extra_s: extra_s.filter((e) => e !== value) });
                }
            }
        } else {
            setVal({ ...val, [e.target.name]: e.target.value });
        }
    };

    const isExtraSelected = (option) => {
        return val.extra_p.includes(option) || val.extra_s.includes(option);
    };

    const getData = () => {
        axios.get(`http://localhost:5000/measurement/view_measurement?customer_id=${params.id}`)
            .then(function (response) {
                if (response.data.data.pent_id || response.data.data.shirt_id) {
                    setDataExists(true)
                }
                if (response.data && response.data.data) {
                    const customerData = response.data.data;
                    const pentData = response.data.data.pent_id || {};
                    const shirtData = response.data.data.shirt_id || {};
                    setVal({
                        ...val,
                        customername: customerData.customername,
                        mobilenu: customerData.mobilenu,
                        bill_nu: customerData.bill_nu,

                        extra_p: pentData.extra_p || [],
                        weist: pentData.weist,
                        p_length: pentData.p_length,
                        hip: pentData.hip,
                        round: pentData.round,
                        thigh: pentData.thigh,
                        knee: pentData.knee,
                        knee1: pentData.knee1,
                        knee2: pentData.knee2,
                        bottom: pentData.bottom,

                        extra_s: shirtData.extra_s || [],
                        s_length: shirtData.s_length,
                        shoulder: shirtData.shoulder,
                        sleeve: shirtData.sleeve,
                        sleeve1: shirtData.sleeve1,
                        sleeve2: shirtData.sleeve2,
                        chest: shirtData.chest,
                        chest1: shirtData.chest1,
                        chest2: shirtData.chest2,
                        front: shirtData.front,
                        front1: shirtData.front1,
                        front2: shirtData.front2,
                        coller: shirtData.coller,
                        cuff: shirtData.cuff
                    })
                }
            })
            .catch(function (error) {
            })
    }

    const customerData = {
        name: val.customername,
        bill_nu: val.bill_nu
    }

    const pentData = {
        extra_p: [val.extra_p],
        weist: val.weist,
        p_length: val.p_length,
        hip: val.hip,
        round: val.round,
        thigh: val.thigh,
        knee: val.knee,
        knee1: val.knee1,
        knee2: val.knee2,
        bottom: val.bottom,
    }

    const shirtData = {
        extra_s: [val.extra_s],
        s_length: val.s_length,
        shoulder: val.shoulder,
        sleeve: val.sleeve,
        sleeve1: val.sleeve1,
        sleeve2: val.sleeve2,
        chest: val.chest,
        chest1: val.chest1,
        chest2: val.chest2,
        front: val.front,
        front1: val.front1,
        front2: val.front2,
        coller: val.coller,
        cuff: val.cuff,
    }

    const handleClick = () => {
        if (!dataExists) {
            axios.post(`http://localhost:5000/measurement/add_measurement?customer_id=${params.id}`, {
                // ---- pent data ----
                extra_p: val.extra_p,
                weist: val.weist,
                p_length: val.p_length,
                hip: val.hip,
                round: val.round,
                thigh: val.thigh,
                knee: val.knee,
                knee1: val.knee1,
                knee2: val.knee2,
                bottom: val.bottom,

                // ---- shirt data ----
                extra_s: val.extra_s,
                s_length: val.s_length,
                shoulder: val.shoulder,
                sleeve: val.sleeve,
                sleeve1: val.sleeve1,
                sleeve2: val.sleeve2,
                chest: val.chest,
                chest1: val.chest1,
                chest2: val.chest2,
                front: val.front,
                front1: val.front1,
                front2: val.front2,
                coller: val.coller,
                cuff: val.cuff,
            })
                .then(function (res) {
                    if (res.data.status === 'success') {
                        toast.success("Measurement Saved Succesfully", {
                            autoClose: 4000,
                            style: {
                                backgroundColor: 'black',
                                color: 'white',
                            },
                        });
                    }
                })
                .catch(function (error) {
                })
        } else {
            axios.put(`http://localhost:5000/measurement/update_map/${params.id}`, {
                extra_p: val.extra_p,
                weist: val.weist,
                p_length: val.p_length,
                hip: val.hip,
                round: val.round,
                thigh: val.thigh,
                knee: val.knee,
                knee1: val.knee1,
                knee2: val.knee2,
                bottom: val.bottom,

                extra_s: val.extra_s,
                s_length: val.s_length,
                shoulder: val.shoulder,
                sleeve: val.sleeve,
                sleeve1: val.sleeve1,
                sleeve2: val.sleeve2,
                chest: val.chest,
                chest1: val.chest1,
                chest2: val.chest2,
                front: val.front,
                front1: val.front1,
                front2: val.front2,
                coller: val.coller,
                cuff: val.cuff,
            })
                .then(function (res) {
                    if (res.data.status === 'success') {
                        toast.success("Measurement Updated Succesfully", {
                            autoClose: 4000,
                            style: {
                                backgroundColor: 'black',
                                color: 'white',
                            },
                        });
                    }
                })
                .catch(function (error) {
                })
        }
    }

    useEffect(() => {
        getData()
        document.title = "Simplex Tailor - Measurement"
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
                                <h1>Measurement </h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Add Measurement</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content measurement">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <div className="form-group">
                                                    <label>Name</label>
                                                    <input type="text" className="form-control" value={val.customername} onChange={handleChange} />
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div className="form-group">
                                                    <label>Mobile Number</label>
                                                    <input type="number" className="form-control" value={val.mobilenu} onChange={handleChange} />
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div className="form-group">
                                                    <label>Bill Number</label>
                                                    <input type="number" className="form-control" value={val.bill_nu} onChange={handleChange} />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ====================== measurement ==================== */}
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card card-primary">
                                    <div className="card-header">
                                        <h3 className="card-title">Pent Measurement</h3>
                                    </div>

                                    <form>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-sm-5">
                                                    <div className="row extp">
                                                        <div className="col-sm-4">
                                                            <input type="checkbox" className="m-1" name="extra_p" value="સાઈડ પોકેટ" checked={isExtraSelected("સાઈડ પોકેટ")} onChange={handleChange} />
                                                            <label>સાઈડ પોકેટ</label>
                                                        </div>
                                                        <div className="col-sm-4">
                                                            <input type="checkbox" className="m-1" name="extra_p" value="ક્રોસ પોકેટ" checked={isExtraSelected("ક્રોસ પોકેટ")} onChange={handleChange} />
                                                            <label>ક્રોસ પોકેટ</label>
                                                        </div>
                                                        <div className="col-sm-4">
                                                            <input type="checkbox" className="m-1" name="extra_p" value="હાથ સિલાઈ" checked={isExtraSelected("હાથ સિલાઈ")} onChange={handleChange} />
                                                            <label>હાથ સિલાઈ</label>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-sm-4">
                                                            <input type="checkbox" className="m-1" name="extra_p" value="ગ્રીપ" checked={isExtraSelected("ગ્રીપ")} onChange={handleChange} />
                                                            <label>ગ્રીપ</label>
                                                        </div>
                                                        <div className="col-sm-4">
                                                            <input type="checkbox" className="m-1" name="extra_p" value="પાછળ પોકેટ" checked={isExtraSelected("પાછળ પોકેટ")} onChange={handleChange} />
                                                            <label>પાછળ પોકેટ</label>
                                                        </div>
                                                        <div className="col-sm-4">
                                                            <input type="checkbox" className="m-1" name="extra_p" value="સિંગલ ચીપટી" checked={isExtraSelected("સિંગલ ચીપટી")} onChange={handleChange} />
                                                            <label>સિંગલ ચીપટી</label>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-sm-4">
                                                            <input type="checkbox" className="m-1" name="extra_p" value="ડબલ ચીપટી" checked={isExtraSelected("ડબલ ચીપટી")} onChange={handleChange} />
                                                            <label>ડબલ ચીપટી</label>
                                                        </div>
                                                        <div className="col-sm-4">
                                                            <input type="checkbox" className="m-1" name="extra_p" value="બોક્સ ચીપટી" checked={isExtraSelected("બોક્સ ચીપટી")} onChange={handleChange} />
                                                            <label>બોક્સ ચીપટી</label>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* =================================================================== */}

                                                <div className="col-sm-1">
                                                    <div className="form-group">
                                                        <label>કમર :</label>
                                                        <input type="text" className="form-control" name="weist" value={val.weist} onChange={handleChange} />
                                                    </div>
                                                </div>
                                                <div className="col-sm-1">
                                                    <div className="form-group">
                                                        <label>લંબાઈ :</label>
                                                        <input type="text" className="form-control" name="p_length" value={val.p_length} onChange={handleChange} />
                                                    </div>
                                                </div>
                                                <div className="col-sm-1">
                                                    <div className="form-group">
                                                        <label>સીટ:</label>
                                                        <input type="text" className="form-control" name="hip" value={val.hip} onChange={handleChange} />
                                                    </div>
                                                </div>
                                                <div className="col-sm-1">
                                                    <div className="form-group">
                                                        <label>રાઉન્ડ :</label>
                                                        <input type="text" className="form-control" name="round" value={val.round} onChange={handleChange} />
                                                    </div>
                                                </div>

                                                <div className="col-sm-1">
                                                    <div className="form-group">
                                                        <label>જાંઘ:</label>
                                                        <input type="text" className="form-control" name="thigh" value={val.thigh} onChange={handleChange} />
                                                    </div>
                                                </div>
                                                <div className="col-sm-1">
                                                    <div className="form-group">
                                                        <label>ઘૂંટણ :</label>
                                                        <input type="text" className="form-control" name="knee" value={val.knee} onChange={handleChange} />
                                                        <input type="text" className="form-control mt-2" name="knee1" value={val.knee1} onChange={handleChange} />
                                                        <input type="text" className="form-control mt-2" name="knee2" value={val.knee2} onChange={handleChange} />
                                                    </div>
                                                </div>
                                                <div className="col-sm-1">
                                                    <div className="form-group">
                                                        <label>બોટમ:</label>
                                                        <input type="text" className="form-control" name="bottom" value={val.bottom} onChange={handleChange} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/* ============================================================= */}
                            <div className="col-md-12">
                                <div className="card card-primary">
                                    <div className="card-header">
                                        <h3 className="card-title">Shirt Measurement</h3>
                                    </div>
                                    <form>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-sm-5">
                                                    <div className="row">
                                                        <div className="col-sm-4">
                                                            <input type="checkbox" className="m-1" name="extra_s" value="ઓપન" checked={isExtraSelected("ઓપન")} onChange={handleChange} />
                                                            <label>ઓપન</label>
                                                        </div>
                                                        <div className="col-sm-4">
                                                            <input type="checkbox" className="m-1" name="extra_s" value="બુ-શર્ટ" checked={isExtraSelected("બુ-શર્ટ")} onChange={handleChange} />
                                                            <label>બુ-શર્ટ</label>
                                                        </div>
                                                        <div className="col-sm-4">
                                                            <input type="checkbox" className="m-1" name="extra_s" value="ડાર્ટ" checked={isExtraSelected("ડાર્ટ")} onChange={handleChange} />
                                                            <label>ડાર્ટ</label>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-sm-4">
                                                            <input type="checkbox" className="m-1" name="extra_s" value="પોકેટ" checked={isExtraSelected("પોકેટ")} onChange={handleChange} />
                                                            <label>પોકેટ</label>
                                                        </div>
                                                        <div className="col-sm-4">
                                                            <input type="checkbox" className="m-1" name="extra_s" value="સ્ટેન્ડ કોલર" checked={isExtraSelected("સ્ટેન્ડ કોલર")} onChange={handleChange} />
                                                            <label>સ્ટેન્ડ કોલર</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-1">
                                                    <div className="form-group">
                                                        <label>લંબાઈ :</label>
                                                        <input type="text" className="form-control" name="s_length" value={val.s_length} onChange={handleChange} />
                                                    </div>
                                                </div>
                                                <div className="col-sm-1">
                                                    <div className="form-group">
                                                        <label>શોલ્ડર :</label>
                                                        <input type="text" className="form-control" name="shoulder" value={val.shoulder} onChange={handleChange} />
                                                    </div>
                                                </div>
                                                <div className="col-sm-1">
                                                    <div className="form-group">
                                                        <label>સ્લીવ :</label>
                                                        <input type="text" className="form-control" name="sleeve" value={val.sleeve} onChange={handleChange} />
                                                        <input type="text" className="form-control mt-2" name="sleeve1" value={val.sleeve1} onChange={handleChange} />
                                                        <input type="text" className="form-control mt-2" name="sleeve2" value={val.sleeve2} onChange={handleChange} />
                                                    </div>
                                                </div>
                                                <div className="col-sm-1">
                                                    <div className="form-group">
                                                        <label>છાતી :</label>
                                                        <input type="text" className="form-control" name="chest" value={val.chest} onChange={handleChange} />
                                                        <input type="text" className="form-control mt-2" name="chest1" value={val.chest1} onChange={handleChange} />
                                                        <input type="text" className="form-control mt-2" name="chest2" value={val.chest2} onChange={handleChange} />
                                                    </div>
                                                </div>
                                                <div className="col-sm-1">
                                                    <div className="form-group">
                                                        <label>ફ્રન્ટ :</label>
                                                        <input type="text" className="form-control" name="front" value={val.front} onChange={handleChange} />
                                                        <input type="text" className="form-control mt-2" name="front1" value={val.front1} onChange={handleChange} />
                                                        <input type="text" className="form-control mt-2" name="front2" value={val.front2} onChange={handleChange} />
                                                    </div>
                                                </div>
                                                <div className="col-sm-1">
                                                    <div className="form-group">
                                                        <label>કોલર :</label>
                                                        <input type="text" className="form-control" name="coller" value={val.coller} onChange={handleChange} />
                                                    </div>
                                                </div>
                                                <div className="col-sm-1">
                                                    <div className="form-group">
                                                        <label>કફ :</label>
                                                        <input type="text" className="form-control" name="cuff" value={val.cuff} onChange={handleChange} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card-footer">
                        <div className="row">
                            <div className="col-sm-6">
                                <button type="submit" className="btn btn-primary mr-3" onClick={handleClick}>Save</button>
                                <ReactToPrint
                                    trigger={() => <button className="btn btn-primary">Get Print</button>}
                                    content={() => ref.current}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div style={{ display: 'none' }}>
                <div ref={ref}>
                    <Print_measurement shirtMeasurement={shirtData} pentMeasurement={pentData} customerData={customerData} />
                </div>
            </div>
            <Footer />
        </div>
    )
}
