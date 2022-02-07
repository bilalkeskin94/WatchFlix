import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/Card';



const Streaming = () => {
	const trendingAPI = 'https://api.themoviedb.org/3/movie/popular?api_key=';
	const [cinema, setCinema] = useState([]);

	const fetchData = async () => {
		const { data } = await axios.get(
			`${trendingAPI}${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
		);
		setCinema(data.results);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="movie--container">
			{cinema && cinema.map((cinema) =>  <Card key={cinema.id} {...cinema} /> 	)}
		</div>
	);
};

export default Streaming;
