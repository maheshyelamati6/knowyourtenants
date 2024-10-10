import React from 'react';
import './App.css';
import mainimage4 from './Images/mainimage4.jpg';
import upside from './Images/Upside.jpg';
import Tip from './Images/Helpfultip.jpg';
import ID from './Images/Idcollection.jpg';
import { useNavigate } from "react-router-dom";

import {CTabs,CTabList,CTab,CTabContent,CTabPanel,CToast,CToastBody,CToastClose,CAccordion,CAccordionBody,CAccordionHeader,CAccordionItem} from '@coreui/react';

const Mainpage = () => {
  const navigate = useNavigate()

  const gotToNewPage=()=>{
    navigate("/Search");
  }

  return (
    <div className='mainpage p-1'>

            <div className='toaster'>
            <CToast autohide={false} visible={true} color="primary" className="text-white align-items-center">
  <div className="d-flex">
    <CToastBody>Hi All, Welcome to <span className='highlight'> the Website</span></CToastBody>
    <CToastClose className="me-2 m-auto"/>
  </div>
</CToast>
            </div>

     <div className='button my-2'>
      <button onClick={()=>gotToNewPage()} > Click Here for Tenant Search <i class="bi bi-arrow-right-circle-fill"></i> </button>
     </div>

       <div className='center my-2'>
        <div className='card'>
        <h1>Know Your Tenants!!!!</h1>
        </div>
       </div> 
       
          
          <div className='container p-2'>
            <div className='row'>
              <div className='col-md-6 my-1 messagebox'>

              <CTabs activeItemKey={1}>
  <CTabList variant="pills">
    <CTab aria-controls="home-tab-pane" itemKey={1}>Aboutus</CTab>
    <CTab aria-controls="profile-tab-pane" itemKey={2}>Why This Website</CTab>
    <CTab aria-controls="contact-tab-pane" itemKey={3}>Suggestions</CTab>
  </CTabList>
  <CTabContent>
    <CTabPanel className="p-3" aria-labelledby="home-tab-pane" itemKey={1}>
    <CAccordion flush>
  <CAccordionItem itemKey={1}>
    <CAccordionHeader>Who is the Owner of Website</CAccordionHeader>
    <CAccordionBody>
      <strong>Mr.Mahesh Yelamati</strong>
    </CAccordionBody>
  </CAccordionItem>
  <CAccordionItem itemKey={2}>
    <CAccordionHeader>Is the Website Useful? </CAccordionHeader>
    <CAccordionBody>
      <strong>Yes,It Follows all Kind of Privacy Rules and is User Friendly.</strong> 
    </CAccordionBody>
  </CAccordionItem>
  <CAccordionItem itemKey={3}>
    <CAccordionHeader>Does the Owner Sells the Data to Any Third Party Companies?</CAccordionHeader>
    <CAccordionBody>
      <strong>No.It Won't Happen,Because We Don't Collect Any ID Proof's.We Just Store the Information What the House Hold Enters.</strong> 
    </CAccordionBody>
  </CAccordionItem>
</CAccordion>
     
    </CTabPanel>
    <CTabPanel className="p-3" aria-labelledby="profile-tab-pane" itemKey={2}>
     <p><i class="bi bi-arrow-right-short"></i><strong>This Website is Designed for Not to fall on the Trap on Tenant's Words who are Searching for Houses.</strong></p>
     <p><i class="bi bi-arrow-right-short"></i><strong>If User's Provide Gennuine Feedback Regarding the issues Faced by the Tennant's.It will be So Useful for the Next Owners. </strong></p>
    </CTabPanel>
    <CTabPanel className="p-3" aria-labelledby="contact-tab-pane" itemKey={3}>
      <p><i class="bi bi-arrow-right-short"></i><strong>Kindly please provide the Valuable Information.</strong></p>
      <p><i class="bi bi-arrow-right-short"></i><strong>Do not Miss Use the Website by Entering the False Details.</strong></p>
      <p><i class="bi bi-arrow-right-short"></i><strong>A Simple and Useful Website Created for the Gennunie Purpose.</strong></p>
    </CTabPanel>
  
  </CTabContent>
</CTabs>
               
              </div>

<div className='col-md-6 sideimg'>

<img src={Tip}  className='mainimg' alt="helpfulimg"/>
<img src={upside} className='mobileimg' alt="upsidearrow"/>
</div>
              
            </div>
          </div>


        <div className='gap'>

        </div>


        <div className='center'>
        <div className='card'>
        <h3>Some People May Faced This Kind of Situations</h3>
        </div>
        </div>

     <div className='container-fluid firstimg p-2'>
      <div className='row'>

        <div className='col-md-6 sideimg'>
          <img src={mainimage4} alt="mainimg"/>
        </div>


        <div className='Whyrights col-md-5  my-2'>
        <h4>Situations Faced: </h4>
        <p><i class="bi bi-box-arrow-right"></i><strong>Some People Creates Nuisance.</strong></p>
        <p><i class="bi bi-box-arrow-right"></i><strong>Persons Behaviour is Horrible.</strong></p>
        <p><i class="bi bi-box-arrow-right"></i><strong>Some Persons don't pay the Rents.</strong></p>
        <p><i class="bi bi-box-arrow-right"></i><strong>Some Persons Don't Keep the Houses Clean.</strong></p>
        <p><i class="bi bi-box-arrow-right"></i><strong>Creating False Statements Before and After Entering to House.</strong></p>
        </div>
      </div>
     </div>
    

     <div className='center p-3'>
        <div className='card'>
        <h4>Please Collect the Documents Before Joining the Tennants!</h4>
        </div>
       </div>


         <div className='container  '>
          <div className='row'>
            <div className='col-md-6 Whyrights p-3'>
            <h4>Please Collect the Following ID Proofs: </h4>

            <p><i class="bi bi-box-arrow-right"></i><strong>Aadhaar Card.</strong></p>
            <p><i class="bi bi-box-arrow-right"></i><strong>Voter ID.</strong></p>
            <p><i class="bi bi-box-arrow-right"></i><strong>A Fresh Photograph of Tennant.</strong></p>

            </div>
            <div className='col-md-6 sideimg'>
             <img src={ID} alt= "IDcollection"/>
            </div>
          </div>
         </div>
    

    </div>
  )
}

export default Mainpage