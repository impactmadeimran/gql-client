import { useQuery } from '@apollo/client';
import React from 'react'
import { getBookQuery } from '../Queries/Book'

const BookDetails = ({ bookId }) => {

    const { data, loading, error } = useQuery(getBookQuery, { variables: { id: bookId }, pollInterval: 100 });
    if (loading) return <p>Loading</p>

    return (
        <div id="book-details">
            <p>Output book details here</p>
            {/* {bookId === data?.book?.id && (
               <span>{data?.book?.name}</span>
           )} */}
            <p>{data?.book?.name}</p>
        </div>
    )
}

export default BookDetails
