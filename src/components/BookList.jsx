import SingleBook from './SingleBook';
import { Row, Form, Col } from 'react-bootstrap';
import CommentArea from './CommentArea';
import { useState } from 'react';
// Genere dei libri
import fantasy from '../data/fantasy.json';
import history from '../data/history.json';
import horror from '../data/horror.json';
import romance from '../data/romance.json';
import scifi from '../data/scifi.json';

const BookList = () => {
	const [bookList, setBookList] = useState({
		bookTitle: '',
		selectGenre: fantasy,
		bookGenres: [fantasy, horror, history, romance, scifi],
		selectedAsin: null,
	});

	// const [bookGenresTwo, setBookGenresTwo] = useState([fantasy, horror, history, romance, scifi]);

	const changeAsin = (newAsin) => {
		setBookList({ ...bookList, selectedAsin: newAsin });
	};
	// console.log(bookList.bookGenres[0]);
	// console.log(fantasy);
	return (
		<Col>
			<Row className='justify-content-center'>
				<Col md={6} className='my-4'>
					<Form.Group>
						<Form.Control
							type='text'
							placeholder='Cerca un libro...'
							value={bookList.bookTitle}
							onChange={(e) => {
								e.preventDefault();
								setBookList({ ...bookList, bookTitle: e.target.value });
							}}
						/>
					</Form.Group>
				</Col>
				<Col md={4} className='align-items-center d-flex'>
					<Form.Select
						// value={bookList.selectGenre}
						onChange={(e) => {
							e.preventDefault();
							setBookList({ ...bookList, selectGenre: e.target.value });
						}}>
						{bookList.bookGenres.map((genre, i) => (
							<option key={i} value={genre[i]}>
								{genre[i].category}
							</option>
						))}
					</Form.Select>
				</Col>
			</Row>
			<Row>
				<Col md={9}>
					<Row>
						{bookList.selectGenre
							.filter((book) =>
								book.title.toLowerCase().includes(bookList.bookTitle.toLowerCase())
							)
							.map((oneBook) => {
								return (
									<SingleBook
										book={oneBook}
										key={oneBook.asin}
										changeAsin={changeAsin}
										selectedAsin={bookList.selectedAsin}
									/>
								);
							})}
					</Row>
				</Col>
				{bookList.selectedAsin && <CommentArea bookId={bookList.selectedAsin} />}
			</Row>
		</Col>
	);
};

export default BookList;
