import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import './SideNav.css'

const DashboardLayout = (props) => {
  return (
    <>
      <div className="parent d-flex" style={{height:"100vh"}}>
        <div className="container-fluid">
          <div className="row flex-nowrap">
            <div
              className={`col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-white ${
                isCollapsed ? "collapse" : ""
              }`}
              id="sidebarMenu"
            >
              <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a
                  href="/"
                  className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
                >
                  <span className="fs-5 d-none d-sm-inline">Menu</span>
                </a>
                <ul
                  className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start sidebar-menu"
                  id="menu"
                >
                  {!isCollapsed && (
                    <div className="d-flex">
                      <button
                        className="btn btn-primary mb-3"
                        type="button"
                        onClick={handleToggle}
                        style={{
                          color: "black",
                          background: "white",
                          border: "2px solid black",
                        }}
                      >
                        <FaBars />
                      </button>
                    </div>
                  )}

                  <li className="nav-item" style={{ color: "black" }}>
                    <a href="#" className="nav-link align-middle px-0">
                      <i className="fs-4 bi bi-house"></i>
                      <span className="ms-1 d-none d-sm-inline">Home</span>
                    </a>
                  </li>
                  <li>
                    <Link
                      to="/Dashboard"
                      data-bs-toggle="collapse"
                      className="nav-link px-0 align-middle"
                    >
                      <i className="fs-4 bi bi-speedometer2"></i>
                      <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                    </Link>
                    <ul
                      className="collapse show nav flex-column ms-1"
                      id="submenu1"
                      data-bs-parent="#menu"
                    >
                      <li className="w-100">
                        <a href="#" className="nav-link px-0">
                          <span className="d-none d-sm-inline">Item</span> 1
                        </a>
                      </li>
                      <li>
                        <a href="#" className="nav-link px-0">
                          <span className="d-none d-sm-inline">Item</span> 2
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link
                      to="/transactions"
                      className="nav-link px-0 align-middle"
                    >
                      <i className="fs-4 bi bi-table"></i>
                      <span className="ms-1 d-none d-sm-inline">
                        Transactions
                      </span>
                    </Link>
                  </li>
                  <li>
                    <NavLink
                      href="#submenu2"
                      data-bs-toggle="collapse"
                      className="nav-link px-0 align-middle"
                      to="/support"
                    >
                      <i className="fs-4 bi bi-bootstrap"></i>
                      <span className="ms-1 d-none d-sm-inline">Bootstrap</span>
                    </NavLink>
                    <ul
                      className="collapse nav flex-column ms-1"
                      id="submenu2"
                      data-bs-parent="#menu"
                    >
                      <li className="w-100">
                        <a href="#" className="nav-link px-0">
                          <span className="d-none d-sm-inline">Item</span> 1
                        </a>
                      </li>
                      <li>
                        <a href="#" className="nav-link px-0">
                          <span className="d-none d-sm-inline">Item</span> 2
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href="#submenu3"
                      data-bs-toggle="collapse"
                      className="nav-link px-0 align-middle"
                    >
                      <i className="fs-4 bi bi-grid"></i>
                      <span className="ms-1 d-none d-sm-inline">Products</span>
                    </a>
                    <ul
                      className="collapse nav flex-column ms-1"
                      id="submenu3"
                      data-bs-parent="#menu"
                    >
                      <li className="w-100">
                        <a href="#" className="nav-link px-0">
                          <span className="d-none d-sm-inline">Product</span> 1
                        </a>
                      </li>
                      <li>
                        <a href="#" className="nav-link px-0">
                          <span className="d-none d-sm-inline">Product</span> 2
                        </a>
                      </li>
                      <li>
                        <a href="#" className="nav-link px-0">
                          <span className="d-none d-sm-inline">Product</span> 3
                        </a>
                      </li>
                      <li>
                        <a href="#" className="nav-link px-0">
                          <span className="d-none d-sm-inline">Product</span> 4
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#" className="nav-link px-0 align-middle">
                      <i className="fs-4 bi bi-people"></i>
                      <span className="ms-1 d-none d-sm-inline">Customers</span>
                    </a>
                  </li>
                </ul>
                <hr />
                <div className="dropdown pb-4">
                  <a
                    href="#"
                    className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                    id="dropdownUser1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src="https://github.com/mdo.png"
                      alt="hugenerd"
                      width="30"
                      height="30"
                      className="rounded-circle"
                    />
                    <span className="d-none d-sm-inline mx-1">loser</span>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                    <li>
                      <a className="dropdown-item" href="#">
                        New project...
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Settings
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Profile
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className={`right col d-flex flex-column ${
                isCollapsed ? "" : "col-md-9 col-xl-10"
              }`}
              style={{ backgroundColor: "#EEEEF4", padding: "0px" }}
            >
              <div
                className="c1 d-flex bg-white"
                style={{
                  // padding: "2px",
                  // height: "52px",
                  justifyContent: displayDashboard,
                }}
              >
                {isCollapsed && (
                  <div className="d-flex">
                    <button
                      className="btn btn-primary mb-3"
                      type="button"
                      onClick={handleToggle}
                      style={{
                        color: "black",
                        background: "white",
                        border: "2px solid black",
                      }}
                    >
                      <FaBars />
                    </button>
                  </div>
                )}
                <div style={{ fontSize: "28px"}}>Dashboard</div>
                <div className="">
                  <div className="dropdown">
                    <button
                      className="btn dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      style={{ height: "58px" }}
                    >
                      <FaUserCircle style={{ fontSize: "30px" }} />
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a className="dropdown-item" href="#">
                        Logout
                      </a>
                      <a className="dropdown-item" href="#">
                        Login
                      </a>
                      {/* <a className="dropdown-item" href="#">
                        Mark as Draft
                      </a>
                      <a className="dropdown-item" href="#">
                        Delete
                      </a>
                      <a className="dropdown-item" href="#">
                        Attend a Workshop
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardLayout
