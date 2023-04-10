/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';
import './globals.css';
import {IBM_Plex_Mono} from 'next/font/google';
import Header from './components/Header';

export const metadata = {
	title: 'Log(a)GYM',
	description: 'A free to use PWA for all of your fitness needs',
};

const IBMMono = IBM_Plex_Mono({
	weight: ['200', '700'],
	subsets: ['latin'],
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={IBMMono.className} >
				<main>
					<Header/>
					{children}
				</main>
			</body>
		</html>
	);
}
