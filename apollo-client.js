import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    // uri: process.env.NEXT_GRAPHQL_CHAT_URL,
    uri: "http://10.2.20.116:22248/gql",
    serviceName: 'chat',
    cache: new InMemoryCache(),
    headers: {
      'x-token': 'db6b6505da6f075bae33ae5b6e9d8e7cd217577e290c233d42df0278e7f09f10a2e23005f58510778ce656a423cd67c5d53803dfe8e3546da3ee1467ed18d051',
      'x-secret': process.env.NEXT_GRAPHQL_CHAT_SECRET,
    }
});

export default client;