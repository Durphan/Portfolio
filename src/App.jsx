import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { AnimatedRoutes } from './routes/animatedRoutes';

function App() {
	return (
		<BrowserRouter>
			<AnimatedRoutes />
		</BrowserRouter>
	);
}

export default App;
