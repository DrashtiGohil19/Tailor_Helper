import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Pagination, Stack } from "@mui/material";
import { MdLibraryAdd } from "react-icons/md";
import { FaHistory, FaRupeeSign } from "react-icons/fa"
import DeleteData from "./DeleteData";
import EditWorker from "./EditWorker";
import AddPerson from "./AddPerson";
import Footer from "./Footer";
import Rate from "./Rate";

export default function CustomerList() {
  const [view, setview] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [totalPages, setTotalPages] = useState();
  const startIndex = (currentPage - 1) * itemsPerPage;
  const [searchQuery, setSearchQuery] = useState('');
  const [ModelOpen, setModelOpen] = useState(false)
  const [deleteModel, setDeleteModel] = useState(false)
  const [selectedId, setSelectedId] = useState(null)
  const [editModel, setEditModel] = useState(false)
  const [rateModel, setRateModel] = useState(false)
  const token = localStorage.getItem("token")

  const showModel = () => {
    setModelOpen(true)
  }
  const closeModal = () => {
    setModelOpen(false)
    viewdata()
  }
  const closeRateModel = () => {
    setRateModel(false)
    viewdata()
  }
  const showDelete = (id) => {
    setDeleteModel(true)
    view.map((item) => {
      if (item._id === id) {
        setSelectedId(id)
      }
    })
    viewdata()
  }
  const showEdit = (id) => {
    setEditModel(true)
    view.map((item) => {
      if (item._id === id) {
        setSelectedId(id)
      }
    })
  }

  const closeDelete = () => {
    setDeleteModel(false)
    viewdata()
  }
  const closeEdit = () => {
    setEditModel(false)
    viewdata()
  }

  const showRateModel = () => {
    setRateModel(true)
  }

  useEffect(() => {
    viewdata();
    searchCustomer();
    document.title = "Simplex Tailor - Customer List"
  }, [currentPage]);
  const viewdata = () => {
    axios.get(`http://localhost:5000/customer/view_customer?page_no=${currentPage}`, {
      headers: {
        'Authorization': localStorage.getItem('token')
      }
    })
      .then(function (res) {
        setview(res.data.data);
        setTotalPages(res.data.totalpage)
      })
  }

  const searchCustomer = (e) => {
    const query = e?.target?.value || "";
    setSearchQuery(query);

    axios.get(`http://localhost:5000/customer/search_customer?page_no=${currentPage}&search=${query}`, {
      headers: {
        'Authorization': localStorage.getItem('token')
      }
    })
      .then(function (res) {
        setview(res.data.data);
      })
  }
  return (
    <div>
      <Sidebar />
      <Topbar />
      <div className='content-wrapper'>
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Customer List</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="mr-3">
                    <button className="btn btn-primary" onClick={showModel}>
                      <MdLibraryAdd /> Add Customer
                    </button>
                  </li>
                  <li className="">
                    <button className="btn btn-primary" onClick={() => showRateModel()}>
                      <FaRupeeSign /> Rate
                    </button>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header d-flex">
                    <h3 className="card-title">View all customer</h3>
                    <div className='d-flex ml-auto'>
                      <span>Search:</span>
                      <input type="text" className='form-control form-control-sm ml-2' name='search' value={searchQuery} onChange={searchCustomer} />
                    </div>
                  </div>
                  <div className="card-body table-responsive">
                    <table className="table table-bordered table-hover text-center responsive">
                      <thead>
                        <tr>
                          <th>Number</th>
                          <th>Name</th>
                          <th>Mobile Number</th>
                          <th>Bill Nu.</th>
                          <th>Measurement</th>
                          <th>History</th>
                          <th colSpan={2}>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          view?.map((value, index) => (
                            <tr key={index}>
                              <td> {startIndex + index + 1}</td>
                              <td style={{ textTransform: 'capitalize' }}>{value.customername}</td>
                              <td>{value.mobilenu}</td>
                              <td>{value.bill_nu}</td>
                              <td><Link to={`/add_measurement/${value._id}`}><MdLibraryAdd style={{ fontSize: "18px" }} /></Link></td>
                              <td><Link to={`/customer_profile/${value._id}`}><FaHistory /></Link></td>
                              <td onClick={() => showEdit(value._id)}><i className='fas fa-edit'></i></td>
                              <td onClick={() => showDelete(value._id)}><i className='fas fa-trash' style={{ color: 'red' }}></i></td>
                            </tr>
                          ))
                        }
                      </tbody>
                    </table>
                    <Stack sx={{ justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
                      <Pagination count={totalPages} color="primary" page={currentPage} onChange={(event, page) => setCurrentPage(page)} />
                    </Stack>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {ModelOpen && <AddPerson showModel={showModel} closeModal={closeModal} isAddingWorker={false} />}
      {deleteModel && <DeleteData showDelete={showDelete} closeDelete={closeDelete} DelWorker={false} selectedId={selectedId} />}
      {editModel && <EditWorker showEdit={showEdit} closeEdit={closeEdit} selectedId={selectedId} WorketEdit={false} />}
      {rateModel && <Rate rateModel={showRateModel} closeModel={closeRateModel} isCustomerRate={true} />}

      {/* <Footer /> */}
    </div>
  )
}
