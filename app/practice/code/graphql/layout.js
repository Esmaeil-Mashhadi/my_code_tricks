"use client"
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri:"https://graphqlzero.almansi.me/api",
    cache: new InMemoryCache()
  })

  


const layout = ({children}) => {
  
    return (
        <div>
          <ApolloProvider client = {client}>
            {children}
          </ApolloProvider>
        
        </div>
    );
};

export default layout;