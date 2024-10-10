import React, { useState } from 'react';
import "./App.css";
import  Logo from "./Images/Website Logo.png";
import {CNavLink,CNavItem,CNavbarNav,CCollapse,CNavbarToggler,CNavbarBrand,CContainer,CNavbar} from '@coreui/react';



const Header = () => {
 
  const [visible, setVisible] = useState(false);
 
  return (
    <div className='container-fluid p-0  '>
     
     <CNavbar className="navbar navbar-expand-lg">
      <CContainer fluid>
        <CNavbarBrand href="/"><img src={Logo} alt="navbarlogo"/></CNavbarBrand>
        <CNavbarToggler onClick={() => setVisible(!visible)} />
        <CCollapse className="navbar-collapse justify-content-end" visible={visible}>
          <CNavbarNav>

            <CNavItem>
              <CNavLink href="/" active><i class="bi bi-house"></i>
                Home
              </CNavLink>
            </CNavItem>

            <CNavItem>
              <CNavLink href="/Search" active>  <i class="bi bi-search"></i>
                Searchpage
              </CNavLink>
            </CNavItem>

          </CNavbarNav>
          
        </CCollapse>
      </CContainer>
    </CNavbar>

     
     
     


    </div>
  )
}

export default Header