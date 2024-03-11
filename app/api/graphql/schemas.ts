import { UserOutput } from '@/types/DBTypes';
const typeDefs = `#graphql
type User {
  id: ID!
  user_name: String!
}

type Mutation {
  register(user: UserInput!): UserOutput
} 

input UserInput {
  user_name: String!
  password: String!
}

type Query {
  users: [UserOutput]
  userById(id: ID!): UserOutput
  checkToken: UserResponse
}

type UserResponse {
  message: String!
  user: UserOutput
}

type UserOutput {
  user: User!
  id: ID!
  user_name: String!
}
`

export default typeDefs;