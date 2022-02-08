import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const IMG_API = 'https://image.tmdb.org/t/p/w500';

function CircularProgressWithLabel(props) {
	return (
		<Box
			sx={{
				position: 'relative',
				top: '-20px',
				left: '10px',
				display: 'inline-flex',
			}}
		>
			<CircularProgress variant="determinate" {...props} />
			<Box
				sx={{
					top: 0,
					left: 0,
					bottom: 0,
					right: 0,
					position: 'absolute',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Typography
					variant="caption"
					component="div"
					color="#fff"
					fontWeight="bold"
				>
					{`${Math.round(props.value)}%`}
				</Typography>
			</Box>
		</Box>
	);
}

CircularProgressWithLabel.propTypes = {
	value: PropTypes.number.isRequired,
};

const MovieCard = ({
	title,
	poster_path,
	vote_average,
	release_date,
	name,
	first_air_date,
}) => {
	const setVoteColor = (vote) => {
		if (vote >= 7) {
			return '#00c853';
		} else if (vote >= 4) {
			return '#ffd600';
		} else {
			return '#d50000';
		}
	};

	return (
		<div className="movie">
			<img src={IMG_API + poster_path} alt={title || name} />
			<CircularProgressWithLabel
				sx={{ color: `${setVoteColor(vote_average)}` }}
				className="movie--vote__average"
				value={vote_average * 10}
			/>

			<h6 className="movie--title">
				{title ? `${title}` : name ? `${name}` : `$No Title`}
			</h6>
			<p className="movie--date">
				{release_date
					? `${release_date}`
					: first_air_date
					? `${first_air_date}`
					: `$No Release Date`}
			</p>
		</div>
	);
};

export default MovieCard;
