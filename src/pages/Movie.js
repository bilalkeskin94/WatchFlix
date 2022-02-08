import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/Card';

const Movie = () => {
	const trendingAPI = 'https://api.themoviedb.org/3/movie/now_playing?api_key=';

	const [movie, setMovie] = useState([]);

	const fetchData = async () => {
		const { data } = await axios.get(
			`${trendingAPI}${process.env.REACT_APP_API_KEY}&language=en-US`
		);
        console.log(data);
		setMovie(data.results);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="movie--container">
			{movie &&
				movie.map((stream) => <Card key={stream.id} {...stream} />)}
		</div>
	);
};

export default Movie;
