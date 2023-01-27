import { gql } from "@apollo/client";

export const GET_CATEGORIES = gql`
  query C_ServerCategory($filter: C_ServerCategoryFilter) {
    C_ServerCategory(filter: $filter) {
      _id
      name
      serverId
      isRemove
      label
      channels {
        _id
        name
        createdAt
        updatedAt
        serverId
        isRemove
      }
    }
  }
`;

