'use client';

import React from 'react';
import '../../styles/calorieDiary.css';
import ProgressCircle from '../components/ProgressCircle';

const CalorieDiary = () => (
	<div className='flex flex-col items-center h-full p-5 bg-slate-300 dark:bg-zinc-900' >
		<div className='lg:w-1/3 w-full p-4 flex justify-around items-center bg-slate-300 border-[0.05em] dark:border-rich_gray dark:bg-zinc-900 border-gray-200 dark:shadow-glowDark rounded-2xl shadow-glow h-1/4'>
			<ProgressCircle/>
			<div className='flex font-normal flex-col items-center py-2 px-3 shadow-glow dark:shadow-glowDark rounded-xl border-[0.05em] dark:border-rich_gray border-gray-200' >
				<span>Total</span>
				<span>100</span>
				<span>Eaten</span>
				<span>100</span>
				<span>Remaining</span>
				<span>100</span>
			</div>
		</div>
	</div>
);

export default CalorieDiary;