import express from 'express';
import cors from 'cors';
import { routes } from './routes/index.routes';
import { ApolloError, ApolloServer } from "apollo-server";
import { typeDefs } from './graphql/resolvers/schemas';
import { resolvers } from './graphql/resolvers/resolvers';
import { url } from 'inspector';

const app = express()
const port = 3000

const serverGraphql = new ApolloServer({
  typeDefs,
  resolvers,
  formatError: (error) => {
    return {
      name: `${error.name}`,
      message: `${error.message}`
    }
  }
});

app.use(express.json());
app.use(cors());

app.use(routes);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

serverGraphql.listen().then(({url}: {url: string}) => {
  console.log(`Server apollo ${url}`);
})

app.listen(port, () => {
  console.log(`Server running ${port}`)
})