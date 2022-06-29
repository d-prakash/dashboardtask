import { FaCaretDown } from "react-icons/fa";
import './index.css'
const Profile = () =>{
    return(
        <div className="column-bg-2 d-flex flex-column">
                <div className="d-flex flex-row">
                    <img src="https://i.pinimg.com/originals/e3/7e/0e/e37e0e25686c2139b281a57a5b4906f2.jpg" className="person-image" />
                    <div className="d-flex flex-column p-2">
                        <h3 className="person-name">Hi Mike,</h3>
                        <p className="description">welcome back</p>
                    </div>
                </div>
                <div className="profile-middle-section">
                    <p className="today">Today</p>
                    <h1 className="amount">$19,892</h1>
                    <p className="description">Account Balance</p>
                    <h1 className="amount">$4,000</h1>
                    <p className="description">Year-to-Date Contribution</p>
                    <h1 className="amount">$1,892</h1>
                    <p className="description">Total Interest</p>
                    <button className="btn btn-info button"> I want to <FaCaretDown/></button>
                </div>
                <div className="profile-bottom-section">
                    <h1 className="today pb-1 pt-2">Recent Transaction</h1>
                    <p className="p12">2020-08-07</p>
                    <h1 className="with">Withdrawl Transfer to Bank-XXX11</h1>
                    <div>
                        <hr />
                    </div>
                    <p className="p12">2020-08-07</p>
                    <h1 className="with">Withdrawl Transfer to Bank-XXX11</h1>
                    <div>
                        <hr />
                    </div>
                    <p className="p12">2020-08-07</p>
                    <h1 className="with">Withdrawl Transfer to Bank-XXX11</h1>
                    <div>
                        <hr />
                    </div>
                </div>


            </div>

    )
}

export default Profile