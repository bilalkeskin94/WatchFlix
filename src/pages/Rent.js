import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/Card';



const Rent = () => {
	const trendingAPI = 'https://api.themoviedb.org/3/movie/top_rated?api_key=';
	const [rent, setRent] = useState([]);

	const fetchData = async () => {
		const { data } = await axios.get(
			`${trendingAPI}${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
		);
		setRent(data.results);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="movie--container">
			{rent && rent.map((rent) =>  <Card key={rent.id} {...rent} /> 	)}
		</div>
	);
};

export default Rent;
