import React, {useEffect} from 'react';
import '../styles/calorieDiary.css';

const ProgressCircle = () => {
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
					#10b981 ${progressValue * 3.6}deg, 
					#ef4444 ${progressValue * 3.6}deg)`;
			}

			if (progressValue === progressEndValue) {
				clearInterval(progress);
			}
		}, speed );
	}, [progressEndValue]);

	return (
		<div>
			<div className='outerCircle shadow-glow dark:shadow-glowDark' >
				<div className='shadow-progressBar progressBar dark:shadow-progressBarDark dark:before:bg-zinc-900'>
					<div className='valueContainer'>
						{progressEndValue}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProgressCircle;