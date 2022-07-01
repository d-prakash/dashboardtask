import './index.css'
import {BsChevronRight} from 'react-icons/bs'
import { FaCaretDown } from "react-icons/fa";
import { CircularProgressbar } from 'react-circular-progressbar';
const ThirdSection = () =>{
    const barChartData = [{name:"Average",percentage:78},{name:"Top",percentage:95},{name:"Me",percentage:59}]
    return(
        <div className='third-section-app-container'>
          <div className='d-lg-none'>
            <div className='top-section-container'>
                <div className='sectioon-container'>
                <h1 className='bottom-heading '>How do I compare my peers?</h1>
                <p className='description'>These numbers represent current goal achievement</p>
               
                        <p className='heading'>Age: Under 30 <FaCaretDown/></p>
                        <hr/>
                        <p className='heading'>Salary: K 20 - K 30 <FaCaretDown/></p>
                        <hr/>
                        <p className='heading'>Gender: Male <FaCaretDown/></p>
                        <hr/>
                </div>
                    <div className='third-section-bar-container'>
                        {barChartData.map(item=>{return(
                        <div className='third-section-circular-bar' >
                            <CircularProgressbar value={item.percentage} text={`${item.percentage}%`} />
                            <p className='text-center'>{item.name}</p>
                        </div>
                        )})}
                    </div>
                </div>
		    </div>
            <div className='third-section-container'>
                <h3 className='top-heading'>Retirement Strategy</h3>
                <p className='top-heading'>Employee Contribution</p>
                <div className='sec-container '>
                    <div className="progressbar ">
                        <div className="" ><span></span></div>  
                    </div>
                    <p className='description'>12%</p>
                </div>
                <p className='top-heading'>Retirement age</p>
                <div className='sec-container'>
                    <div className="progressbarone">
                        <div className="" ><span></span></div>
                    </div>
                    <p className='description '>65</p>
                </div>
                <hr/>
                <div className='contribution'>
                    <div className='contribution-details'>
                        <h5>Employer Contribution</h5>
                        <p className='percentage'>8.4%</p>
                    </div>
                    <div className='contribution-details'>
                        <h5>Interest rate</h5>
                        <p style={{marginLeft:"165px"}} className='percentage'>5%</p>
                    </div>
                    <button style={{width:"100%",textAlign:"center",borderRadius:"15px"}} className='btn btn-primary d-lg-none'>Update</button>
                    <button style={{width:"20px",textAlign:"center",borderRadius:"15px"}} className='btn btn-primary d-none d-lg-block'>Update</button>
                    <p className='text-center text-primary d-none d-lg-block m-3'>View Help Docs<span><BsChevronRight/></span></p>
                </div>
            </div>
            <div className='third-bottom-section d-none'>
                <div className="vertical-line"></div>
                <div>
                    <p>Are Considering a</p>
                    <span className='font-weight-bold'>Housing Advance?</span>
                    <p>Limited time reduced interest.</p>
                    <p>Learn More<span><BsChevronRight/></span></p>
                </div>
            </div>
            <div className='d-lg-block d-none'>
               <div className='third-bottom-section '>
                <div className="vertical-line"></div>
                <div>
                    <p>Are Considering a</p>
                    <span className='font-weight-bold'>Housing Advance?</span>
                    <p>Limited time reduced interest.</p>
                    <p>Learn More<span><BsChevronRight/></span></p>
                </div>
                </div> 
            </div>

        </div>
    )
}

export default ThirdSection


