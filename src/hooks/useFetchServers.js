import { useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_SERVERS } from "@/graphql/queries/Server";

export default function useFetchServers({
  _id = null,
  name = null,
  userId = null
}){
  const [servers, setServers] = useState([])

  const { refetch, loading, error } = useQuery(GET_SERVERS, {
    variables: {
      filter: {
        _id,
        name,
        userId
      }
    },
    onCompleted: data => {
      setServers(data[Object.keys(data)[0]])
    }
  });

  return [servers, loading, error]
}