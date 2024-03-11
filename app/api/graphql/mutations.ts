import { gql } from '@apollo/client';
import { UserInput } from '@/types/DBTypes';

export const REGISTER_USER = gql`
  mutation RegisterUser($user: UserInput!) {
    register(user: $user) {
      user {
        id
        user_name
      }
    }
  }
`;