import { gql } from "@apollo/client";

export const GET_SERVERS = gql`
  query C_Server($filter: C_ServerFilter) {
    C_Server(filter: $filter) {
      _id
      createdAt
      img
      isRemove
      name
      updatedAt
      userId
      userIds
    }
  }
`;
