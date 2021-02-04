import { ApolloClient, InMemoryCache } from '@apollo/client'

const apolloClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_COINCAP_GRAPHQL,
  cache: new InMemoryCache()
})

export { apolloClient }
export * from '@apollo/client'
