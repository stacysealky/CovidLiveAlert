import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';

//functional component 
const Chart = ({data: {confirmed, recovered, deaths}, country}) => {

	const [dailyData, setDailyData] = useState([]);


	//setDailyData takes care of the state setting
	//useeffect accepts callback
	useEffect(( ) => {
		const fetchAPI = async () => {
			//promise
			setDailyData(await fetchDailyData());
		}
		fetchAPI();
	}, [dailyData]);

	const lineChart =  (
		dailyData.length!==0 ? (<Line  
			data={{
				labels: dailyData.map(({ date }) => date),
				datasets: [{
					data: dailyData.map(({ confirmed }) => confirmed),
					label: 'Infected',
					borderColor: '#f3d250',
					fill: true,
				}, {
					data: dailyData.map(({ deaths }) => deaths),
					label: 'Deaths',
					backgroundColor: '#f78888',
					fill: true,

				}], 
			}} 
		/>) : null
		 
	);   

	const barChart = (
		confirmed ? ( 
			<Bar 
				data={{
					labels: ['Infected', 'Recovered', 'Deaths'],
					datasets: [{
						label: 'People',
						backgroundColor: ['#f3d250', '#90ccf4', '#f78888'],
						data: [confirmed.value, recovered.value, deaths.value],
					}],

				}}
				options={{
					legend: {display: false},
					title: {display: true, text:`Current state in ${country}`},
					
				}}

			/> 
		) : null
	);

	return (
		<div className={styles.container}>
			{country? barChart : lineChart}
		</div>
	)
} 

export default Chart;