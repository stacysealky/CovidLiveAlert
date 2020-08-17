import React from 'react';
// import { Typography, Grid } from '@material-ui/core';
import styles from './Header.module.css';
//import img1 from '../../assets/rona.gif';
import img2 from '../../assets/rona2.gif';

const Header = () => {
	return (
		<div>
			<div className={styles.header}>
				<div className={styles.cover}>
					<h1 className={styles.text}>COVID-19 LIVE UPDATES</h1>
					<p className={styles.text}>Find out the latest information about coronavirus</p>
				</div>
			</div>
			<div className={styles.bottom}>
				<img className={styles.img}src={img2} alt="corona"/>
				<h4 className={styles.text}>Select your country or see worldwide data</h4>
			</div>
		
		</div>
	)
};

export default Header;