import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/Card';



const Streaming = () => {
	const trendingAPI = 'https://api.themoviedb.org/3/trending/all/day?api_key=';

	const [streaming, setStreaming] = useState([]);

	const fetchData = async () => {
		const { data } = await axios.get(
			`${trendingAPI}${process.env.REACT_APP_API_KEY}`
		);
		setStreaming(data.results);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="movie--container">
			{streaming && streaming.map((stream) =>  <Card key={stream.id} {...stream} /> 	)}
		</div>
	);
};

export default Streaming;
