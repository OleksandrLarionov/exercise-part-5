import { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import CommentList from './CommentList';
import AddComment from './AddComment';
const key =
	'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNjBmYWY2ZTNkZDAwMTQ5NWU0NGEiLCJpYXQiOjE2OTgzMjQ3MzAsImV4cCI6MTY5OTUzNDMzMH0.Wlw5f_Urd-k5h2lUH8SIchHaEY2HVol_3nh8P6Yz8bA';
const CommentArea = ({ bookId }) => {
	const [comment, setComment] = useState([]);

	useEffect(() => {
		getComents();
	}, []);

	useEffect(() => {
		getComents();
	}, [bookId]);

	const getComents = async () => {
		try {
			const response = await fetch(
				'https://striveschool-api.herokuapp.com/api/comments/' + bookId,
				{
					headers: {
						Authorization: key,
					},
				}
			);
			if (response.ok) {
				const data = await response.json();
				setComment(data);
				console.log('Questi sono i miei dati', data);
				console.log("Questo è l'Id del libro:", bookId);
			} else {
				throw new Error('Errore nel download dei dati');
			}
		} catch (error) {
			console.log('Errore', error);
		}
	};

	return (
		<Col md={3}>
			<h2 className='text-center mb-5'>Comments</h2>

			<CommentList comment={comment} getComents={getComents} />

			<AddComment bookId={bookId} />
		</Col>
	);
};

export default CommentArea;
