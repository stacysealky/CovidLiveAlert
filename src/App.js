/*
Author: Stacy Sealky Lee
FileName: App.js
Purpose: Covid live alert app with React
Description: Real time data for 250+ countries, using Chart.js, visually presented
 */

import React from 'react';
import {
    Cards,
    Chart,
    CountryPicker,
    Footer,
    Header
} from './components';
import {
    fetchData
} from './api';
//when using index.js file, no need to specify as it will auto locate
// eslint-disable-next-line
import styles from './App.module.css';


//await needs to be wrapped into an async function
//pass data into the Cards component
class App extends React.Component {

    state = {
        data: {},
        country: '',

    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({
            data: fetchedData
        });
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({
            data: fetchedData,
            country: country
        });
    }

    render() {

        const {
            data,
            country
        } = this.state;

        return (
            <div className={styles.container}>
				<Header />
				<CountryPicker handleCountryChange={this.handleCountryChange}/> 
				<Cards data={data}/>
				<Chart data={data} country={country} />
				<Footer />
			</div>
        )
    }
}

export default App;