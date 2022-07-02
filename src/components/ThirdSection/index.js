import './index.css'
import {BsChevronRight,BsXLg} from 'react-icons/bs'
import { FaCaretDown } from "react-icons/fa";
import { CircularProgressbar } from 'react-circular-progressbar';
const ThirdSection = () =>{
    const barChartData = [{name:"Average",percentage:78},{name:"Top",percentage:95},{name:"Me",percentage:59}]
    return(
        <div className='third-section-app-container'>
            <div className='top-section-container'>
                <div className='section-container'>
                    <div className='close-button'><BsXLg /></div>
                    <h1 className='bottom-heading '>How do I compare my peers?</h1>
                    <p className='description'>These numbers represent current goal achievement</p>
                            <span className='third-heading'>Age: Under 30 <FaCaretDown/></span>
                            <span><hr/></span>
                            <span className='third-heading'>Salary: K 20 - K 30 <FaCaretDown/></span>
                            <span><hr/></span>
                            <span className='third-heading'>Gender: Male <FaCaretDown/></span>
                            <span><hr/></span>
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
		    
            <div className='third-section-container'>
                <h3 className='top-heading'>Retirement Strategy</h3>
                <p className='top-heading'>Employee Contribution</p>
                <div className='sec-container '>
                    <div className="progressbar ">
                        <div className="" ><span></span></div>  
                    </div>
                    <p className='description-percentage'>12%</p>
                </div>
                <p className='top-heading'>Retirement age</p>
                <div className='sec-container'>
                    <div className="progressbarone">
                        <div className="" ><span></span></div>
                    </div>
                    <p className='description-percentage'>65</p>
                </div>
                <div className='contribution'>
                    <h5>Employer Contribution <span className='percentage'>8.4%</span></h5>
                    <h5>Interest rate <span className='interst-percentage mr-4'>5%</span></h5>
                </div>
                <div>
                <button className='btn btn-primary text-center lg-button d-lg-none'>Update</button>
                    <button style={{width:"200px",textAlign:"center",borderRadius:"10px",marginLeft:"60px",marginTop:"20px"}} className='btn btn-primary d-none d-lg-block'>Update</button>
                </div>
                <p className='text-center text-primary d-none d-lg-block m-3'>View Help Docs<span><BsChevronRight/></span></p>
            </div>
            <div className='d-lg-block ml-4 d-none'>
               <div className='third-bottom-section'>
                <div className="vertical-line"></div>
                <div>
                    <p>Are Considering a</p>
                    <span className='font-weight-bold'>Housing Advance?</span>
                    <p className='text-muted'>Limited time reduced interest.</p>
                    <p className='text-primary'>Learn More<span><BsChevronRight/></span></p>
                </div>
                </div> 
            </div>

        </div>
    )
}

export default ThirdSection


