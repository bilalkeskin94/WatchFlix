import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/Card';

const FreeTv = () => {
	const tvAPI = 'https://api.themoviedb.org/3/tv/airing_today?api_key=';

	const [tv, setTv] = useState([]);

	const fetchData = async () => {
		const { data } = await axios.get(
			`${tvAPI}${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
		);
		setTv(data.results);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="movie--container">
			{tv && tv.map((tv) => <Card key={tv.id} {...tv} />)}
		</div>
	);
};

export default FreeTv;
