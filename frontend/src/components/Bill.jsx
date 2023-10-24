import React, { useEffect, useRef, useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import axios from "axios";
import { toast } from "react-toastify";
import BillPage from "./BillPage";
import ReactToPrint from "react-to-print";
import Footer from "./Footer";

function Bill() {

  const [val, setVal] = useState({})
  const [mobilenu, setMobilenu] = useState('')

  const [value, setValue] = useState({
    customername: "",
    bill_nu: "",
    bill_date: "",
    shirt_qty: 0,
    pent_qty: 0,
    kurta_qty: 0,
    paid_amt: "",
    booking_date: "",
    delivery_date: ""
  })
  const [shirtAmount, setShirtAmount] = useState(0);
  const [pentAmount, setPentAmount] = useState(0);
  const [kurtaAmount, setKurtaAmount] = useState(0);
  const [customer_id, setCustomer_id] = useState()
  const ref = useRef(null);

  const getRate = () => {
    axios.get("http://localhost:5000/customer/view_rate")
      .then(function (response) {
        setVal(response.data.data)
      })
      .catch(function (error) {
      })
  }

  const get_customerData = async () => {
    await axios.get(`http://localhost:5000/bill/bill_data?mobilenu=${mobilenu}`)
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

  const customerData = {
    customername: value.customername,
    mobilenu: mobilenu,
    bill_nu: value.bill_nu,
    bill_date: value.bill_date,
  }
  const shirtData = {
    shirt_qty: parseInt(value.shirt_qty) || 0,
    shirt_amt: shirtAmount || 0,
    shirt_rate: val.shirt_rate,
  }
  const pentData = {
    pent_qty: parseInt(value.pent_qty) || 0,
    pent_amt: pentAmount || 0,
    pent_rate: val.pent_rate,
  }
  const kurtaData = {
    kurta_qty: parseInt(value.kurta_qty) || 0,
    kurta_amt: kurtaAmount || 0,
    kurta_rate: val.kurta_rate,
  }
  const data = {
    total_amt: totalAmount,
    paid_amt: value.paid_amt || 0,
    final_amt: finalAmount
  }
  const add_bill = () => {
    axios.post("http://localhost:5000/bill/add_bill", {
      customer_id: customer_id,
      bill_date: value.bill_date,
      booking_date: value.booking_date,
      delivery_date: value.delivery_date,
      shirt_qty: value.shirt_qty || 0,
      pent_qty: value.pent_qty || 0,
      kurta_qty: value.kurta_qty || 0,
      shirt_amt: shirtAmount || 0,
      pent_amt: pentAmount || 0,
      kurta_amt: kurtaAmount || 0,
      total_amt: totalAmount,
      paid_amt: value.paid_amt || 0,
      final_amt: finalAmount
    })
      .then(function (response) {
        console.log(response.data.data);
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
      })
  }

  useEffect(() => {
    getRate()
    get_customerData()
    document.title = "Simplex Tailor - Bill Page"
  }, [mobilenu])

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
      <div className='content-wrapper'>
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Generate Bill</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active">Generate Bill</li>
                </ol>
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
                      <div className="col-sm-4">
                        <div className="form-group">
                          <label>Name</label>
                          <input type="text" className="form-control" readOnly value={value.customername} onChange={handleChange} />
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="form-group">
                          <label>Mobile Number</label>
                          <input type="number" className="form-control" placeholder="Enter ..." name="mobilenu" value={mobilenu} onChange={(e) => setMobilenu(e.target.value)} />
                        </div>
                      </div>

                      <div className="col-sm-4">
                        <div className="form-group">
                          <label>Bill No</label>
                          <input type="number" className="form-control" readOnly value={value.bill_nu} onChange={handleChange} />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="form-group">
                          <label>Booking Date</label>
                          <input type="date" className="form-control" placeholder="Enter ..." name="booking_date" value={value.booking_date} onChange={handleChange} />
                        </div>
                      </div>

                      <div className="col-sm-4">
                        <div className="form-group">
                          <label>Delivery Date</label>
                          <input type="date" className="form-control" placeholder="Enter ..." name="delivery_date" value={value.delivery_date} onChange={handleChange} />
                        </div>
                      </div>

                      <div className="col-sm-4">
                        <div className="form-group">
                          <label>Bill Date</label>
                          <input type="date" className="form-control" placeholder="Enter ..." name="bill_date" value={value.bill_date} onChange={handleChange} />
                        </div>
                      </div>
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
                              <input type="text" className="w-25 form-control form-control-sm text-center" name="shirt_qty" value={value.shirt_qty} onChange={handleChange} />
                            </div>
                          </td>
                          <td>{val.shirt_rate}</td>
                          <td>{shirtAmount || 0}</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Pent</td>
                          <td>
                            <div className="d-flex justify-content-center">
                              <input type="text" className="w-25 form-control form-control-sm text-center" name="pent_qty" value={value.pent_qty} onChange={handleChange} />
                            </div>
                          </td>
                          <td>{val.pent_rate}</td>
                          <td>{pentAmount || 0}</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Kurta</td>
                          <td>
                            <div className="d-flex justify-content-center">
                              <input type="text" className="w-25 form-control form-control-sm text-center" name="kurta_qty" value={value.kurta_qty} onChange={handleChange} />
                            </div>
                          </td>
                          <td>{val.kurta_rate}</td>
                          <td>{kurtaAmount || 0}</td>
                        </tr>
                        <tr>
                          <th colSpan={4}>Total Amount</th>
                          <td>
                            {totalAmount || 0}
                          </td>
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
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label>Total Amount</label>
                      <input type="text" className="form-control" value={totalAmount || 0} />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label>Paid Amount</label>
                      <input type="number" className="form-control" name="paid_amt" value={value.paid_amt || 0} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label>Final Amount</label>
                      <input type="text" className="form-control" value={finalAmount || 0} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="m-2">
              <button className="btn btn-primary mr-3" onClick={add_bill}>Save</button>
              <ReactToPrint
                trigger={() => <button className="btn btn-primary">Get Print</button>}
                content={() => ref.current}
              />
            </div>
          </div>
        </section>
      </div >
      <div style={{ display: 'none' }}>
        <div ref={ref}>
          <BillPage data={data} shirtData={shirtData} pentData={pentData} kurtaData={kurtaData} customerData={customerData} />
        </div>
      </div>
      <Footer className='bottom-fixed' />
    </div >
  )
}

export default Bill
