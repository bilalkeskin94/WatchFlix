import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
const Loading = () => {
	return (
		<div>
			<div  className='container d-flex justify-content-center'>
				<Button variant="primary" disabled>
					<Spinner
						as="span"
						variant="warning"
						size="sm"
						role="status"
						aria-hidden="true"
						animation="grow"
					/>
					Loading...
				</Button>
			</div>
		</div>
	);
};

export default Loading;
