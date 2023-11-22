import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Modal from 'react-bootstrap/Modal';
import { Alert, Button } from 'react-bootstrap';
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";


function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className='text-center'>
        <h1 style={{ color: 'green' }}><IoCheckmarkDoneCircleSharp /></h1>
        <h5 style={{ color: 'green' }}>Worker Updated Succesfully</h5>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='success' className="m-auto" onClick={props.onHide}>OK</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function EditCustomer() {
  let [val, setval] = useState({
    customername: "",
    mobilenu: ""
  })
  const params = useParams()
  const [modalShow, setModalShow] = useState(false);
  const [error, setError] = useState('')
  const [show, setShow] = useState(false);


  useEffect(() => {
    axios.get(`/customer/single_customer/${params.id}`)
      .then(function (res) {
        setval(res.data.data)
      })
      .catch(function (error) {
      })
  }, [params.id])

  const handleChange = (e) => {
    setval({ ...val, [e.target.name]: e.target.value })
  }

  const handleEdit = (e) => {
    e.preventDefault()

    if (!/^\d{10}$/.test(val.mobilenu)) {
      setError("Mobile Number Is Not Valid !")
    } else {
      setError("Failed To Store Data Please Enter Another Name Or Mobile Number !")
    }

    axios.put(`/customer/update_customer/${params.id}`, {
      customername: val.customername,
      mobilenu: val.mobilenu
    })
      .then(function (response) {
        if (response.data.status === 'success') {
          setModalShow(true)
          setval({
            customername: "",
            mobilenu: ""
          })
        }
      })
      .catch(function (error) {
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
                <h1>Edit Customer</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active">Edit Customer</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-10 m-auto">
                <div className="card card-primary">
                  <div className="card-header">
                    <h3 className="card-title">Quick Edit Customer</h3>
                  </div>

                  <form>
                    <div className="card-body">
                      <Alert show={show} variant='danger' className="d-flex justify-content-between">
                        <p className='mb-0'>
                          {error}
                        </p>
                        <Button onClick={() => setShow(false)} variant="light">
                          OK
                        </Button>
                      </Alert>
                      <div className="form-group">
                        <label htmlFor="exampleInputName1">Name</label>
                        <input type="text" className="form-control" id="exampleInputName1" placeholder="Enter name" name="customername" value={val.customername} onChange={handleChange} />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Mobile Number</label>
                        <input type="number" className="form-control" id="exampleInputMobile" placeholder="Enter mobile number" name="mobilenu" value={val.mobilenu} onChange={handleChange} />
                      </div>
                    </div>
                    <div className="card-footer">
                      <button type="submit" className="btn btn-primary" onClick={handleEdit}>Save</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  )
}
