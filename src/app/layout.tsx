import React from 'react';
import './globals.css';
import {Kanit} from 'next/font/google';
import Header from './components/Header';
import ThemeProvider from '@/Context/ThemeContext';

export const metadata = {
	title: 'Log(a)GYM',
	description: 'A free to use PWA for all of your fitness needs',
};

const KanitFont = Kanit({
	weight: ['200', '300', '700'],
	subsets: ['latin'],
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' className={KanitFont.className}>
			<body className='dark' >
				<ThemeProvider>
					<main className='box-border h-screen p-0 m-0 overflow-hidden text-slate-950 dark:text-slate-200' >
						<Header/>
						{children}
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
}