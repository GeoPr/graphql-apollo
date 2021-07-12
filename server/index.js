const express = require('express')
const cors = require('cors')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema')
const RootValue = require('./rootValue')

const app = express()

app.use(cors())

const posts = Array.from({ length: 3 }, (_, id) => ({
    title: `title ${id + 1}`,
    id
}))

app.use(
    '/graphql',
    graphqlHTTP({
        graphiql: false,
        schema,
        rootValue: new RootValue(posts)
    })
)

app.listen(5000)
