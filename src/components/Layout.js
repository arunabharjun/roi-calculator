import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import NavBar from './NavBar';
import Footer from './core/Footer';

const Layout = ({ children }) => {
	/**
     * States for theme
     */
	const [
		darkMode,
		setDarkMode
	] = useContext(ThemeContext);

	return (
		<React.Fragment>
			<main className={`${darkMode ? 'darkMode' : 'liteMode'}`}>
				<NavBar />
				{children}
				<Footer />
			</main>
		</React.Fragment>
	);
};

export default Layout;
