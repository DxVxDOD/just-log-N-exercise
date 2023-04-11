'use client';

import React, {useEffect, useState} from 'react';
import '../../styles/calorieDiary.css';

const ProgressCircle = () => {
	const [whatever, setWhatever] = useState();
	const progressEndValue = 70;

	useEffect(() => {
		const progressBar = document.querySelector<HTMLElement>('.progressBar');
		const valueContainer = document.querySelector<HTMLElement>('.valueContainer');
	
		let progressValue = 0;
		const speed = 25;
	
		const progress = setInterval(() => {
			progressValue++;

			if (valueContainer) {
				valueContainer.textContent = `${progressValue}`;
			}

			if (progressBar) {
				progressBar.style.background = `conic-gradient(
					#4d5bf9 ${progressValue * 3.6}deg, 
					#cadcff ${progressValue * 3.6}deg)`;
			}

			if (progressValue === progressEndValue) {
				clearInterval(progress);
			}
		}, speed );
	}, [progressEndValue]);

	return (
		<div>
			<div className='outerCircle' >
				<div className='innerCircle' >
					<div className='progressBar'>
						<div className='valueContainer' >Value</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProgressCircle;