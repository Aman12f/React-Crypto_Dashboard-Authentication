import React from "react";
import TransactionTable from "./TransactionTable";
import { LuDownload } from "react-icons/lu";
import SearchBar from "../../components/SearchBar";
import { useEffect } from "react";
import './Transaction.css'

const Transaction = (props) => {
  const tabdata = [
    {
      name: "All",
      count: 349,
      data:"tab1"
    },
    {
      name: "Deposit",
      count: 114,
       data:"tab2"
    },
    {
      name: "Withdraw",
      count: 213,
       data:"tab3"
    },
    {
      name: "Trade",
      count: 22,
      data:"tab4"
    },
  ];
  useEffect(() => {
    props.setTitle("Transactions")
  }, [])
  
  return (
    <>
      <div className="container" style={{borderRadius:"16px",padding:"16px" ,width:"75%",marginTop:"30px"}}>
        <div className="c1 d-flex justify-content-end">
          <button type="button" className="btn btn-primary d-flex">
           <LuDownload style={{marginTop:"4px"}}/> 
           <span className="mx-1" style={{fontSize:"16px",fontWeight:"500"}}>Export CSV</span>
          </button>
        </div>
        <div className="c2 d-flex justify-content-between" style={{marginTop:"16px"}}>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              {
                tabdata.map((data,index)=>(
                  <li className="nav-item" role="presentation" key={index}>
                  <button
                     className={`nav-link ${index === 0 ? 'active' : ''}`}
                    id={`${data.name}-tab`}
                    data-bs-toggle="tab"
                    data-bs-target={`#${data.name}`}
                    type="button"
                    role="tab"
                    aria-controls={`${data.name}`}
                    aria-selected={index === 0 ? 'true' : 'false'}
                    >
                    <span style={{color:"grey",fontWeight:"500",fontSize:"14px"}} className="mx-2" >{data.name}</span>
                    {/* <span>{data.count}</span> */}
                    <span className="badge badge-pill" style={{color:"grey",backgroundColor:"#EEEEF4" ,fontWeight:"500",fontSize:"14px"}}>{data.count}</span>
                  </button>
                </li>
                ))
                
          }
            </ul>
            <div className="searchBar">
              <SearchBar></SearchBar>
            </div>
            </div>

          <div className="tab-content" id="myTabContent" style={{background:"white",padding:"10px"}}>
            {
              tabdata.map((data,index)=>(
                <div
                className={`tab-pane fade ${index===0?'show active':''}`}
                id={data.name}
                role="tabpanel"
                aria-labelledby={`${data.name}-tab`}
                key={index}
                >
                {/* {data.data} */}
                <TransactionTable></TransactionTable>
              </div>
              ))
              }
        </div>
      </div>
    </>
  );
};

export default Transaction;
