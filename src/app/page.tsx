import Link from 'next/link';
import React from 'react';

const HomePage = () => (
	<div className='flex flex-col items-center h-full gap-6 p-6 lg:items-start lg:justify-around lg:flex-row bg-slate-300 dark:bg-zinc-900'>
		<Link
			className='w-full shadow-glow dark:shadow-glowDark rounded-xl h-2/5 lg:w-1/3'
			href='/workout-log' >Workout Log</Link>
		<Link 
			className='w-full shadow-glow dark:shadow-glowDark rounded-xl h-2/5 lg:w-1/3'
			href='/calorie-diary' >Calorie Log</Link>
		<Link
			className='w-full shadow-glow dark:shadow-glowDark rounded-xl h-2/5 lg:w-1/3'
			href='/profile' >Profile</Link>
	</div>
);

export default HomePage;
