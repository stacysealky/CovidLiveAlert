import React from 'react';
import { Grid } from '@material-ui/core';
import styles from './Footer.module.css';
import logo from '../../assets/corona.gif';

const Footer = () => {
	return (
		<div className={styles.footer}>
			<Grid container spacing={2} justify="center" height="60%">
				{/* <Grid className={styles.box}><img className={styles.image} src={logo} alt="corona-gif"/></Grid> */}

				<Grid className={styles.textbox}><h5>Created by Stacy Sealky Lee</h5>
					<h5>Contact Info: stacy.sealky.lee@gmail.com</h5></Grid>
				<Grid className={styles.textbox}>
					<h3>STAY HEALTHY</h3>

				</Grid>
			</Grid>

		</div>
	)
};

export default Footer;