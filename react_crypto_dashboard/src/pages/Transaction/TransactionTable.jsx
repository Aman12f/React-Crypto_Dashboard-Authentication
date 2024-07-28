import React from 'react'

const TransactionTable = () => {
    const statusColor = {
        pending:"#797E82",
        processing:"#F5A50B",
        cancelled:"#DC2626",
        completed:"#059669"
    }
    const tableData = [
        {
            id:"HD82NA2H",
            date: "2023-06-20",
            time:"10:30 AM",
            type:{
                name:"INR DEPOSIT",
                tag:"E-transfer"
            },
            amount:"+₹81,123.10",
            status:"pending"
        },
        {
            id:"HD82NA2H",
            date: "2023-06-20",
            time:"10:30 AM",
            type:{
                name:"INR DEPOSIT",
                tag:"E-transfer"
            },
            amount:"+₹81,123.10",
            status:"processing"
        },
        {
            id:"HD82NA2H",
            date: "2023-06-20",
            time:"10:30 AM",
            type:{
                name:"INR DEPOSIT",
                tag:"E-transfer"
            },
            amount:"+₹81,123.10",
            status:"cancelled"
        },
        {
            id:"HD82NA2H",
            date: "2023-06-20",
            time:"10:30 AM",
            type:{
                name:"INR DEPOSIT",
                tag:"E-transfer"
            },
            amount:"+₹81,123.10",
            status:"completed"
        },
        {
            id:"HD82NA2H",
            date: "2023-06-20",
            time:"10:30 AM",
            type:{
                name:"INR DEPOSIT",
                tag:"E-transfer"
            },
            amount:"+₹81,123.10",
            status:"completed"
        },
        {
            id:"HD82NA2H",
            date: "2023-06-20",
            time:"10:30 AM",
            type:{
                name:"INR DEPOSIT",
                tag:"E-transfer"
            },
            amount:"+₹81,123.10",
            status:"completed"
        },

    ]
  return (
    <>
     <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col" style={{color:"#797E82"}}>Id</th>
      <th scope="col" style={{color:"#797E82"}}>Date & Time</th>
      <th scope="col" style={{color:"#797E82"}}>Type</th>
      <th scope="col" style={{color:"#797E82"}}>Amount</th>
      <th scope="col" style={{color:"#797E82"}}>Status</th>
    </tr>
  </thead>
  <tbody>
    {
        tableData.map((data,index)=>(
            <tr key={index}>
            {/* <th scope="row" key={index}>1</th> */}
            <td className='tableData'>{data.id}</td>
            <td className='tableData'>
                <div className='d-flex flex-column'><span>{data.date}</span><span><small style={{color:"grey"}}>{data.time}</small></span></div></td>
            <td className='tableData'><div className='d-flex flex-column'><span>{data.type.name}</span><span><small style={{color:"grey"}}>{data.type.tag}</small></span></div></td>
            <td className='tableData'>{data.amount}</td>
            <td className='tableData'><div className='d-flex justify-content-center' style={{backgroundColor:statusColor[data.status],width:"100%",padding:"4px",borderRadius:"20px"}}>{data.status}</div></td>
          </tr>
        ))
    }
    
  </tbody>
</table> 
    </>
  )
}

export default TransactionTable
