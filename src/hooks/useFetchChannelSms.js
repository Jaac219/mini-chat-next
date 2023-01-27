import { useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_CHANNEL_SMS } from "@/graphql/queries/ChannelSms";

export default function useFetchChannelSms({
  _id = null,
  channelId = null,
  message = null,
  userId = null
}){
  const [channelSms, setChannelSms] = useState([])

  const { refetch, loading, error } = useQuery(GET_CHANNEL_SMS, {
    variables: {
      option: { limit: 50, page: 1 },
      filter: {
        _id,
        channelId,
        message,
        userId
      }
    },
    onCompleted: data => {
      setChannelSms(data[Object.keys(data)[0]])
    }
  });

  return [channelSms, loading, error]
}