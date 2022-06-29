import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FaCaretDown } from "react-icons/fa";
import { BarChart, Bar, XAxis, YAxis,
	CartesianGrid } from 'recharts';

import './chartindex.css'

const Chart = () => {

	const barChartData = [{name:"Average",percentage:78},{name:"Top",percentage:95},{name:"Me",percentage:59}]
	// Sample data
	const data = [
		{ name: '20', x: 10, y: 10, z: 10 },
		{ name: "",  x: 15, y: 15, z: 15 },
		{ name: '25',  x:20, y: 20, z: 20 },
		{ name: '',  x: 25, y: 25, z: 25 },
		{ name: '30', x: 30, y: 30, z: 30 },
		{ name: '', x: 35, y: 35, z: 35 },
		{ name: '35', x: 40, y: 40, z: 40 },
		{ name: '', x: 45, y: 45, z: 45 },
		{ name: '40', x: 50, y: 50, z: 50 },
		{ name: '', x: 55, y: 55, z: 55 },
		{ name: '60', x: 60, y: 60, z: 60 },
		{ name: '', x: 65, y: 65, z: 65 },
		{ name: '65', x: 70, y: 70, z: 70 },
	];

	return (
		<>
		<div className='d-flex flex-column'>
		<div className='d-flex flex-column'>
			<h6>Retirement Income</h6>
			<h2>Starting Year 2056</h2>
			<div className='d-flex flex-row mr-2'>
				<div>
					<h1>$300,000</h1>
					<p>My Goal</p>
					<hr/>
				</div>
				<div className='d-flex flex-row ml-4'>
					<div>
						<h1>59%</h1>
						<p>Goal Achieved</p>
						<hr/>
					</div>
					<div className='ml-3'>
						<h1>$300</h1>
						<p>Est. Monthly Income</p>
						<hr/>
					</div>
				</div>
			</div>
		</div>
	<BarChart width={500} height={200} data={data} >
            <CartesianGrid />
			<XAxis dataKey="name" />
			<YAxis  />
			<Bar dataKey="x" stackId="a" fill="#8884d8" />
			<Bar dataKey="y" stackId="a" fill="#82ca9d" />
            <Bar dataKey="z" stackId="a" fill="#f14ace" />
		</BarChart>
	
		<div>
			<h1>How do I compare my peers?</h1>
			<p>These numbers represent current goal achievement</p>
			<div className='progressbar-section'>
				<div>
					<p>Age: Under 30 <FaCaretDown/></p>
					<hr/>
					<p>Salary: K 20 - K 30 <FaCaretDown/></p>
					<hr/>
					<p>Gender: Male <FaCaretDown/></p>
					<hr/>
				</div>
				<div className='bar-container'>
					{barChartData.map(item=>{return(
					<div className='circular-bar'>
						<CircularProgressbar  value={item.percentage} text={`${item.percentage}%`} />
						<p>{item.name}</p>
					</div>
					)})}
				</div>
			</div>
		</div>
		</div>
		</>
	);
}

export default Chart;
