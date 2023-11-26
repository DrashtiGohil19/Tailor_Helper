import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Footer from "./Footer";

export default function WorkerProfile() {
    const [val, setval] = useState([]);
    const [selectedMonth, setSelectedMonth] = useState();
    const [selectedYear, setSelectedYear] = useState('');
    const [name, setName] = useState('');
    const params = useParams();

    useEffect(() => {
        fetchMonth();
        single_worker()
    }, [])

    const fetchMonth = () => {

        const month = selectedMonth || new Date().getMonth() + 1;
        const year = selectedYear || new Date().getFullYear();

        axios.get(`/worker/workerprofile?data_id=${params.id}&selectedMonth=${month}&selectedYear=${year}`, {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })
            .then(function (res) {
                setval(res.data.data);
            })
            .catch(function (error) {
            })
    }

    const single_worker = () => {
        axios.get(`/worker/single_worker/${params.id}`, {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })
            .then(function (res) {
                setName(res.data.data.workername);
            })
            .catch(function (error) {
            })
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
                                <h1>Monthly Work Report</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Work Report</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content">
                    <div className="container-fluid">
                        <div className="card card-default">
                            <div className="card-header">
                                <h3 className="card-title">{name}'s Monthly Work Report</h3>
                                <div className="card-tools">
                                    <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                        <i className="fas fa-minus" />
                                    </button>
                                    <button type="button" className="btn btn-tool" data-card-widget="remove">
                                        <i className="fas fa-times" />
                                    </button>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-5">
                                        <div className="form-group">
                                            <label>Select Month</label>
                                            <select className="form-control select2" style={{ width: '100%' }} value={selectedMonth} onChange={(e) => setSelectedMonth(parseInt(e.target.value))}>
                                                <option defaultValue={'Select Month'}>Select month</option>
                                                <option value={1}>January</option>
                                                <option value={2}>February</option>
                                                <option value={3}>March</option>
                                                <option value={4}>April</option>
                                                <option value={5}>May</option>
                                                <option value={6}>June</option>
                                                <option value={7}>July</option>
                                                <option value={8}>August</option>
                                                <option value={9}>September</option>
                                                <option value={10}>October</option>
                                                <option value={11}>November</option>
                                                <option value={12}>December</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="form-group">
                                            <label>Select Year</label>
                                            <select className="form-control select2" style={{ width: '100%' }} value={selectedYear} onChange={(e) => setSelectedYear(parseInt(e.target.value))}>
                                                <option defaultValue={'Select year'}>Select year</option>
                                                <option value={new Date().getFullYear() - 2}>{new Date().getFullYear() - 2}</option>
                                                <option value={new Date().getFullYear() - 1}>{new Date().getFullYear() - 1}</option>
                                                <option value={new Date().getFullYear()}>{new Date().getFullYear()}</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <button className="btn btn-primary" onClick={fetchMonth} style={{ marginTop: "29px" }}>Get Data</button>
                                    </div>
                                </div>
                                {val?.length === 0 ? (
                                    <h4 className="text-center">No Data Found In This Month</h4>
                                ) : (
                                    <table id="example2" className="table table-bordered table-hover text-center">
                                        <thead>
                                            <tr>
                                                <th>Date</th>
                                                <th>Shirt</th>
                                                <th>Pent</th>
                                                <th>Kurta</th>
                                                <th>Total Shirt</th>
                                                <th>Total Pent</th>
                                                <th>Total Kurta</th>
                                                <th>Withdrawal</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                val?.map((item, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>{new Date(item.date).toLocaleDateString('en-GB')}</td>
                                                            <td>{item.shirt}</td>
                                                            <td>{item.pent}</td>
                                                            <td>{item.kurta}</td>
                                                            <td>{item.total_shirt}</td>
                                                            <td>{item.total_pent}</td>
                                                            <td>{item.total_kurta}</td>
                                                            <td>{item.withdrawal}</td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                            <tr>
                                                <th colSpan="4">Total amount</th>
                                                <td colSpan="3">{val.reduce((acc, item) => acc + parseFloat(item.total_shirt) + parseFloat(item.total_pent) + parseFloat(item.total_kurta), 0)}</td>
                                                <td>{val.reduce((acc, item) => acc + parseFloat(item.withdrawal), 0)}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}
