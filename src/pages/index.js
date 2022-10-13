import React from 'react';
import { Main } from './style'
import bg_dashboard from '../assets/images/bg_dashboard.png'

const HomePage = () => (
	<Main>
		<h2>Welcome to Demo App</h2>
		<img src={bg_dashboard} alt='bg' />
	</Main>
);

export default HomePage;
