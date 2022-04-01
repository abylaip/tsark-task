import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    users {
      login(input: { email: $email, password: $password }) {
        token {
          accessToken
        }
      }
    }
  }
`;
