import styles from '../../styles/younes.module.css';
import React from 'react';
import Link from 'next/link';
export const getStaticProps = async () => {
	const data = await fetch('https://jsonplaceholder.typicode.com/users');
	const members = await data.json();
	return {
		props: { members }
	};
};
function test({ members }) {
	console.log(members);
	return (
		<div>
			<h1>All members</h1>
			<div>
				{members.map((e, i) => (
					<React.Fragment>
						<Link href={'/younes/' + e.id} className={styles.link}>
							<div>
								<h1 className={styles.single}>{e.name}</h1>
							</div>
						</Link>
					</React.Fragment>
				))}
			</div>
		</div>
	);
}

export default test;
