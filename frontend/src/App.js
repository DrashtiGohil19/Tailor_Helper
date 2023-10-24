import './App.css'
import { Routes, Route } from "react-router-dom";
import AllWorker from "./components/AllWorker";
import WorkerProfile from "./components/WorkerProfile";
import CustomerList from "./components/CustomerList";
import Measurement from "./components/Measurement";
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import RateWorker from './components/RateWorker';
import ViewMeasurment from './components/ViewMeasurment';
import RateCustomer from './components/RateCustomer';
import Bill from './components/Bill';
import BillPage from './components/BillPage';
import Update_Map from './components/Update_Map';
import CustomerProfile from './components/CustomerProfile';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Print_measurement from './components/Print_measurement';
import NotFound from './components/NotFound';


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/rateworker" element={<RateWorker />} />
        <Route path="/allworker" element={<AllWorker />} />
        <Route path="/workerprofile/:id" element={<WorkerProfile />} />
        <Route path="/customer_list" element={<CustomerList />} />
        <Route path="/add_measurement/:id" element={<Measurement />} />
        <Route path="/view_measurement/:id" element={<ViewMeasurment />} />
        <Route path="/view_measurement" element={<ViewMeasurment />} />
        <Route path='/update_map/:id' element={<Update_Map />} />
        <Route path="/rate_customer" element={<RateCustomer />} />
        <Route path="/bill" element={<Bill />} />
        <Route path="/customer_profile/:id" element={<CustomerProfile />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <ToastContainer position='top-right' />
    </div>
  );
}

export default App;
