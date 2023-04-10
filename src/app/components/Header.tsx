import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import CurlSVG from '../../../public/dumbbell-gym-svgrepo-com.svg';
import ThemeButton from './ThemeButton';

const Header = () => (
	<nav className='flex items-center w-full pl-6 pr-7 dark:bg-slate-900 bg-sky-700'>
		<Link className='' href='/' >
			{/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
			<Image src={CurlSVG} alt='Curl Logo' priority />
		</Link>
		<div className='flex w-full justify-evenly'>
			<Link href='/' >Calorie Diary</Link>
			<Link href='/' >Weight Dirary</Link>
			<Link href='/' >Workouts</Link>
			<Link href='/' >Workout Diary</Link>
			<Link href='/' >Profile</Link>
		</div>
		<ThemeButton/>
	</nav>
);

export default Header;
