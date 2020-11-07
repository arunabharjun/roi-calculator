import React from 'react';
import Layout from '../components/core/Layout';
import RoiCalculator from '../components/core/roi';

const Home = () => {
	return (
		<Layout>
			<div className='container'>
				<RoiCalculator />
			</div>
		</Layout>
	);
};

export default Home;
