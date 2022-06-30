import { FaCaretDown } from "react-icons/fa";
import person from '../../assets/images/person.jpeg'
import { BsFillHouseFill,BsSearch,BsCardList,BsFillPersonFill } from 'react-icons/bs';
import { FaAddressCard } from "react-icons/fa";
import './index.css'
const Profile = () =>{
    return(
        <>
        <div className="profile-container d-none d-lg-block">
                <div className="bio-section">
                    <img src={person} className="person-image" alt="person"/>
                    <div className="d-flex flex-column p-2">
                        <h3 className="person-name">Hi Mike,</h3>
                        <p className="description">welcome back</p>
                    </div>
                </div>
                <div className="profile-middle-section">
                    <p className="week-day">Today</p>
                    <h1 className="amount" style={{fontSize:"25px"}}>$19,892</h1>
                    <p className="description">Account Balance</p>
                    <h1 className="amount">$4,000</h1>
                    <p className="description">Year-to-Date Contribution</p>
                    <h1 className="amount">$1,892</h1>
                    <p className="description">Total Interest</p>
                    <button className=" button"> I want to <FaCaretDown/></button>
                </div>
                <div className="profile-bottom-section">
                    <p className="heading">Recent Transaction</p>
                    <div>
                        <p className="description">2020-08-07</p>
                        <p className="heading">Withdrawl Transfer to Bank-XXX11</p>
                        <hr className="horizontal-line "/>
                    </div>
                    <div>
                        <p className="description">2020-08-07</p>
                        <p className="heading">Withdrawl Transfer to Bank-XXX11</p>
                        <hr className="horizontal-line"/>
                    </div>
                    <div>
                        <p className="description">2020-08-07</p>
                        <p className="heading">Withdrawl Transfer to Bank-XXX11</p>
                        <hr className="horizontal-line"/>
                    </div>
                </div>


            </div>
            <div className="profile-mobile-container d-lg-none ">
                <div className="bio-section">
                    <img src={person} className="person-image" alt="person"/>
                    <div className="d-flex flex-column p-2">
                        <h3 className="person-name">Hi Mike,</h3>
                        <p className="description">welcome back</p>
                    </div>
                </div>
                    <div className="balance-details">
                        <p className="week-day">Today</p>
                        <p className="amount" style={{fontSize:"25px"}}>$19,892</p>
                        <p className="description">Account Balance</p>
                        <div className="d-flex">
                            <div className="mr-3">
                                <h1 className="amount">$4,000</h1>
                                <p className="description">Year-to-Date</p>
                            </div>
                            <div>
                                <h1 className="amount">$1,892</h1>
                                <p className="description">Total Interest</p>
                            </div>
                        </div>
                        <button className="mobile-button"> I want to...</button>
                    </div>
                    <div className="withdrawl-section">
                        <p className="heading">Recent Transaction</p>
                        <div>
                            <p className="description">2020-08-07</p>
                            <p className="heading">Withdrawl Transfer to Bank-XXX11</p>
                            <hr className="horizontal-line "/>
                        </div>
                    </div>
                <div className="mobile-icons-container" >
                    <div className='mobile-home-icon'><BsFillHouseFill size={25}/></div>
                    <div className='mobile-icon'><BsCardList size={25}/></div>
                    <div className='mobile-icon'><FaAddressCard size={25}/></div>
                    <div className='mobile-icon'><BsFillPersonFill size={25}/></div>  
                    <div className='mobile-icon'><BsSearch size={25}/></div>
                </div> 
            </div>

    </>

    )
}

export default Profile