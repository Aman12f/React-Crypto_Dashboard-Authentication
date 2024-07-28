import React from 'react'

const Form = () => {
  return (
   <>
   <form className='' style={{padding:"24px"}}>
   <div className="c21" style={{fontSize:"14px"}}><h6>You will receive response within 24 hours of time of submit.</h6></div>
  <div class="row" style={{marginTop:"25px"}}>
    
    <div class="col">
      <span style={{fontWeight:"500"}}>Name</span>
      <input type="text" class="form-control" placeholder="First name"></input>
    </div>
    <div class="col">
      <span style={{fontWeight:"500"}}>Surname</span>
      <input type="text" class="form-control" placeholder="Arthur"></input>
    </div>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1" style={{fontWeight:"500",marginTop:"10px"}}>Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputtext1" style={{fontWeight:"500",marginTop:"10px"}}>Message</label>
    <input type="text" class="form-control" id="exampleInputtext1" aria-describedby="textlHelp" placeholder="Your Message"></input>
  </div>
  <div class="form-check mt-2">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
  <label class="form-check-label" for="flexCheckDefault">
    
    <span>I agree with </span><span style={{color:"#5F00D9"}}> Terms & Conditions</span>
  </label>
</div>
  <div className='d-flex flex-column' style={{marginTop:"20px"}}>
  <button type="button" class="btn mt-2" style={{backgroundColor:"#D8DDE2"}}>Send a Message</button>
  <button type="button" class="btn mt-2" style={{backgroundColor:"#EEEEF4",fontWeight:"500"}} >Book a Meeting</button>
  </div>
</form>
   </>
  )
}

export default Form
