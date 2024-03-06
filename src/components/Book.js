import React from 'react';
import Card from 'react-bootstrap/Card';

const Book = ({book}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{book.BookName}</Card.Title>
                <Card.Text>
                    {Book.NumberOfCopies}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Book;
