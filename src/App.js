import { ApolloClient, ApolloProvider , InMemoryCache } from '@apollo/client'
import AddBook from './components/AddBook'
import BookList from './components/BookList'


function App() {

  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
  })

  return (
    <ApolloProvider client={client} >
      <div className="App">
        <BookList />
        <AddBook />
      </div>
    </ApolloProvider>
  );
}

export default App;
