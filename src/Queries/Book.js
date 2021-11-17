import { gql } from '@apollo/client'

export const getBooksQuery = gql`
    {
        books{
            name
            id
            genre
        }
    }
`

export const getBookQuery = gql`
    query($id:ID){
        book(id:$id){
            id
            name
            genre
            author{
                id
                name
                age
                books{
                    name
                    id
                }
            }
        }
    }
`