// import SideNav from '../../components/SideNav'

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { FaUserCircle } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { FiMinusCircle } from "react-icons/fi";
import graph_image from "../../components/images/crypto_dashboard_graph.png";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { PiCurrencyBtcFill } from "react-icons/pi";
import Shapes1 from "../../components/images/Shapes1.svg";
import Shapes2 from "../../components/images/Shapes2.svg";
import './Dashboard.css'
import { useEffect } from "react";
import { fetchExample } from "../../api/query/exampleQuery";
import { useQuery } from "react-query";




const Dashboard = (props) => {
  const timestamp = ["7:15 PM", "7:55 PM", "8:15 PM", "9:15 PM", "10:15 PM"];
  
  const Transactions = [
    {
      id: "1",
      icon: <FaIndianRupeeSign />,
      text: "INR Deposit",
      amount: "+₹81,123.10",
      timestamp: "2022-06-09 7:06 PM",
    },
    {
      id: "2",
      icon: <FaIndianRupeeSign />,
      text: "BTC Sell",
      amount: "-₹12.8787887123",
      timestamp: "2022-06-09 7:06 PM",
    },
    {
      id: "3",
      icon: <PiCurrencyBtcFill />,
      text: "INR Deposit",
      amount: "+₹81,123.10",
      timestamp: "2022-06-09 7:06 PM",
    },
  ];
  useEffect(() => {
    props.setTitle("Dashboard")
  }, [])
  
  
  return (
    <>
      {/* <h1>hii this is dashboard</h1> */}
      <div
        className="c2 d-flex flex-column"
        style={{ width: "80%", alignSelf: "center" }}
      >
        <div
          className="rc1 d-flex justify-content-between bg-white"
          style={{
            borderRadius: "16px",
            marginTop: "16px",
            padding: "15px",
          }}
        >
          <div className="rc11 d-flex flex-column ">
            <span style={{fontWeight:"500",fontSize:"14px",color:"#535D66"}}>
              Total Portfolio Value <span>ⓘ</span>
            </span>
            <span style={{fontWeight:"500",fontSize:"24px"}}>112,312.24</span>
          </div>
          <div className="rc12 d-flex flex-column">
            <span style={{fontWeight:"500",fontSize:"14px",color:"#535D66"}}>Wallet Balances</span>
            <span style={{fontWeight:"500",fontSize:"24px"}}>
              22.390401000{" "}
              <span
                className="badge badge-primary"
                style={{ background: "#EEEEF4", color: "grey" }}
              >
                BTC
              </span>
            </span>
          </div>
          <div className="rc13 d-flex align-self-end">
            <span style={{fontSize:"24px",fontWeight:"500",marginRight:"4px"}}>₹</span>
            <span style={{fontWeight:"500",fontSize:"24px"}}>
              11,300.00{" "}
              <span
                className="badge badge-secondary"
                style={{ background: "#EEEEF4", color: "grey" }}
              >
                INR
              </span>
            </span>
          </div>
          <div className="rc14 d-flex">
            <button
              type="button"
              className="btn m-1 d-flex"
              style={{ backgroundColor: "#5F00D9", color: "white" }}
            >
              <FaArrowDown style={{ marginTop: "4px", marginRight: "3px" }} />
              Deposit
            </button>
            <button
              type="button"
              className="btn m-1 d-flex"
              style={{ backgroundColor: "#5F00D9", color: "white" }}
            >
              <FaArrowUp style={{ marginTop: "4px", marginRight: "3px" }} />{" "}
              Withdraw
            </button>
          </div>
        </div>
        <div
          className="rc2 d-flex justify-content-around"
          style={{
            // padding:"18px"
            marginTop: "16px",
          }}
        >
          <div
            className="rc21 d-flex flex-column bg-white"
            style={{
              width: "50%",
              padding: "15px",
              borderRadius: "16px",
            }}
          >
            <div className="d-flex justify-content-around">
              <div className="rc211 d-flex flex-column">
                <span style={{fontWeight:"500",fontSize:"14px",color:"#535D66"}}>Current Price</span>
                <span style={{fontWeight:"500",fontSize:"24px"}}>
                  ₹ 26,670.25{" "}
                  <span style={{ color: "green" }}>&#x2197;0.04%</span>
                </span>
              </div>
              <div className="rc212 d-flex">
                <button
                  type="button"
                  className="btn d-flex m-1"
                  style={{ backgroundColor: "#5F00D9", color: "white" }}
                >
                  <HiOutlinePlusCircle
                    style={{ marginTop: "4px", marginRight: "3px"}}
                  />
                  Buy
                </button>
                <button
                  type="button"
                  className="btn d-flex m-1"
                  style={{ backgroundColor: "#5F00D9", color: "white" }}
                >
                  <FiMinusCircle
                    style={{ marginTop: "4px", marginRight: "3px" }}
                  />
                  Sell
                </button>
              </div>
            </div>

            <div className="d-flex flex-column">
              <div className="align-self-end " style={{ marginTop: "35px" }}>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#home"
                      type="button"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                      style={{fontSize:"12px",fontWeight:"500"}}
                      
                    >
                      1H
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#profile"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                      style={{fontSize:"12px",fontWeight:"500"}}
                    >
                      1D
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#contact"
                      type="button"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                      style={{fontSize:"12px",fontWeight:"500"}}
                    >
                      1W
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="month-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#month"
                      type="button"
                      role="tab"
                      aria-controls="month"
                      aria-selected="false"
                      style={{fontSize:"12px",fontWeight:"500"}}
                    >
                      1M
                    </button>
                  </li>
                </ul>
              </div>

              <div className="tab-content " id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  {" "}
                  <img src={graph_image} alt="graph image" />
                </div>
                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  ...
                </div>
                <div
                  className="tab-pane fade"
                  id="contact"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  ...
                </div>
                <div
                  className="tab-pane fade"
                  id="month"
                  role="tabpanel"
                  aria-labelledby="-tab"
                >
                  ...
                </div>
              </div>
            </div>
            <div className="rc3 d-flex justify-content-around">
              {timestamp.map((time, index) => (
                <div key={index} id={index} style={{fontSize:"12px",fontWeight:"400",color:"#797E82"}}>
                  {time}
                </div>
              ))}
            </div>
          </div>
          <div
            className="rc22 d-flex"
            style={{ width: "50%", padding: "15px" }}
          >
            <div
              className="card align-self-center "
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "16px",
              }}
            >
              <div className="card-body d-flex flex-column">
                <h6 className="card-title" style={{fontWeight:"500",fontSize:"14px",color:"#535D66"}}>Recent Transactions</h6>
                <div>
                  {Transactions.map((transaction, index) => (
                    <div
                      key={index}
                      id={transaction.id}
                      className="d-flex justify-content-between mt-3"
                    >
                      <div
                        className="d-flex justify-content-around"
                        style={{ width: "50%" }}
                      >
                       <div className="d-flex justify-content-center align-items-center" style={{alignSelf:"center",height:"30px",width:"30px",backgroundColor:"#F3F3F7",borderRadius:"50%"}}> {transaction.icon}</div>
                        <div className="d-flex flex-column" >
                          <div style={{fontSize:"16px",fontWeight:"500"}}>{transaction.text}</div>
                          <div style={{fontSize:"14px",fontWeight:"400",color:"#797E82"}}>{transaction.timestamp}</div>
                        </div>
                      </div>

                      <div className="" style={{fontSize:"16px",fontWeight:"500"}}>{transaction.amount}</div>
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  className="btn mt-3"
                  style={{ backgroundColor: "#EEEEF4",fontSize:"14px",fontWeight:"500" }}
                >
                  View All
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="d-flex justify-content-between"
          style={{ marginTop: "15px", padding: "0px" }}
        >
          <div
            className="rc31 bg-white"
            style={{
              width: "50%",
              padding: "15px",
              borderRadius: "16px",
              backgroundImage: `url(${Shapes1})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <button
              type="button"
              className="btn "
              style={{ backgroundColor: "#5F00D9", color: "white",borderRadius:"100px",fontSize:"12px",fontWeight:"500" }}
            >
              Loans
            </button>
            <div className="mt-3" style={{fontWeight:"500",fontSize:"18px"}}>
              Learn more about Loans – Keep your Bitcoin, access it’s value
              without selling it
            </div>
          </div>
          <div
            className="rc32 position-relative"
            style={{
              width: "48%",
              padding: "15px",
              borderRadius: "16px",
              color: "white",
              backgroundColor: "#5F00D9",
            }}
          >
            <div
              className="background-image"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                borderRadius: "16px",
                backgroundImage: `url(${Shapes2})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                opacity: 0.5,
                zIndex: 0,
              }}
            ></div>
            <div
              style={{
                position: "relative",
                zIndex: 1,
              }}
            >
              <button type="button" className="btn btn-light" style={{fontWeight:"500",fontSize:"12px",borderRadius:"100px"}}>
                Contact
              </button>
              <div className="mt-3" style={{fontWeight:"500",fontSize:"18px",color:"white"}}>
                Learn more about our real estate, mortgage, and corporate
                account services
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
