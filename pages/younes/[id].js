export const getStaticPaths = async () => {
	const data = await fetch('https://jsonplaceholder.typicode.com/users');
	const members = await data.json();
	const paths = members.map((member) => {
		return { params: { id: member.id.toString() } };
	});
	return {
		paths,
		fallback: false
	};
};
export const getStaticProps = async (context) => {
	const id = context.params.id;
	console.log(id, 'the id of member ');
	const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
	const data = await res.json();
	console.log(data);
	return {
		props: { member: data }
	};
};

const Details = ({ member }) => {
	const property = [
		{ entry: <h2>Name:</h2>, entryData: <h2>{member.name}</h2> },
		{ entry: 'Email:', entryData: member.email },
		{ entry: 'Website:', entryData: member.website },
		{ entry: 'City:', entryData: member.address.city }
	];
	return property.map((e, i) => (
		<div key={i} className="grid-container">
			<div className="grid-property">
				<p>{e.entry}</p>
			</div>
			<div className="grid-data">
				<p>{e.entryData}</p>
			</div>
		</div>
	));
};

export default Details;
