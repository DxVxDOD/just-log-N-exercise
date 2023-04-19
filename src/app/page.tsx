'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, {useContext} from 'react';
import {ThemeContext} from '@/Context/ThemeContext';
import Diary from '../../public/diary-svgrepo-com.png';
import DiaryDark from '../../public/diary-svgrepo-comDark.png';
import Log from '../../public/log-wood-svgrepo-com.png';
import LogDark from '../../public/log-wood-svgrepo-comDark.png';
import Profile from '../../public/profile-round-1342-svgrepo-com.png';
import ProfileDark from '../../public/profile-round-1342-svgrepo-comDark.png';
import Calories from '../../public/calories-svgrepo-com.png';
import CaloriesDark from '../../public/calories-svgrepo-comDark.png';

const HomePage = () => {
	const {theme} = useContext(ThemeContext);
	return (
		<nav className='h-full bg-slate-300 dark:bg-zinc-900'>
			<nav className='flex flex-wrap justify-center gap-6 p-6 lg:gap-10 ' >
				<Link
					className='lg:h-[10em] lg:w-[10em] active:animate-pressDown active:shadow-pressButton dark:active:shadow-pressButtonDark h-[6em] flex items-center justify-center m-3 w-[6em] shadow-glow dark:shadow-glowDark rounded-full'
					href='/workout-log' >
					{theme ? 
						<Image src={Log} alt='Diary Image' width={30} height={30} priority /> :
						<Image src={LogDark} alt='Diary Image' width={30} height={30} priority />}
				</Link>
				<Link 
					className='lg:h-[10em] lg:w-[10em] active:animate-pressDown active:shadow-pressButton dark:active:shadow-pressButtonDark h-[6em] flex items-center justify-center m-3 w-[6em] shadow-glow dark:shadow-glowDark rounded-full'
					href='/calorie-diary' >
					{theme ? 
						<Image src={Calories} alt='Diary Image' width={35} height={35} priority /> :
						<Image src={CaloriesDark} alt='Diary Image' width={35} height={35} priority />}
				</Link>
				<Link
					className='lg:h-[10em] lg:w-[10em] active:animate-pressDown active:shadow-pressButton dark:active:shadow-pressButtonDark h-[6em] flex items-center justify-center m-3 w-[6em] shadow-glow dark:shadow-glowDark rounded-full'
					href='/profile' >
					{theme ? 
						<Image src={Profile} alt='Diary Image' width={25} height={25} priority /> :
						<Image src={ProfileDark} alt='Diary Image' width={25} height={25} priority />}
				</Link>
				<Link
					className='lg:h-[10em] lg:w-[10em] active:animate-pressDown active:shadow-pressButton dark:active:shadow-pressButtonDark h-[6em] flex items-center justify-center m-3 w-[6em] shadow-glow dark:shadow-glowDark rounded-full'
					href='/profile' >
					{theme ? 
						<Image src={Diary} alt='Diary Image' width={30} height={30} priority /> :
						<Image src={DiaryDark} alt='Diary Image' width={30} height={30} priority />}
				</Link>
			</nav>
		</nav>
	);
};

export default HomePage;
