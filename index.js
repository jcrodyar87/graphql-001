var { graphql, buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String,
    greeting: String
  }
`);

// The rootValue provides a resolver function for each API endpoint
var rootValue = {
  hello: () => {
    return 'Hello world!';
  },
  greeting: () => {
    return 'Good morning';
  }
};

// Run the GraphQL query '{ hello }' and print out the response
graphql({
  schema,
  source: '{ greeting }',
  rootValue
}).then((response) => {
  console.log(response);
});