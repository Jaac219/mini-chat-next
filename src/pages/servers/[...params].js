import ChannelSms from "@/components/ChannelSms";
import SidebarChannels from "@/components/SidebarChannels";
import ServersContainer from "@/containers/ServersContainer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { ApolloClient, gql, InMemoryCache, useQuery } from "@apollo/client";
import client from "../../../apollo-client";

// const serversData = [
//   {_id: 1, name: "Server 1"},
//   {_id: 2, name: "Server 2"},
//   {_id: 3, name: "Server 3"},
//   {_id: 4, name: "Server 4"},
//   {_id: 5, name: "Server 5"},
//   {_id: 6, name: "Server 6"},
//   {_id: 7, name: "Server 7"},
//   {_id: 8, name: "Server 8"},
//   {_id: 9, name: "Server 9"}
// ]

const channelsData = [
  {_id: 101, serverId: "EaRUMfts7rMgInX1d", name: "Channel 1"},
  {_id: 102, serverId: "EaRUMfts7rMgInX1d", name: "Channel 2"},
  {_id: 103, serverId: "EaRUMfts7rMgInX1d", name: "Channel 3"},
  {_id: 104, serverId: "EaRUMfts7rMgInX1d", name: "Channel 4"},
  {_id: 105, serverId: "EaRUMfts7rMgInX1d", name: "Channel 5"},
  {_id: 201, serverId: 2, name: "Channel 6"},
  {_id: 202, serverId: 2, name: "Channel 7"},
  {_id: 203, serverId: 2, name: "Channel 8"},
  {_id: 204, serverId: 2, name: "Channel 9"},
  {_id: 301, serverId: 3, name: "Channel 10"},
  {_id: 302, serverId: 3, name: "Channel 11"},
  {_id: 303, serverId: 3, name: "Channel 12"},
]

const channelSmsData = [
  {msg: "hola user 1", userId: 1, channelId: 101},
  {msg: "hola desde user 2", userId: 2, channelId: 101},
  {msg: "como esta user 1", userId: 1, channelId: 101},
  {msg: "muy bien user 2", userId: 2, channelId: 101},
  {msg: "me alegra user 1", userId: 1, channelId: 101},
  {msg: "me alegra user 1", userId: 1, channelId: 201},
  {msg: "me alegra user 1", userId: 1, channelId: 201},
  {msg: "me alegra user 1", userId: 1, channelId: 201},
  {msg: "me alegra user 1", userId: 1, channelId: 201},
]


const QUERY = gql`
  query C_Server {
    C_Server {
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

export default function Server(){
  
  const router = useRouter()
  const { params = [] } = router.query
  const [servers, setServers] = useState([])
  const [channels, setChannels] = useState([])
  const [channelSms, setChannelSms] = useState([])

  const { data, loading, error } = useQuery(QUERY);
  
  useEffect(()=>{
    setServers(data?.C_Server)
  }, [data])
    
  useEffect(()=>{
    let serverId = params[0]
    let channelId = params[1]

    if (servers) {
      const server = servers?.find((server)=>server._id == serverId)
      if(!server) return
      
      const channelsInServer = channelsData.filter((channel)=>channel.serverId == server._id)
      setChannels(channelsInServer)
      if(channelsInServer.length <= 0) return
      
      
      let existChannelInServer = channelsInServer.some((channel)=>channel._id == channelId)
      if (!existChannelInServer){
        router.push(`./${serverId}/${channelsInServer[0]._id}`)
      }
      
      let sms = channelSmsData.filter((sms)=>sms.channelId == channelId)
      setChannelSms(sms)
    }
  }, [params])
  
  if (loading) return (<h2>Loading...</h2>)

  if (error) {
    console.error(error);
    return null;
  }

  return (
    // <div className="flex">
    //   <SideBar servers={servers}/>
    //   <ChannelBar />
    //   <ContentContainer />
    // </div>
    <ServersContainer servers={servers} params={params}>
      {loading ? <h2>Loading</h2>: 
        <>
          <SidebarChannels channels={channels}/>
          <ChannelSms Sms={channelSms}/>
        </>
      }
    </ServersContainer>
  )
}


// const client = new ApolloClient({
//   uri: "https://countries.trevorblades.com",
//   cache: new InMemoryCache()
// });
