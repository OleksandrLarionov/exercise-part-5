import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import BookList from './components/BookList';
import { Container, Row } from 'react-bootstrap';

const App = () => {
	return (
		<Container fluid>
			<MyNav />
			<Welcome />
			<Row>
				<BookList />
			</Row>
			<MyFooter />
		</Container>
	);
};

export default App;
