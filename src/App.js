import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import BookList from './components/BookList';

// Genere dei libri
import fantasy from '../src/data/fantasy.json';
import history from '../src/data/history.json';
import horror from '../src/data/horror.json';
import romance from '../src/data/romance.json';
import scifi from '../src/data/scifi.json';
import { Container, Row } from 'react-bootstrap';

const App = () => {
	return (
		<Container fluid>
			<MyNav />
			<Welcome />
			<Row>
				<BookList genre={[fantasy, history, horror, romance, scifi]} />
			</Row>
			<MyFooter />
		</Container>
	);
};

export default App;
