import { useQuery } from '@apollo/client';
import React from 'react'
import {getBookQuery} from '../Queries/Book'

const BookDetails = ({bookId}) => {
    const {data , loading ,error} = useQuery(getBookQuery);


    console.log(bookId);
    return (
        <div id="book-details">
            <p>Output book details here</p>
        </div>
    )
}

export default BookDetails
