import {useEffect} from 'react';
import useLocalStorage from './useLocalStorage';

export default function useThemeToggle() {
	const [theme, setTheme] = useLocalStorage('theme', 'dark');
	useEffect(() =>{
		const className = 'dark';
		const bodyClasses = window.document.body.classList;

		if (theme === 'dark') {
			bodyClasses.add(className);
		} else {
			bodyClasses.remove(className);
		}

	}, [theme]);

	return [theme, setTheme];
}