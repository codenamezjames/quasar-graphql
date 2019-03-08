import { ApolloClient } from 'apollo-client'
import VueApollo from 'vue-apollo'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { onError } from 'apollo-link-error'
import { from } from 'apollo-link'

export default ({ Vue, app }) => {
  const uri = process.env.API_END_POINT || 'http://localhost:3000/'
  const httpLink = new HttpLink({ uri })

  // Create the apollo client
  const defaultClient = new ApolloClient({
    link: from([
      onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors) {
          graphQLErrors.map(({ message, locations, path }) => {
            // Handle Graph Error
            // console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
          })
        }
        if (networkError) {
          // Handle Network Error
          // console.log(`[Network error]: ${networkError}`)
        }
      }),
      httpLink
    ]),
    cache: new InMemoryCache()
  })

  const apolloProvider = new VueApollo({ defaultClient })

  Vue.use(VueApollo)
  app.apolloProvider = apolloProvider
  return apolloProvider
}
