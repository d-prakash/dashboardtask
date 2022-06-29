import './index.css';
import { BsFillHouseFill,BsSearch,BsCardList,BsFillPersonFill,BsBellFill,BsBoxArrowRight } from 'react-icons/bs';
import { FaAddressCard } from "react-icons/fa";
const Sidebar = () =>{ 
    return(
    <div className="app-container">
        <div className="section-container">
         
                <div className="icons-container">
                    <img src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3382026.jpg" className='butterflyImg' alt="pic"/>
                    <BsSearch/>
                </div>
                <div className="icons-container">
                    <div><BsFillHouseFill className='home'/></div>
                    <div><BsCardList/></div>
                    <div><FaAddressCard/></div>
                    <div><BsFillPersonFill/></div>  
                </div>
                
        </div>
        <div className="icons-container">
            <div><BsBellFill/></div>
            <div><BsBoxArrowRight/></div>
                     
        </div>
            
        
    </div>)}
    export default Sidebar