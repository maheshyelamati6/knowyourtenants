import {React,useState,useEffect} from 'react';

import '../Myproject/App.css'
import {  CToast,CToastBody,CToastClose } from '@coreui/react';
import{ref,get} from "firebase/database";
import { db } from '../Myproject/firebaseconfig';
import{deleteDoc, doc} from 'firebase/firestore';

const Adminsearchpage = () => {

  const[SearchTenant,setsearchTenant]=useState([]);
  const[search,setsearch]=useState("");

 

  useEffect(()=>{
    const usersRef=ref(db,'SearchTenant');
    get(usersRef).then((snapshot)=>{

      if(snapshot.exists()){

        const userArray=Object.entries(snapshot.val()).map(([id,data])=>({
          id,...data,
        }));

        setsearchTenant(userArray);
      }
    })
  })

 

 

  const handleDelete = async(item)=> {
   
    await deleteDoc(doc,"SearchTenant",item.id);

  };
  

   
  
 


  return (
    <div className='container-fluid p-0'>

<div className='toaster'>
            <CToast autohide={false} visible={true} color="primary" className="text-white align-items-center">
  <div className="d-flex">
    <CToastBody>Admin Search Page!</CToastBody>
    <CToastClose className="me-2 m-auto"/>
  </div>
</CToast>
            </div>


            <div className='container-fluid'> 
              <div className='row'>
               
                <div className='col-md-11 '>
                  <h1> Table Data</h1>
                 <div className='card'>

                 <input id="floating-input" className='m-2'  onChange={(e)=>setsearch(e.target.value)} placeholder='Search by Aadhaar Card Tenant Name'/> 

                 <div className='table table-responsive'>
                  <div className='table'>
                  <thead className='table-dark'>
                      <tr>
                        <th>Tenant Image</th>
                        <th>Tenant Name</th>
                        <th>Tenant Address</th>
                        <th>Tenant Town</th>
                        <th>Tenant Stay</th>
                        <th> Message</th>
                        <th>Uploaded Person Name</th>
                        <th>Uploaded Person place</th>
                        
                        <th>Remarks</th>
                        
                        
                      </tr>
                    </thead>
                    <tbody className='p-3'>
                    {
                      SearchTenant.filter((item)=>{
                        return search.toLowerCase()=== '' ? item:item.tname.toLowerCase().includes(search) 
                               
                      }) 
                      .map((item)=>{

                        return  <tr key={(item.id)}>

                            <div className='containerimage m-2'>
                              <a href={item.imgpath} target="blank">
                              <img src={item.imgpath} alt="profilepic"/>
                              </a>
                            </div>

                            <td>{item.tname}</td>
                            <td>{item.taddress}</td>
                            <td>{item.ttown}</td>
                            <td>{item.stay} Months</td>
                            <td>{item.Message}</td>
                            <td>{item.name}</td>
                            <td>{item.place}</td>
                            
                            <td><button className='btn btn-outline-primary btn-sm'>Update</button></td>
                            <td><button className='btn btn-danger btn-sm' onClick={()=>{handleDelete(item.id)}}>Delete</button></td>
                        </tr>
                        
                      })
                    }
                    </tbody>
                  </div>
                  </div>
                   
                 </div>
                

                 </div>


              </div>
            </div>






    </div>
  )
}

export default Adminsearchpage