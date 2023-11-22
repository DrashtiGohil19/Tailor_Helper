import { Link } from 'react-router-dom'
import axios from 'axios';
import { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { MdLibraryAdd } from 'react-icons/md'
import AddWork from './AddWork';
import EditWorker from './EditWorker';
import DeleteData from './DeleteData';
import { FaRupeeSign } from 'react-icons/fa';
import Rate from './Rate';
import AddPerson from './AddPerson';
import Footer from './Footer';

export default function AllWorker() {
  const [view, setview] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [totalPages, setTotalPages] = useState();
  const startIndex = (currentPage - 1) * itemsPerPage;
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ModalOpen, setModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null)
  const [editModel, setEditModel] = useState(false)
  const [deleteModel, setDeleteModel] = useState(false)
  const [rateModel, setRateModel] = useState(false)

  const showModel = () => {
    setIsModalOpen(true);
  };

  const showModel1 = (id) => {
    setModalOpen(true);
    view.map((item) => {
      if (item._id === id) {
        setSelectedId(id)
      }
    })
  }

  const showEdit = (id) => {
    setEditModel(true)
    view.map((item) => {
      if (item._id === id) {
        setSelectedId(id)
      }
    })
  }

  const showDelete = (id) => {
    setDeleteModel(true)
    view.map((item) => {
      if (item._id === id) {
        setSelectedId(id)
      }
    })
  }

  const closeEdit = () => {
    setEditModel(false)
    viewdata()
  }

  const closeModal = () => {
    setIsModalOpen(false);
    viewdata()
  };

  const closeModal1 = () => {
    setModalOpen(false);
  };

  const closeDelete = () => {
    setDeleteModel(false)
    viewdata()
  }

  useEffect(() => {
    viewdata();
    searchWorker();
    document.title = "Simplex Tailor - Worker List"
  }, [currentPage]);

  const viewdata = () => {
    axios.get(`/worker/viewworker?page_no=${currentPage}`, {
      headers: {
        'Authorization': localStorage.getItem('token')
      }
    })
      .then(function (res) {
        setview(res.data.data);
        setTotalPages(res.data.totalpage);
      })
      .catch(function (error) {
      });
  }


  const searchWorker = (e) => {
    const query = e?.target?.value || "";
    setSearchQuery(query);

    axios.get(`/worker/search_worker?page_no=${currentPage}&search=${query}`)
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
                <h1>Workers</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="mr-3">
                    <button className="btn btn-primary" onClick={showModel}>
                      <MdLibraryAdd /> Add Worker
                    </button>
                  </li>
                  <li>
                    <button className="btn btn-primary" onClick={() => setRateModel(true)}>
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
                    <h3 className="card-title">View all worker</h3>

                    <div className='d-flex ml-auto'>
                      <span>Search:</span>
                      <input type="text" className='form-control form-control-sm ml-2' name='search' value={searchQuery} onChange={searchWorker} />
                    </div>
                  </div>
                  <div className="card-body table-responsive">
                    <table id="example2" className="table table-bordered table-hover text-center responsive">
                      <thead>
                        <tr>
                          <th>Number</th>
                          <th>Name</th>
                          <th>Mobile Number</th>
                          <th colSpan={4}>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          view?.map((value, index) => (
                            <tr key={index}>
                              <td> {startIndex + index + 1}</td>
                              <td style={{ textTransform: 'capitalize' }}>{value.workername}</td>
                              <td>{value.mobilenu}</td>
                              <td onClick={() => showModel1(value._id)}><i className="fas fa-plus-circle"></i></td>
                              <td><Link to={`/workerprofile/${value._id}`} ><i className='fas fa-eye'></i></Link></td>
                              <td onClick={() => showEdit(value._id)}><i className='fas fa-edit'></i></td>
                              <td onClick={() => showDelete(value._id)}><i className='fas fa-trash'></i></td>
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

      {isModalOpen && <AddPerson showModel={showModel} closeModal={closeModal} isAddingWorker={true} />}
      {ModalOpen && <AddWork showModel1={showModel1} closeModal1={closeModal1} selectedId={selectedId} />}
      {editModel && <EditWorker showEdit={showEdit} closeEdit={closeEdit} selectedId={selectedId} WorkerEdit={true} />}
      {deleteModel && <DeleteData showDelete={showDelete} closeDelete={closeDelete} DelWorker={true} selectedId={selectedId} />}
      {rateModel && <Rate rateModel={rateModel} closeModel={() => setRateModel(false)} />}

      <Footer />
    </div>
  )
}
