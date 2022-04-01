import { gql } from "@apollo/client";

export const VIEWER = gql`
  query {
    viewer {
      id
      email
      sites {
        id
        host
      }
    }
  }
`;
