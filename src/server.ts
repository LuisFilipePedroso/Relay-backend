import { ApolloServer } from 'apollo-server';

import { schema } from './graphql/schema';

const server = new ApolloServer({
  schema
});

server.listen(4000, () => {
  console.log('Server is running');
})