'use client';

import React from 'react';
import SunSvg from '../../../public/sun-svgrepo-com (2).svg';
import MoonSvg from '../../../public/space-svgrepo-com.svg';
import Image from 'next/image';
import useThemeToggle from '@/hooks/useThemeToggle';

const ThemeButton = () => {
	const [themeButton, setThemeButton] = useThemeToggle();

	return (
		// eslint-disable-next-line @typescript-eslint/no-unsafe-return
		<button onClick={() => setThemeButton(themeButton === 'light' ? 'dark' : 'light')} >
			{themeButton === 'light'
			/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */
				? <Image src={SunSvg} alt='Theme Logo' />
			/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */
				: <Image src={MoonSvg} alt='Theme Logo' />}
		</button>
	);
};

export default ThemeButton;