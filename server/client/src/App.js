import './App.css'
import { Routes, Route, Navigate } from "react-router-dom";
import AllWorker from "./components/AllWorker";
import WorkerProfile from "./components/WorkerProfile";
import CustomerList from "./components/CustomerList";
import Measurement from "./components/Measurement";
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Bill from './components/Bill';
import CustomerProfile from './components/CustomerProfile';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFound from './components/NotFound';
import React from 'react';

function App() {
  const isUserLoggedIn = localStorage.getItem("token");

  if (!isUserLoggedIn) {
    Navigate('/');
  }
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        {
          isUserLoggedIn ?
            <Route path="/dashboard" element={<Dashboard />} />
            :
            <Route path="/" element={<Login />} />
        }
        <Route path="/allworker" element={<AllWorker />} />
        <Route path="/workerprofile/:id" element={<WorkerProfile />} />
        <Route path="/customer_list" element={<CustomerList />} />
        <Route path="/add_measurement/:id" element={<Measurement />} />
        <Route path="/bill" element={<Bill />} />
        <Route path="/customer_profile/:id" element={<CustomerProfile />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <ToastContainer position='top-right' />
    </div>
  );
}

export default App;
