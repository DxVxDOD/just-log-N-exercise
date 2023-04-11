'use client';

import React from 'react';
import SunSvg from '../../../public/sun-svgrepo-com (3).svg';
import MoonSvg from '../../../public/moon-svgrepo-com.svg';
import Image from 'next/image';
import useThemeToggle from '@/hooks/useThemeToggle';
import  '../../styles/header.css';

const ThemeButton = () => {
	const [themeButton, setThemeButton] = useThemeToggle();

	return (
		 
		<button
			className='themeButton'
			onClick={() => setThemeButton(themeButton === 'light' ? 'dark' : 'light')} >
			{themeButton === 'light'
			/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */
				? <Image src={SunSvg} alt='Theme Logo' priority />
			/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */
				: <Image src={MoonSvg} alt='Theme Logo' priority />}
		</button>
	);
};

export default ThemeButton;