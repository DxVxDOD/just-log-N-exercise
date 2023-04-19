import React, {useContext, useEffect} from 'react';
import Image from 'next/image';
import Sun from '../../../public/sun-svgrepo-com (1).png';
import Moon from '../../../public/moon-svgrepo-com.png';
import {ThemeContext} from '@/Context/ThemeContext';

const ThemeButton = () => {
	const {theme, toggleTheme} = useContext(ThemeContext);


	useEffect(() => {
		if (theme) {
			window.document.body.classList.remove('dark');
			window.document.body.classList.add('light');
		} else {
			window.document.body.classList.add('dark');
			window.document.body.classList.remove('light');
		}
	}, [theme]);

	return (
		 
		<button
			className=' shadow-glow active:animate-pressDown dark:shadow-glowDark active:shadow-pressButton dark:active:shadow-pressButtonDark rounded-full p-[0.5em]'
			onClick={() => {
				toggleTheme(); 
			}}>
			
			{theme ?
				<Image src={Sun} alt='Theme Button' width={30} height={30} priority /> :
				 <Image src={Moon} alt='Theme Button' width={30} height={30} priority />}
		</button>
	);
};

export default ThemeButton;