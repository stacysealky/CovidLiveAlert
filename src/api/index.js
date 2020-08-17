import axios from 'axios';

const url = "https://covid19.mathdro.id/api";

//function to fetch data
//async deals with promises to read and write 
//returning data from api
//modifiedData object returns only the data we need
//if data var and val same name then it will auto find
export const fetchData = async (country) => {
	let changeableURL = url;

	if (country) {
		changeableURL = `${url}/countries/${country}`
	}

	try {
		const { data : { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableURL);
		
		return { confirmed,recovered,deaths,lastUpdate};

	} catch (error) { 
		console.log(error);
	}

}

//second fetch is for the chart
export const fetchDailyData = async () => {
	try {
		const { data } = await axios.get(`${url}/daily`);
		
		const modifiedData = data.map((dailyData) => ({
			confirmed: dailyData.confirmed.total,
			deaths: dailyData.deaths.total,
			date: dailyData.reportDate,
		}))

		return modifiedData;

	} catch (error) { 
		console.log(error);
	}

}

//country picker function
export const fetchCountries = async () => {
	try {
		const {data : {countries}} = await axios.get(`${url}/countries`);

		return countries.map((country) => country.name); 
		
	} catch (error) {
		console.log(error);
	}
}