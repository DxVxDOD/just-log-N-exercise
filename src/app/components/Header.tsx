'use client';

import Link from 'next/link';
import React from 'react';
import ThemeButton from './ThemeButton';
import Navbar from './Navbar';

const Header = () => (
	<nav className='flex items-center justify-between w-full px-6 py-3 text-lg dark:bg-zinc-900 bg-slate-300'>
		<Navbar/>
		<Link href='/' className='p-2 active:animate-pressDown dark:shadow-glowDark active:shadow-pressButton dark:active:shadow-pressButtonDark border-[0.05em] rounded-lg shadow-glow dark:border-slate-950 border-slate-200' >
			Log(a)GYM
		</Link>
		<ThemeButton/>
	</nav>
);

export default Header;
