import { useQuery } from '@apollo/client'
import React, { useState } from 'react'
import { getBooksQuery } from '../Queries/Book'
import BookDetails from './BookDetails';

const BookList = () => {
    const [Selected, setSelected] = useState("");
    const { data, loading, error } = useQuery(getBooksQuery);

    if (loading) return <h1>Loading Books</h1>;

    if (error) console.log(error);

    return (
        <div>

            {data?.books?.map((book) => (
                <div key={book.id}>
                    <li onClick={(e) => { setSelected(book.id) }}><strong>{book?.name}</strong></li>
                </div>
            ))}
            <BookDetails bookId={Selected} />

        </div>
    )
}

export default BookList
