import './index.css';
import butterfly from '../../assets/images/butterfly.png'
import { BsFillHouseFill,BsSearch,BsCardList,BsFillPersonFill,BsBellFill,BsBoxArrowRight } from 'react-icons/bs';
import { FaAddressCard } from "react-icons/fa";
const Sidebar = () =>{ 
    return(
    <div className="sidebar-app-container ">
        <div className="section-container">
                <div className="top-icons-container">
                    <img src={butterfly} className='butterflyImg' alt="pic"/>
                    <BsSearch/>
                </div>
                <div className="icons-container" >
                    <div className='home-icon'><BsFillHouseFill size={25}/></div>
                    <div className='icon'><BsCardList size={25}/></div>
                    <div className='icon'><FaAddressCard size={25}/></div>
                    <div className='icon'><BsFillPersonFill size={25}/></div>  
                </div>      
        </div>
        <div className="bottom-icons-container">
            <div className='icon'><BsBellFill size={25}/></div>
            <div className='icon'><BsBoxArrowRight size={25}/></div>         
        </div>  
    </div>
    )}
    export default Sidebar