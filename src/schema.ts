import {gql} from 'apollo-server-express';

export const typeDefs = gql`
    #struct
    type Book{
        id: ID
        name: String
        price: Int
        store: [Store]
    }
    type Store{
        id: ID
        name: String
        address: String
    }
    type Query {
        books: [Book]
        book(id:ID!):Book
    }
`;