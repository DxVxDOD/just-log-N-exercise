'use client';

import React, {createContext, useState} from 'react';
import {type ThemeToggler} from '@/types/darkMode';
import type Props from '@/types/props';

export const ThemeContext = createContext<ThemeToggler>({
	theme: false,
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	toggleTheme(): void {},
});

const ThemeProvider = ({children}: Props) => {
	const [theme, setTheme] = useState(false);
	const toggleTheme = (): void => {
		setTheme(!theme); 
	};

	return (
		<ThemeContext.Provider value={{theme, toggleTheme}} >
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;