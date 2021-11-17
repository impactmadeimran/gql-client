import { useMutation, useQuery } from '@apollo/client'
import React, { useState } from 'react'
import { AuthorQuery } from '../Queries/Author'
import { addBookMutation } from '../Mutations/addBookMutation'
import { getBooksQuery } from '../Queries/Book'
const AddBook = () => {
    const [name, setname] = useState('');
    const [genre, setgenre] = useState('');
    const [authorId, setauthorId] = useState('');

    const [submitForm] = useMutation(addBookMutation, {
        refetchQueries: [{ query: getBooksQuery }]
    });

    const { data, loading, error } = useQuery(AuthorQuery);

    if (loading) return <h1>Loading...</h1>
    if (error) console.log(error);



    return (
        <div>
            <form id="add-book" onSubmit={(e) => {
                e.preventDefault();
                submitForm(
                    {
                        variables: { name, genre, authorId }
                    }
                )
            }}>
                <div className="field">
                    <label>Book name:</label>
                    <input type="text" onChange={(e) => { setname(e.target.value) }} />
                </div>
                <div className="field">
                    <label>Genre:</label>
                    <input type="text" onChange={(e) => { setgenre(e.target.value) }} />
                </div>
                <div className="field">
                    <label>Author:</label>
                    <select onChange={(e) => { setauthorId(e.target.value) }}>
                        <option>Select author</option>
                        {data?.authors?.map((author, key) => (
                            <option key={key} value={author.id}>{author.name}</option>
                        ))}
                    </select>
                </div>
                <button>+</button>

            </form>
        </div>
    )
}

export default AddBook
