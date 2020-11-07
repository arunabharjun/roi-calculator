import React, { useState, createContext } from 'react';

export const RoiContext = createContext();

export const RoiProvider = ({ children }) => {
	/**
     * States for RoI
     */

	const [
		values,
		setValues
	] = useState({
		cSuiteLeaders: '',
		lv1Leaders: '',
		knowledgeWorkers: '',
		email: '',
		error: false
	});

	return (
		<RoiContext.Provider
			value={[
				values,
				setValues
			]}
		>
			{children}
		</RoiContext.Provider>
	);
};
