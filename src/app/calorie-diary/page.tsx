import React from 'react';
import '../../styles/calorieDiary.css';
import ProgressCircle from '../components/ProgressCircle';

const CalorieDiary = () => (
	<div className='flex h-full p-5 bg-slate-300 dark:bg-zinc-900' >
		<div className='w-full p-4 flex items-center bg-slate-300 border-[0.05em] dark:border-rich_gray dark:bg-zinc-950 border-gray-200 dark:shadow-calorieCardDark rounded-2xl shadow-calorieCard h-1/4'>
			<ProgressCircle/>
		</div>
	</div>
);

export default CalorieDiary;