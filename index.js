import express from 'express'
import schema from './schema.js'
import { graphqlHTTP } from 'express-graphql'
import resolvers from './resolvers.js'

const app = express()

app.get('/', (req, res) => {
    res.send('up & running')
})

const root = {lco: () => {
    console.log('www.google.com');
}}

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(9000, () => {
    console.log('running at 9000')
})