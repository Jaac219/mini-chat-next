import { useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_CATEGORIES } from "@/graphql/queries/Category";

export default function useFetchCategories({
  _id = null,
  name = null,
  serverId = null
}){
  const [categories, setCategories] = useState([])

  const { refetch, loading, error } = useQuery(GET_CATEGORIES, {
    variables: {
      filter: {
        _id,
        name,
        serverId
      }
    },
    onCompleted: data => {
      setCategories(data[Object.keys(data)[0]])
    }
  });

  return [categories, loading, error]
}