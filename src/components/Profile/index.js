import { FaCaretDown } from "react-icons/fa";
import person from '../../assets/images/person.jpeg'
import { BsBellFill } from 'react-icons/bs';
import './index.css'
import IconsContainer from "../IconsContainer";
const Profile = () =>{
    return(
          <div className="profile-container">
            <div className='bell-icon'><BsBellFill size={20}/></div>
                <div className="bio-section">
                    <img src={person} className="person-image" alt="person"/>
                    <div className="d-flex flex-column p-2">
                        <h3 className="person-name">Hi Mike,</h3>
                        <p className="description">welcome back</p>
                    </div>
                </div>
                <div className="profile-middle-section trans-section">
                    <p className="week-day">Today</p>
                    <h1 className="amount" style={{fontSize:"25px"}}>$19,892</h1>
                    <p className="description">Account Balance</p>
                    <div className="amount-contribution-details">
                        <div>
                            <h1 className="amount">$4,000</h1>
                            <p className="description d-none d-lg-block">Year-to-Date Contribution</p>
                            <p className="description-md">Year-to-Date </p>
                        </div>
                        <div>
                            <h1 className="amount">$1,892</h1>
                            <p className="description">Total Interest</p>
                        </div>
                    </div>
                    <button className=" button"> I want to <FaCaretDown/></button>
                </div>
                <div className="profile-bottom-section">
                    <p className="heading">Recent Transaction</p>
                    <div>
                        <p className="description">2020-08-07</p>
                        <p className="heading">Withdrawl Transfer to Bank-XXX11</p>
                        <hr className="horizontal-line "/>
                    </div>
                    </div>
                    <div className="transaction-section">
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
                <IconsContainer />
            </div>
    )
}

export default Profile