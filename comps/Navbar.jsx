import React from 'react';
import Link from 'next/link';
import logo from '../public/log.png';
import Image from 'next/image';
function navbar() {
	return (
		<nav>
			<Link href="/" className="logo">
				<Image src={logo} alt="Picture of the author" className="logo" width={100} height={100} />
			</Link>

			<Link href="/">
				<p>Home</p>
			</Link>
			<Link href="/about">
				<p>about company</p>
			</Link>
			<Link href="/younes">
				<p>Contact</p>
			</Link>
		</nav>
	);
}

export default navbar;
