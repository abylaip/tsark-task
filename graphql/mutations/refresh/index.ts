import { gql } from "@apollo/client";

export const REFRESH = gql`
  mutation refresh($token: String!) {
    users {
      refresh(refreshToken: $token) {
        accessToken
      }
    }
  }
`;
