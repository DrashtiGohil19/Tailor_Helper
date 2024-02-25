import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Pagination, Stack } from "@mui/material";
import { MdLibraryAdd } from "react-icons/md";
import { FaHistory, FaRupeeSign } from "react-icons/fa"
import DeleteData from "./DeleteData";
import EditWorker from "./EditWorker";
import AddPerson from "./AddPerson";
import Rate from "./Rate";
import { Col } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { userId } from "./LocalItem";
import Footer from "./Footer";

export default function CustomerList() {
  const [view, setview] = useState([]);
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
  const navigate = useNavigate()
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
    const storedUserId = localStorage.getItem("userId");
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (storedUserId === null || isLoggedIn === null) {
      localStorage.clear();
      navigate("../", { replace: true });
      navigate(0)
    } else {
      if (searchQuery === "") {
        viewdata();
      }
      checkIsLoggedIn()
      document.title = "Simplex Tailor - Customer List"
    }
  }, [currentPage, searchQuery, navigate]);

  const checkIsLoggedIn = () => {
    axios.get("/userdata?id=" + userId)
      .then((response) => {
        let isLoggedIn = response.data.user.isLoggedIn
        if (!isLoggedIn) {
          localStorage.clear()
          navigate("../", { replace: true })
          navigate(0)
        }
      })
  }

  const viewdata = () => {
    axios.get(`/customer/view_customer?page_no=${currentPage}&userId=${userId}`, {
      headers: {
        'Authorization': localStorage.getItem('token')
      }
    })
      .then(function (res) {
        setview(res.data.data);
        setTotalPages(res.data.totalpage)
      })
  }

  const searchCustomer = (event) => {
    if (event === "mobileNumber" || event === "billNumber") {
      const params = {
        [event]: searchQuery,
        userId: userId
      }

      axios({
        method: "GET",
        url: "/customer/search_customer",
        params: params,
        headers: {
          Authorization: localStorage.getItem('token')
        }
      })
        .then(function (res) {
          setview(res.data.data);
        })
    }
  }
  return (
    <div>
      <Sidebar />
      <Topbar />
      <div className='content-wrapper' style={{ minHeight: '100vh' }}>
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
                  <div className="card-header">
                    <div className='row'>
                      <Col xs={6} sm={4}>
                        <input type="number" className='form-control' placeholder="Search..." name='search' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                      </Col>
                      <Col xs={6} sm={3}>
                        <DropdownButton title="Search With" onSelect={searchCustomer}>
                          <Dropdown.Item eventKey={"mobileNumber"}>Mobile Number</Dropdown.Item>
                          <Dropdown.Item eventKey={"billNumber"}>Bill Number</Dropdown.Item>
                        </DropdownButton>
                      </Col>
                    </div>
                  </div>
                  <div className="card-body table-responsive">
                    <table className="table table-bordered table-hover text-center responsive">
                      <thead>
                        <tr>
                          {/* <th>Number</th> */}
                          <th>Bill Nu.</th>
                          <th>Name</th>
                          <th>Mobile Number</th>
                          <th>Measurement</th>
                          <th>History</th>
                          <th colSpan={2}>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          view?.map((value, index) => (
                            <tr key={index}>
                              {/* <td> {startIndex + index + 1}</td> */}
                              <td>{value.bill_nu}</td>
                              <td style={{ textTransform: 'capitalize' }}>{value.customername}</td>
                              <td>{value.mobilenu}</td>
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

      <Footer />
    </div>
  )
}
