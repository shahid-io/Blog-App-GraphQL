import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import schema from './schema'; 
import resolvers from './resolvers';
import { ServerConfig } from './config';

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
  });

  await server.start();
  const app = express();
  server.applyMiddleware({ app });

  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${ServerConfig.PORT}${server.graphqlPath}`);
  });
}

startApolloServer().catch(error => {
  console.error('Error starting Apollo Server:', error);
});
