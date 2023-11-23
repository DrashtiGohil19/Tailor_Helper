import { NavLink } from "react-router-dom";
import { FaRupeeSign } from "react-icons/fa";
import { useState } from "react";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleMenuItemClick = () => {
    // Close the sidebar when a menu item is clicked
    setSidebarOpen(false);
  };
  return (
    <div className="wrapper">
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <NavLink className="brand-link" activeClassName="active-link">
          <img src="/images/cap.png" className="brand-image img-circle" style={{ opacity: '.8' }} />
          <span className="brand-text font-weight-light"><b>SIMPLEX TAILOR</b></span>
          <i data-widget="pushmenu" className="d-lg-none ml-2">
            <FaAngleDoubleLeft />
          </i>
        </NavLink>
        <div className="sidebar">
          <nav className="mt-3">
            <ul className="nav nav-pills nav-sidebar flex-column" >
              <li className="nav-item">
                <NavLink to="/dashboard" className="nav-link">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>
                    Dashboard
                  </p>
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to="/allworker" className="nav-link">
                  <i className="nav-icon fas fa-th" />
                  <p>
                    Worker
                  </p>
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to="/customer_list" className="nav-link">
                  <i className="nav-icon fas fa-user" />
                  <p>
                    Customer
                  </p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/bill" className="nav-link">
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
  )
}
