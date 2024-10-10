import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../Myproject/App.css';
import logo from './Images/Welcome.jpg';
import { CToast,CToastBody,CToastClose,CFormInput,CButton } from '@coreui/react';

const Welcomepage = () => {

 const[username,Setusername]=useState("");
 const[password,Setpassword]=useState("");
 const navigate=useNavigate("");

  const logincheck=(e)=>{
    e.preventDefault();
    Setusername("");
    Setpassword("");
  

  if(username==="director" && password==="director1319")
    {
         navigate("/Adminsearchpage")
  }
  else{

    alert("Wrong UserName and Password!!!")
  }
};

  return (
    <div className='container-fluid p-0'>


<div className='toaster'>
            <CToast autohide={false} visible={true} color="primary" className="text-white align-items-center">
  <div className="d-flex">
    <CToastBody>Welcome to Admin Page!</CToastBody>
    <CToastClose className="me-2 m-auto"/>
  </div>
</CToast>
            </div>
        

<div className='container'>
  <div className='row'>
    <div className='col-md-3 loginform'>
      <form onSubmit={logincheck}>

        <h4>Enter Credentials</h4>
      <CFormInput type="text" id="floatingInput" floatingClassName="mb-3" floatingLabel="Please Enter Username" placeholder="Please Enter Username" value={username} onChange={(e)=>Setusername(e.target.value)} />
      <CFormInput type="password" id="floatingInput" floatingClassName="mb-3" floatingLabel=" Please Enter Password" placeholder="Please Enter Password" value={password} onChange={(e)=>Setpassword(e.target.value)} />
      <CButton color="dark" variant="outline" type='Submit'>Submit</CButton>

      </form>
    </div>


<div className='col-md-8 mainimg'>

<img src={logo} alt="img"/>

</div>

  </div>
</div>

    </div>
  )
}

export default Welcomepage
