import React, { useContext } from 'react';
import {
	calcInvestment,
	calcReturnBenifit
} from '../../../helpers/roiCalculator';
import { RoiContext } from '../../providers/RoiContext';
import { GridIcon } from '../../../assets/Icons';

const Results = ({ view = false }) => {
	const [
		values,
		setValues
	] = useContext(RoiContext);

	const { cSuiteLeaders, lv1Leaders, knowledgeWorkers } = values;

	const getReturn = () => {
		return calcReturnBenifit(cSuiteLeaders, lv1Leaders, knowledgeWorkers);
	};

	const getInvestment = () => {
		return calcInvestment(cSuiteLeaders, lv1Leaders, knowledgeWorkers);
	};

	const getRoi = () => {
		const rtn = getReturn();

		const inv = getInvestment();

		if (inv !== 0) {
			return rtn / inv;
		}
		return 0;
	};

	return (
		<React.Fragment>
			<div className={view ? 'active' : 'inactive'}>
				<div className='results-container'>
					<p className='result-head'>
						{' '}
						<GridIcon size={16} /> Result
					</p>
					<div className='row1'>
						<div className='item'>
							<div className='card'>
								<div className='card-body'>
									<span className='sub-head'>
										Return (Benifit)
									</span>
								</div>
								<hr />
								<div className='card-body'>
									<p>{view ? getReturn() : '0'}</p>
								</div>
							</div>
						</div>
						<div className='item'>
							<div className='card'>
								<div className='card-body'>
									<span className='sub-head'>
										Investment (Cost)
									</span>
								</div>
								<hr />
								<div className='card-body'>
									<p>{view ? getInvestment() : '0'}</p>
								</div>
							</div>
						</div>
					</div>
					<div className='row2'>
						<div className='item'>
							<div className='card'>
								<div className='card-body'>
									<span className='main-head'>
										Return of Investment
									</span>
								</div>
								<hr />
								<div className='card-body'>
									<p>{view ? getRoi() : '0'}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Results;
