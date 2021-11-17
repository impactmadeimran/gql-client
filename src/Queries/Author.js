import {gql} from '@apollo/client'

export const AuthorQuery = gql`
{
    authors{
        name
        id
    }
}
`