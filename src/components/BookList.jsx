import SingleBook from './SingleBook';
import { Row, Form, Col } from 'react-bootstrap';
import CommentArea from './CommentArea';
import { useState } from 'react';
// Genere dei libri
import fantasy from '../data/fantasy.json';
const BookList = () => {
	const [bookList, setBookList] = useState({
		bookTitle: '',
		// selectGenre: fantasy,
		selectedAsin: null,
	});

	const changeAsin = (newAsin) => {
		setBookList({ ...bookList, selectedAsin: newAsin });
	};

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
								setBookList({ bookTitle: e.target.value });
							}}
						/>
					</Form.Group>
				</Col>
				<Col md={4} className='align-items-center d-flex'>
					<Form.Select
						onChange={(e) => {
							e.preventDefault();
							setBookList({ ...bookList, selectGenre: e.target.value });
						}}>
						<option>fantasy</option>
						<option>horror</option>
						<option>History</option>
						<option>Romance</option>
						<option>Scifi</option>
					</Form.Select>
				</Col>
			</Row>
			<Row>
				<Col md={9}>
					<Row>
						{fantasy
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
