import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import CurlSVG from '../../../public/dumbbell-gym-svgrepo-com.svg';
import ThemeButton from './ThemeButton';

const Header = () => (
	<nav 
		className='flex items-center justify-between w-full px-6 py-3 text-lg border-b-4 dark:border-black border-sky-100/75 dark:bg-gray-900 bg-sky-700'>
		<button className='dropdownMenuButton dropdownMenuButtonAnimation' >
			{/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
			<Image src={CurlSVG} alt='Curl Logo' priority />
		</button>
		<Link href='/' className='p-2 border-2 border-slate-950 dark:border-slate-200' >
			Log(a)GYM
		</Link>
		<ThemeButton/>
	</nav>
);

export default Header;
