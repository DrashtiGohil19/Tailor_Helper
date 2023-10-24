import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import axios from "axios";
import "../App.css"
import { useParams } from "react-router-dom";
import Footer from "./Footer";

export default function ViewMeasurment() {

    var [customerData, setCustomerData] = useState()
    var [pent, setPent] = useState()
    var [shirt, setShirt] = useState()
    const [search, setSearch] = useState('')
    const params = useParams()

    const handleSearch = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.get(`http://localhost:5000/measurement/view_measurement?mobilenu=${search}`);
            console.log(response.data.data);
            setCustomerData(response.data.data);
            setPent(response.data.data.pent_id)
            setShirt(response.data.data.shirt_id)
        } catch (error) {
            console.log(error);
        }
    }

    const fetchData = () => {
        axios.get(`http://localhost:5000/measurement/view_measurement?customer_id=${params.id}`)
            .then(function (response) {
                console.log(response.data.data);
                setCustomerData(response.data.data);
                if (response.data.data.pent_id) {
                    setPent(response.data.data.pent_id)
                }
                if (response.data.data.shirt_id) {
                    setShirt(response.data.data.shirt_id)
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    const handlePrint = () => {
        window.print();
    }

    useEffect(() => {
        fetchData();
    }, [params.id])

    return (
        <div>
            <Topbar />
            <Sidebar />
            <div className="content-wrapper">
                <section className="content-header not-print">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>View Measurement </h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Measurement</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container-fluid not-print">
                    <div className="row mb-2 ml-1">
                        <div className="col-sm-12">
                            <form onSubmit={handleSearch} className="d-flex">
                                <div className="form-group mr-2">
                                    <input type="text" className="form-control" name="search" placeholder="Mobile Number" value={search} onChange={(e) => setSearch(e.target.value)} />
                                </div>
                                <div className="mr-3">
                                    <button type="submit" className="btn btn-primary">Get Data</button>
                                </div>
                                <div>
                                    <button type="button" className="btn btn-primary" onClick={handlePrint}>Get Print</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {
                    search || params.id ? (
                        <section className="content">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="card">
                                            <div className="card-header">
                                                <h3 className="card-title">Customer Details</h3>
                                            </div>
                                            <div className="card-body table-responsive">
                                                <table id="example2" className="table table-bordered table-hover text-center responsive">
                                                    <thead>
                                                        <tr>
                                                            <th>Name</th>
                                                            <th>Mobile Number</th>
                                                            <th>Bill Number</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {customerData &&
                                                            <tr>
                                                                <td>{customerData.customername}</td>
                                                                <td>{customerData.mobilenu}</td>
                                                                <td>{customerData.bill_nu}</td>
                                                            </tr>
                                                        }
                                                    </tbody>
                                                </table>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                               
                                <div className="">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="card">
                                                <div className="card-header">
                                                    <h3 className="card-title">Pent Measurement</h3>
                                                </div>
                                                <div className="card-body table-responsive">
                                                    <table id="example2" className="table table-bordered table-hover text-center responsive">
                                                        <thead>
                                                            <tr>
                                                                <th>કમર</th>
                                                                <th>લંબાઈ</th>
                                                                <th>સીટ</th>
                                                                <th>રાઉન્ડ</th>
                                                                <th>જાંઘ</th>
                                                                <th>ઘૂંટણ</th>
                                                                <th>બોટમ</th>
                                                                <th>અન્ય</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {pent &&
                                                                <tr>
                                                                    <td>{pent.weist}</td>
                                                                    <td>{pent.p_length}</td>
                                                                    <td>{pent.hip}</td>
                                                                    <td>{pent.round}</td>
                                                                    <td>{pent.knee + ", " + pent.knee1 + ", " + pent.knee2}</td>
                                                                    <td>{pent.thigh}</td>
                                                                    <td>{pent.bottom}</td>
                                                                    <td>{pent.extra_p.join(", ")}</td>
                                                                </tr>
                                                            }
                                                        </tbody>
                                                    </table>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12">
                                            <div className="card">
                                                <div className="card-header">
                                                    <h3 className="card-title">Shirt Measurement</h3>
                                                </div>
                                                <div className="card-body table-responsive">
                                                    <table id="example2" className="table table-bordered table-hover text-center responsive">
                                                        <thead>
                                                            <tr>
                                                                <th>લંબાઈ</th>
                                                                <th>શોલ્ડર</th>
                                                                <th>સ્લીવ</th>
                                                                <th>છાતી</th>
                                                                <th>ફ્રન્ટ</th>
                                                                <th>કોલર</th>
                                                                <th>કફ</th>
                                                                <th>અન્ય</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {shirt &&
                                                                <tr>
                                                                    <td>{shirt.s_length}</td>
                                                                    <td>{shirt.shoulder}</td>
                                                                    <td>{shirt.sleeve + ", " + shirt.sleeve1 + ", " + shirt.sleeve2}</td>
                                                                    <td>{shirt.chest + ", " + shirt.chest1 + ", " + shirt.chest2}</td>
                                                                    <td>{shirt.front + ", " + shirt.front1 + ", " + shirt.front2}</td>
                                                                    <td>{shirt.coller}</td>
                                                                    <td>{shirt.cuff}</td>
                                                                    <td>{shirt.extra_s.join(", ")}</td>
                                                                </tr>
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
                    ) : (
                        <div className="alert alert-info w-50 m-auto text-center">Enter mobile number for measurement.</div>
                    )
                }
            </div>
            {/* <Footer /> */}
        </div>
    )
}
