const { ApolloServer, gql } = require('apollo-server');
const fs = require('fs');
fs.readFileSync
const resolvers = require('./resolvers');

const typeDefs = gql`
  ${fs.readFileSync('./schema.graphql', 'utf8')}
`;

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`GraphQL Server berjalan di ${url}`);
});
