import React, { lazy, Suspense } from 'react';
import Loading from './components/Loading';
import 'bootstrap/dist/css/bootstrap.min.css';

const Popular = lazy(() => import('./pages/Popular'));

function App() {
	return (
		<Suspense fallback={<Loading />}>
			<Popular />
		</Suspense>
	);
}

export default App;
