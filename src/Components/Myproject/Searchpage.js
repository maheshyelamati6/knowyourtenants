import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { CFormInput,CFormTextarea,CButton } from '@coreui/react';
import "./App.css";
import {db,storage} from "./firebaseconfig";
import{get,ref} from 'firebase/database';






const Searchpage = () => {
  const[search,setsearch]=useState('');
  const[searchTenant,setsearchtenant]=useState([]);
  const[name,Setname]=useState("");
  const[place,Setplace]=useState("");
  const[tname,Settname]=useState("");
  const[taddress,Settaddress]=useState("");
  const[ttown,Setttwon]=useState("");
  const[stay,Setstay]=useState("");
  const [image, setImage] = useState();
  const[Message,Setmessage]=useState("");
 

 

 

  const submitdata=(e)=>{
    e.preventDefault();
  
    if(name.length===0)
      {
      alert('Name cannot be Empty!')
     
     }
  
    else if(place.length===0)
     {
      alert('Place cannot be Empty!')
      
     }
  
    else if(tname.length===0)
     {
  alert('Tenant Name cannot be Empty!')
  
     }
  
    else if(taddress.length===0)
     {
  
      alert('Tenant Address cannot be Empty!')
      
     }
     
    else if(ttown.length===0)
     {
  
      alert('Tenant Town cannot be Empty!')
      
     }
  
    else if(stay.length===0)
      {
   
       alert('Tenant Stay cannot be Empty!')
       
      }

     else if (!image) {
        alert("Please upload a file first!")
    }

       else if(Message.length===0)
          {
       
           alert('Message Field cannot be Empty!')
           
          }

  else
  {
    e.preventDefault();
    axios.post("https://know-your-tennant-default-rtdb.firebaseio.com/SearchTenant.json",{name,place,tname,taddress,ttown,stay,image,Message})
    .then(()=>{
      alert("Data Posted Successfully!....");
      Setname("");
      Setplace("");
      Settname("");
      Settaddress("");
      Setttwon("");
      Setstay("");
      Setmessage("");
      
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  }



  useEffect(()=>{
    const usersRef=ref(db,'SearchTenant');
    get(usersRef).then((snapshot)=>{
      if(snapshot.exists()){
        const userArray =Object.entries(snapshot.val()).map(([id,data])=>({
          id,...data,
        }));
       setsearchtenant(userArray);
      }
      else {
        <h4><span className='highlight'>No Data Available</span></h4>
      }
  
    }).catch((err)=>{console.log(err)})
  
   },[])




 
  return (
    <div className='container-fluid p-0'>

<div className='formcard'>

<div className='span'>
<h4>Please Fill the Form</h4>
</div>
</div>


          <div className='card'>
            <h4>*Tenants ----Means Person Who has/had Stayed in your Homes</h4>
        
            </div>  

  
       <div className='container-fluid pt-2 '>
        <div className='row'>


        <div className='col-md-4 inputform mb-1'>
          <div className='spans'>
          <h4>Enter the Person Details Here</h4>
          </div>
           <div className='card  App'>
                <div className='form'>
                <form onSubmit={submitdata} method='post' name="myForm">
               
                <CFormInput type="text"id="floatingInput"  floatingClassName="m-3 " floatingLabel="Please Enter Your Name" placeholder="Please Enter Your Name" value={name} onChange={(e)=>Setname(e.target.value)}  />
                <CFormInput type="text" id="floatingInput" floatingClassName="m-3" floatingLabel=" Please Enter Your Place" placeholder="Please Enter Your Place" value={place} onChange={(e)=>Setplace(e.target.value)} />
                <CFormInput type="text" id="floatingInput" floatingClassName="m-3" floatingLabel=" Please Enter Tenant Name as Per Aadhaar Card" placeholder="Please Enter Tenant Name as Per Aadhaar Card" value={tname} onChange={(e)=>Settname(e.target.value)}  />
                <CFormInput type="text" id="floatingInput" floatingClassName="m-3" floatingLabel=" Please Enter Address where Tenant Lived" placeholder="Please Enter Address where Tenant Lived" value={taddress} onChange={(e)=>Settaddress(e.target.value)}  />
                <CFormInput type="text" id="floatingInput" floatingClassName="m-3" floatingLabel=" Please Enter Town Name where Tenant Lived" placeholder="Please Enter Town Name where Tenant Lived"value={ttown} onChange={(e)=>Setttwon(e.target.value)}   />
                <CFormInput type="text" id="floatingInput" floatingClassName="m-3" floatingLabel=" Please Enter Period of Stay in Months" placeholder="Please Enter Period of Stay" value={stay} onChange={(e)=>Setstay(e.target.value)}  />
              
                <CFormTextarea className='mb-2'
    id="exampleFormControlTextarea1"
    rows={3} value={Message} onChange={(e)=>Setmessage(e.target.value)} placeholder='Enter Message:)' 
  ></CFormTextarea>

<h5>Please Upload Image</h5>
<CFormInput type="url" id="floatingInput" floatingClassName="m-3" floatingLabel=" Please Enter Period of Stay in Months" placeholder="Please Enter Period of Stay" value={image} onChange={(e)=>setImage(e.target.value)}  />
     
<CButton className='m-3' color="warning" type='submit'>Submit Form</CButton>

                </form>
                </div>
           </div>
            </div>
        

       


     
       <div className='centre'>
       <div className='card m-2'>
        <h3>Search Data Here</h3>
        </div>
       </div>
       

       <div className='centre'>
       <div className='container-fluid p-0'>
  <div className='row'>
  <div className='col-md-12  card p-0'>

<input id="floating-input" className='m-2'  onChange={(e)=>setsearch(e.target.value)} placeholder='Search by Aadhaar Card Name'/> 


<div className='card m-4'> 
<div className='table table-responsive '>
            <div className='table '>
              <thead className='table-dark'>
                <tr>
                <th>S.NO</th>
                  <th>Tenant Image</th>
                  <th>Tenant Name</th>
                  <th>Tenant Address</th>
                  <th>Tenant Town</th>
                  <th>Tenant Stay in Months</th>
                  <th>Reviews</th>
                  
                </tr>
              </thead>

               <tbody>
                {
                  searchTenant.filter((item)=>{
                    return search.toLowerCase() === '' ? item:item.tname.toLowerCase().includes(search)

                  })
                  .map((item,index)=>{

                    return <tr key={(index)}>
                     <td>{index + 1}</td>
                    <div className='containerimage my-2' >
                   <a href={item.imgpath} target='blank'>
                   <img src={item.imgpath}  alt='profilepic'/>
                   </a>
                    </div>
                     
                      <td>{item.tname}</td> 
                      <td>{item.taddress}</td>
                      <td>{item.ttown}</td>
                      <td>{item.stay} Months</td>
                      <td>{item.Message}</td>
                     

                    </tr>

                  })
                }
                <tr>
                 
                </tr>
               </tbody>
            </div>
          </div>
 
</div>
</div>
  </div>
</div>
       </div>


        </div>
       </div>
    </div>
  )
}




export default Searchpage