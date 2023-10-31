import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
const key =
	'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNjBmYWY2ZTNkZDAwMTQ5NWU0NGEiLCJpYXQiOjE2OTgzMjQ3MzAsImV4cCI6MTY5OTUzNDMzMH0.Wlw5f_Urd-k5h2lUH8SIchHaEY2HVol_3nh8P6Yz8bA';

const AddComment = ({ bookId }) => {
	const [commentAdd, setCommentAdd] = useState({
		comment: '',
		rate: '1',
		elementId: bookId,
	});

	const formSubmit = async (e) => {
		e.preventDefault();
		setCommentAdd({ comment: '', rate: '1', elementId: bookId });

		try {
			const response = await fetch('https://striveschool-api.herokuapp.com/api/comments', {
				method: 'POST',
				body: JSON.stringify(commentAdd),
				headers: {
					Authorization: key,
					'Content-Type': 'application/json',
				},
			});
			if (response.ok) {
				// il commento è stato inviato!
				alert('commento salvato!');
			} else {
				throw new Error('errore nel salvataggio del commento');
			}
		} catch (error) {
			console.log('error', error);
		}
	};

	return (
		<Form onSubmit={formSubmit} className='mt-3'>
			<p>New Comment</p>
			<Form.Group>
				<Form.Control
					type='text'
					placeholder='Write there a new comment'
					value={commentAdd.comment}
					onChange={(e) => setCommentAdd({ ...commentAdd, comment: e.target.value })}
				/>
				<p className='mt-2'>Rate</p>
				<Form.Select
					aria-label='Rate'
					value={commentAdd.rate}
					onChange={(e) => setCommentAdd({ ...commentAdd, rate: e.target.value })}>
					<option>1</option>
					<option>2</option>
					<option>3</option>
					<option>4</option>
					<option>5</option>
				</Form.Select>
			</Form.Group>
			<Button variant='primary' type='submit' className='mt-2'>
				Send
			</Button>
		</Form>
	);
};

export default AddComment;
