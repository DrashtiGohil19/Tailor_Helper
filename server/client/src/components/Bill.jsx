import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import axios from "axios";
import { toast } from "react-toastify";
import { Col } from "react-bootstrap";
import Invoice from "./Invoice";
import { userId } from "./LocalItem";
import Footer from "./Footer";

function Bill() {

  const [val, setVal] = useState({})
  const [mobilenu, setMobilenu] = useState('')

  const [value, setValue] = useState({
    customername: "",
    bill_nu: "",
    shirt_qty: 0,
    pent_qty: 0,
    kurta_qty: 0,
    paid_amt: 0,
    booking_date: "",
    delivery_date: ""
  })
  const [shirtAmount, setShirtAmount] = useState(0);
  const [pentAmount, setPentAmount] = useState(0);
  const [kurtaAmount, setKurtaAmount] = useState(0);
  const [customer_id, setCustomer_id] = useState()
  const [validationErrors, setValidationErrors] = useState({});
  const [responseID, setResponseID] = useState()
  const [diableBTN, setDiabledBTN] = useState(true)
  const [print, setPrint] = useState(false)
  const token = localStorage.getItem("token")

  const getRate = () => {
    axios.get(`/customer/ratecustomer?userId=${userId}`)
      .then(function (response) {
        setVal(response.data.result)
      })
      .catch(function (error) {
      })
  }

  const get_customerData = async () => {
    await axios.get(`/bill/bill_data`, {
      params: {
        mobilenu: mobilenu,
        userId: userId
      },
      headers: {
        "Authorization": token
      }
    })
      .then(function (response) {
        if (response.data.data !== null) {
          setValue(response.data.data)
          setCustomer_id(response.data.data._id)
        }
      })
      .catch(function (error) {
      })
  }

  const totalAmount = shirtAmount + pentAmount + kurtaAmount;
  const finalAmount = value.paid_amt ? totalAmount - value.paid_amt : totalAmount;

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (mobilenu.trim() === '') {
      errors.mobilenu = 'Mobile number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(mobilenu)) {
      errors.mobilenu = 'Mobile number should be a 10-digit number';
      isValid = false;
    } else if (mobilenu.trim() !== '') {
      errors.mobilenu = ''
    }
    if (!value.booking_date) {
      errors.booking_date = 'Booking date is required';
      isValid = false;
    }
    if (new Date(value.delivery_date) <= new Date(value.booking_date)) {
      errors.delivery_date = 'Delivery date must be after booking date';
      isValid = false;
    } else if (!value.delivery_date) {
      errors.delivery_date = "Delivery date is required";
      isValid = false;
    }
    if (value.shirt_qty === 0 && value.pent_qty === 0 && value.kurta_qty === 0) {
      errors.qty = "At least one quantity is required";
      isValid = false;
    }

    setValidationErrors(errors);
    return isValid;
  };

  const add_bill = (e) => {
    e.preventDefault()
    const items = {}

    if (value.shirt_qty > 0) {
      items.shirt = {
        shirt_qty: value.shirt_qty,
        shirt_amt: shirtAmount,
      };
    }

    if (value.pent_qty > 0) {
      items.pent = {
        pent_qty: value.pent_qty,
        pent_amt: pentAmount,
      };
    }

    if (value.kurta_qty > 0) {
      items.kurta = {
        kurta_qty: value.kurta_qty,
        kurta_amt: kurtaAmount,
      };
    }
    if (validateForm()) {
      axios.post("/bill/add_bill", {
        customer_id: customer_id,
        bill_date: value.bill_date,
        booking_date: value.booking_date,
        delivery_date: value.delivery_date,
        total_amt: totalAmount,
        paid_amt: value.paid_amt || 0,
        final_amt: finalAmount,
        ...items
      }, {
        headers: {
          Authorization: token
        }
      })
        .then(function (response) {
          setResponseID(response.data.data.customer_id)
          setDiabledBTN(false)
          if (response.data.status === "success") {
            toast.success("Saved Succesfully !", {
              autoClose: 4000,
              style: {
                backgroundColor: 'black',
                color: 'white',
              },
            });
          }
        })
        .catch(function (error) {
          toast.error("Failed to save !", {
            autoClose: 4000,
            style: {
              backgroundColor: 'black',
              color: 'white',
            },
          });
        })
    }
  }
  useEffect(() => {
    getRate()
  }, [])
  useEffect(() => {
    get_customerData()
    document.title = "Simplex Tailor - Bill Page"
  }, [mobilenu, customer_id])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue(prevValue => ({ ...prevValue, [name]: value }));

    if (name === "shirt_qty") {
      setShirtAmount(parseInt(value) * val.shirt_rate);
    } else if (name === "pent_qty") {
      setPentAmount(parseInt(value) * val.pent_rate);
    } else if (name === "kurta_qty") {
      setKurtaAmount(parseInt(value) * val.kurta_rate);
    }
  };

  return (
    <div>
      <Sidebar />
      <Topbar />
      <div className='content-wrapper' style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Generate Bill</h1>
              </div>
            </div>
          </div>
        </section>

        <section className="content measurement">
          <div className="container-fluid pb-2">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <Col sm={4} xs={6} md={4}>
                        <div className="form-group">
                          <label>Name</label>
                          <input type="text" className="form-control" readOnly value={value.customername} onChange={handleChange} />
                        </div>
                      </Col>
                      <Col sm={4} xs={6} md={4}>
                        <div className="form-group">
                          <label>Mobile Number</label>
                          <input type="number" className={`form-control ${validationErrors.mobilenu ? 'is-invalid' : ''}`}
                            placeholder="Enter ..." name="mobilenu" value={mobilenu} onChange={(e) => setMobilenu(e.target.value)} />
                          {validationErrors.mobilenu && (
                            <p className="invalid-feedback">{validationErrors.mobilenu}</p>
                          )}
                        </div>
                      </Col>

                      <Col sm={4} xs={6} md={4}>
                        <div className="form-group">
                          <label>Bill No</label>
                          <input type="number" className="form-control" readOnly value={value.bill_nu} onChange={handleChange} />
                        </div>
                      </Col>
                      <Col sm={4} xs={6} md={4}>
                        <div className="form-group">
                          <label>Booking Date</label>
                          <input type="date" className={`form-control ${validationErrors.booking_date ? 'is-invalid' : ''}`}
                            placeholder="Enter ..." name="booking_date" value={value.booking_date} onChange={handleChange} />
                          {validationErrors.booking_date && (
                            <p className="invalid-feedback">{validationErrors.booking_date}</p>
                          )}
                        </div>
                      </Col>

                      <Col sm={4} xs={6} md={4}>
                        <div className="form-group">
                          <label>Delivery Date</label>
                          <input type="date" className={`form-control ${validationErrors.delivery_date ? 'is-invalid' : ''}`}
                            placeholder="Enter ..." name="delivery_date" value={value.delivery_date} onChange={handleChange} />
                          {validationErrors.delivery_date && (
                            <div className="invalid-feedback">{validationErrors.delivery_date}</div>
                          )}
                        </div>
                      </Col>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="card card-primary">
                  <div className="card-header">
                    <h3 className="card-title">Bill Details</h3>
                  </div>

                  <div className="card-body table-responsive">
                    <table id="example2" className="table table-bordered table-hover text-center responsive">
                      <thead>
                        <tr>
                          <th>No.</th>
                          <th className="w-50">Item Name</th>
                          <th className="w-25">Quantity</th>
                          <th>Rate</th>
                          <th>Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Shirt</td>
                          <td>
                            <div className="d-flex justify-content-center">
                              <input type="number" className="w-50 form-control form-control-sm text-center" name="shirt_qty" value={value.shirt_qty} onChange={handleChange} />
                            </div>
                          </td>
                          <td>{val?.shirt_rate}</td>
                          <td>{shirtAmount || 0}</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Pent</td>
                          <td>
                            <div className="d-flex justify-content-center">
                              <input type="number" className="form-control w-50 form-control-sm text-center" name="pent_qty" value={value.pent_qty} onChange={handleChange} />
                            </div>
                          </td>
                          <td>{val?.pent_rate}</td>
                          <td>{pentAmount || 0}</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Kurta</td>
                          <td>
                            <div className="d-flex justify-content-center">
                              <input type="number" className="w-50 form-control form-control-sm text-center" name="kurta_qty" value={value.kurta_qty} onChange={handleChange} />
                            </div>
                          </td>
                          <td>{val?.kurta_rate}</td>
                          <td>{kurtaAmount || 0}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <div className="row">
                  <Col sm={4} xs={4} md={2}>
                    <div className="form-group">
                      <label>Total Amount</label>
                      <input type="number" className="form-control" value={totalAmount === 0 ? 0 : totalAmount} />
                    </div>
                  </Col>
                  <Col sm={4} xs={4} md={2}>
                    <div className="form-group">
                      <label>Paid Amount</label>
                      <input type="number" className="form-control" name="paid_amt" value={value.paid_amt} onChange={handleChange} />
                    </div>
                  </Col>
                  <Col sm={4} xs={4} md={2}>
                    <div className="form-group">
                      <label>Final Amount</label>
                      <input type="number" className="form-control" value={finalAmount || 0} />
                    </div>
                  </Col>
                </div>
              </div>
            </div>
            <div className="m-2">
              <button className="btn btn-primary mr-3" type="submit" onClick={add_bill}>Save</button>
              <button className="btn btn-primary" disabled={diableBTN} onClick={() => setPrint(true)}>Get Print</button>
            </div>
          </div>
        </section>
      </div>
      <div className="d-none">
        <Invoice customer_id={responseID} print={print} />
      </div>
      <Footer />
    </div>
  )
}

export default Bill
