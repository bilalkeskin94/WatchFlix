import React, {  lazy, Suspense} from 'react';
import Loading from './components/Loading';
import 'bootstrap/dist/css/bootstrap.min.css';

const Movie = lazy(() => import('./pages/Movie'));


function App() {
	return (
		<Suspense fallback={<Loading></Loading>}>
			<Movie />
		</Suspense>
	);
}

export default App;
