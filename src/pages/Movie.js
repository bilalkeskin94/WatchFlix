import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';



const Movie = () => {
	const trendingAPI = 'https://api.themoviedb.org/3/trending/all/day?api_key=';

	const [movies, setMovies] = useState([]);

	const fetchData = async () => {
		const { data } = await axios.get(
			`${trendingAPI}${process.env.REACT_APP_API_KEY}`
		);
		setMovies(data.results);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="movie--container">
			{movies && movies.map((movie) =>  <MovieCard key={movie.id} {...movie} /> 	)}
		</div>
	);
};

export default Movie;
