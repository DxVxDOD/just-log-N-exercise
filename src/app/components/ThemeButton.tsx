import React, {useEffect, useState} from 'react';
import  '../../styles/header.css';
import Image from 'next/image';
import Sun from '../../../public/sun-svgrepo-com (1).png';
import Moon from '../../../public/moon-svgrepo-com.png';

const ThemeButton = () => {
	const [themeButton, setThemeButton] = useState(Moon);
	const [theme, setTheme] = useState('dark');

	useEffect(() => {
		if (theme === 'dark') {
			window.document.body.classList.add('dark');
			window.document.body.classList.remove('light');
			setThemeButton(Moon);
		} else {
			window.document.body.classList.remove('dark');
			window.document.body.classList.add('light');
			setThemeButton(Sun);
		}
	}, [theme]);

	return (
		 
		<button
			className=' shadow-glow dark:shadow-glowDark themeButton'
			onClick={() => {
				setTheme(theme === 'dark' ? 'light' : 'dark'); 
			}}>
			<Image src={themeButton} alt='Theme Button' width={30} height={30} property='' />
		</button>
	);
};

export default ThemeButton;