import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaRupeeSign, FaAngleDoubleLeft } from "react-icons/fa";
import { shopName } from "./LocalItem";

export default function Sidebar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // const dataWidgetAttribute = isMobile ? 'data-widget="pushmenu"' : '';  

  return (
    <div className={`wrapper`}>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <NavLink className="brand-link" activeClassName="active-link">
          <img src="/images/cap.png" className="brand-image img-circle" style={{ opacity: '.8' }} />
          <span className="brand-text font-weight-light text-uppercase"><b>{shopName}</b></span>
          <i data-widget="pushmenu" className={`d-lg-none ml-2 ${isMobile ? '' : 'invisible'}`}>
            <FaAngleDoubleLeft />
          </i>
        </NavLink>
        <div className="sidebar">
          <nav className="mt-3">
            <ul className="nav nav-pills nav-sidebar flex-column">
              <li className="nav-item">
                <NavLink to="/dashboard" className="nav-link" {...(isMobile && { 'data-widget': 'pushmenu' })}>
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>
                    Dashboard
                  </p>
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to="/allworker" className="nav-link" {...(isMobile && { 'data-widget': 'pushmenu' })}>
                  <i className="nav-icon fas fa-th" />
                  <p>
                    Worker
                  </p>
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to="/customer_list" className="nav-link" {...(isMobile && { 'data-widget': 'pushmenu' })}>
                  <i className="nav-icon fas fa-user" />
                  <p>
                    Customer
                  </p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/bill" className="nav-link" {...(isMobile && { 'data-widget': 'pushmenu' })}>
                  <FaRupeeSign className="nav-icon" />
                  <p>
                    Generate Bill
                  </p>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
}
