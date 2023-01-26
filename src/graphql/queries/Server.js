import { gql } from "@apollo/client";

export const GET_SERVERS = gql`
  query Query($filter: C_ServerFilter) {
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
