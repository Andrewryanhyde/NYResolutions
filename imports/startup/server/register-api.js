import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";

import ResolutionsSchema from "../../api/resolutions/resolutions.graphql";


const testSchema = `
type Query {
       hi: String
       resolutions: [Resolution]
}
`;

const typeDefs = [testSchema, ResolutionsSchema];
 

const resolvers  = {
       Query: {
              hi() {
                     return "Hello Level Up";
              },
              resolutions() {
                     return [
                            {
                                   _id: "asdfasdfasdf",
                                   name: "Get stuff done!"
                            },
                            {
                                   _id: "afloogelhorn",
                                   name: "Get stuff done!"
                            }
                     ];
              }
       }
};

const schema = makeExecutableSchema({
       typeDefs,
       resolvers
});

createApolloServer({schema});