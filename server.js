require('dotenv').config()
const { ApolloServer } = require('apollo-server')
const mongoose = require('mongoose')
const resolvers = require('./resolvers')
const typeDefs = require('./typeDefs')

mongoose
  .connect(
    process.env.MONGO_URI,
    {
      useNewUrlParser: true
    }
  )
  .then(() => console.log('mongodb connected'))
  .catch(ex => console.log(ex))

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({ url }) => console.log(`Server is running on ${url}`))
