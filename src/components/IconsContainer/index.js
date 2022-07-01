import { BsFillHouseFill,BsSearch,BsCardList,BsFillPersonFill } from 'react-icons/bs';
import { FaAddressCard } from "react-icons/fa";

const IconsContainer = () =>{
    return(
        <div className="mobile-icons-container" >
            <div className='mobile-home-icon'><BsFillHouseFill size={25}/></div>
            <div className='mobile-icon'><BsCardList size={25}/></div>
            <div className='mobile-icon'><FaAddressCard size={25}/></div>
            <div className='mobile-icon'><BsFillPersonFill size={25}/></div> 
            <div className='mobile-icon'><BsSearch size={25}/></div> 
        </div>
    )
}

export default IconsContainer