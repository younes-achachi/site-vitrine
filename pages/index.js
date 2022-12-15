import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Navbar from '../comps/Navbar';
import Footer from '../comps/Footer';
import Link from 'next/link';
import React from 'react';
export default function Home() {
	return (
		<React.Fragment>
			<Head>
				<title>Younes list | Home</title>
				<meta name="keyword" content="younes" />
			</Head>
			<div>
				<h1 className={styles.title}>HomePage</h1>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab recusandae impedit facilis maxime minus,
					rerum doloremque porro et omnis fuga est eaque commodi enim amet distinctio earum sit explicabo
					animi.
				</p>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae dicta nulla nam ipsam voluptatum
					possimus neque id incidunt, odio similique nostrum facere fugit maxime tempora magni, hic rerum modi
					vel!
				</p>
				<Link href="/younes" className={styles.btn}>
					<p>See younes Listing</p>
				</Link>
			</div>
		</React.Fragment>
	);
}
