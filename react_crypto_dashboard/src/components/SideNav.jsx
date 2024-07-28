import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { FaUserCircle, FaBars } from "react-icons/fa";
import "./SideNav.css";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { FiMinusCircle } from "react-icons/fi";
import graph_image from "./images/crypto_dashboard_graph.png";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { PiCurrencyBtcFill } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const SideNav = (props) => {

  const title = props.title
  const { logout } = useAuth();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [displayDashboard, setDisplayDashboard] = useState("space-around");

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
    if (isCollapsed) {
      setDisplayDashboard("space-around");
    } else {
      setDisplayDashboard("space-between");
    }
  };

  return (
    <>
      <div className="parent d-flex" style={{ height: "100%" }}>
        <div className="container-fluid" style={{ height: "100%" }}>
          <div className="row flex-nowrap" style={{ height: "100%" }}>
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
                  style={{ padding: "13px", width: "100%" }}
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

                  <li className="sidebarList">
                    <NavLink to="/dashboard" className="nav-link px-0 align-middle">
                      <i className="fs-4 bi bi-speedometer2"></i>
                      <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                    </NavLink>
                  </li>
                  <li className="sidebarList">
                    <NavLink to="/transactions" className="nav-link px-0 align-middle">
                      <i className="fs-4 bi bi-table"></i>
                      <span className="ms-1 d-none d-sm-inline">Transactions</span>
                    </NavLink>
                  </li>
                  <li className="sidebarList">
                    <NavLink to="/support" className="nav-link px-0 align-middle">
                      <i className="fs-4 bi bi-people"></i>
                      <span className="ms-1 d-none d-sm-inline">Support</span>
                    </NavLink>
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
                <div style={{ fontSize: "28px", fontWeight: "500",alignSelf:"center"}}>{title}</div>
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
                      <a className="dropdown-item" onClick={logout}>
                        Logout
                      </a>
                      <NavLink to="/signin" className="dropdown-item">
                        Login
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNav;
