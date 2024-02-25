import { PrivateRoute } from './privateRoute/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import Loader from './components/Loader';
import 'react-toastify/dist/ReactToastify.css';
import React, { Suspense } from 'react';
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import Invoice from './components/Invoice';
const AdminDashboard = React.lazy(() => import("./components/AdminDashboard"))
const AllWorker = React.lazy(() => import("./components/AllWorker"))
const WorkerProfile = React.lazy(() => import("./components/WorkerProfile"));
const CustomerList = React.lazy(() => import("./components/CustomerList"));
const Measurement = React.lazy(() => import("./components/Measurement"));
const Login = React.lazy(() => import('./components/Login'));
const Dashboard = React.lazy(() => import('./components/Dashboard'));
const Bill = React.lazy(() => import('./components/Bill'));
const CustomerProfile = React.lazy(() => import('./components/CustomerProfile'));
const NotFound = React.lazy(() => import('./components/NotFound'));

function App() {
  const isAuthenticated = localStorage.getItem("token");
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/"
            element={!isAuthenticated ? <Login /> : <Navigate to={"/dashboard"} replace />}
          />
          <Route path="/admin/dashboard" element={<PrivateRoute> <AdminDashboard /> </PrivateRoute>} />
          <Route path="/dashboard" element={<PrivateRoute> <Dashboard /> </PrivateRoute>} />
          <Route path="/allworker" element={<PrivateRoute> <AllWorker /> </PrivateRoute>} />
          <Route path="/workerprofile/:id" element={<PrivateRoute> <WorkerProfile /> </PrivateRoute>} />
          <Route path="/customer_list" element={<PrivateRoute> <CustomerList /> </PrivateRoute>} />
          <Route path="/add_measurement/:id" element={<PrivateRoute> <Measurement /> </PrivateRoute>} />
          <Route path="/bill" element={<PrivateRoute> <Bill /> </PrivateRoute>} />
          <Route path="/customer_profile/:id" element={<PrivateRoute> <CustomerProfile /> </PrivateRoute>} />
          <Route path='/*' element={<PrivateRoute> <NotFound /> </PrivateRoute>} />
          <Route path='/invoice' element={<PrivateRoute> <Invoice /> </PrivateRoute>} />
        </Routes>
      </Suspense>
      <ToastContainer position='top-right' />
    </div >
  );
}

export default App;
