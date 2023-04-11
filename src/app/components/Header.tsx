import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import CurlSVG from '../../../public/dumbbell-dumbbells-svgrepo-com.svg';
import ThemeButton from './ThemeButton';

const Header = () => (
	<nav 
		className='flex items-center justify-between w-full px-6 py-3 text-lg dark:bg-zinc-950 bg-slate-400'>
		<button className='' >
			{/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
			<Image src={CurlSVG} alt='Curl Logo' priority />
		</button>
		<Link href='/' className='p-2 border-2 logo border-slate-950 dark:border-slate-200' >
			<span>Log(a)GYM</span>
		</Link>
		<ThemeButton/>
	</nav>
);

export default Header;
