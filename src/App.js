import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@coreui/coreui/dist/css/coreui.min.css'
import './Components/Myproject/Header';


import Header from './Components/Myproject/Header';

import Footer from "./Components/Myproject/Footer";
import Routings from './Components/Myproject/Routings';




function App() {
  return (
   
 <div className='App'>

    <Header/>
   <Routings/>
    <Footer/>



   
   
</div>
  
   

    
    
  
  
  );
}

export default App;
