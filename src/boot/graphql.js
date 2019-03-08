import { ApolloClient } from 'apollo-client'
import VueApollo from 'vue-apollo'
import { createUploadLink } from 'apollo-upload-client'
import { InMemoryCache } from 'apollo-cache-inmemory'

export default ({ Vue, app }) => {
  const uri = process.env.API_END_POINT || '/graphql'
  const uploadLink = createUploadLink({ uri, credentials: 'include' })

  // Create the apollo client
  const defaultClient = new ApolloClient({
    link: uploadLink,
    cache: new InMemoryCache()
  })

  const apolloProvider = new VueApollo({ defaultClient })

  Vue.use(VueApollo)
  app.apolloProvider = apolloProvider
  return apolloProvider
}
