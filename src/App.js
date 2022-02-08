import React, { lazy } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Popular = lazy(() => import('./components/Popular.js'));
const Free = lazy(() => import('./components/Free'));

function App() {
	return (
		<>
			<Popular />
			<Free />
		</>
	);
}

export default App;
