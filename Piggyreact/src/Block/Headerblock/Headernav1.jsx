import "./Headernav.css";
import logo from "../../images/logo piggy.svg";
import { useState } from "react"; 

const Headernav1 = () => {

  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

  return (
    <div className="headernav1container">
      <img src={logo} alt="Logo" />
      <nav className="nav-menu">
        <div className="nav-item">
          <span
            className="nav-link"
            onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
          >
            Save
          </span>
          <ul
            className={`dropdown ${isFeaturesOpen ? "show" : ""}`} 
          >
            <li><a href="#">PiggyBank</a></li>
            <li><a href="#">Safelock</a></li>
            <li><a href="#">Target Savings</a></li>
            <li><a href="#">Flex Naira</a></li>
            <li><a href="#">Flex Dollar</a></li>
            <li><a href="#">HouseMoney</a></li>
          </ul>
        </div>
        <div className="nav-item">
         
            invest
          
        </div>
        <div className="nav-item">
          <a href="#" className="nav-link">features</a>
        </div>
        <div className="nav-item">
          <a href="#" className="nav-link">FAQs</a>
        </div>
        <div className="nav-item"> 
          <span
            className="nav-link"
            onClick={() => setIsCompanyOpen(!isCompanyOpen)}
          >
          <a href="#" className="nav-link">Resources</a></span>
          <ul
            className={`dropdown ${isCompanyOpen ? "show" : ""}`} 
          >
            <li><a href="#">Blog</a></li>
            <li><a href="#">Comic</a></li>
            <li><a href="#">Newsletter</a></li>
            <li><a href="#">Report</a></li>
            <li><a href="#">Calculator</a></li>
            <li><a href="#">Ebook</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Headernav1;