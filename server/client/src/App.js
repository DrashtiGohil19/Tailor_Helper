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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFound from './components/NotFound';
import React from 'react';
import { PrivateRoute } from './privateRoute/PrivateRoute';

function App() {
  const isAuthenticated = localStorage.getItem("token");
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={!isAuthenticated ? <Login /> : <Navigate to="/dashboard" replace />}
        />
        <Route path="/dashboard" element={<PrivateRoute> <Dashboard /> </PrivateRoute>} />
        <Route path="/allworker" element={<PrivateRoute> <AllWorker /> </PrivateRoute>} />
        <Route path="/workerprofile/:id" element={<PrivateRoute> <WorkerProfile /> </PrivateRoute>} />
        <Route path="/customer_list" element={<PrivateRoute> <CustomerList /> </PrivateRoute>} />
        <Route path="/add_measurement/:id" element={<PrivateRoute> <Measurement /> </PrivateRoute>} />
        <Route path="/bill" element={<PrivateRoute> <Bill /> </PrivateRoute>} />
        <Route path="/customer_profile/:id" element={<PrivateRoute> <CustomerProfile /> </PrivateRoute>} />
        <Route path='/*' element={<PrivateRoute> <NotFound /> </PrivateRoute>} />
      </Routes>
      <ToastContainer position='top-right' />
    </div>
  );
}

export default App;
