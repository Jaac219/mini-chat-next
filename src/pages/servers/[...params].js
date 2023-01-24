import NavBarServers from "@/components/NavBarServers"; 
import SidebarChannels from "@/components/SidebarChannels";
import ServersContainer from "@/containers/ServersContainer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const serversData = [
  {_id: 1, name: "Server 1"},
  {_id: 2, name: "Server 2"},
  {_id: 3, name: "Server 3"},
  {_id: 4, name: "Server 4"},
  {_id: 5, name: "Server 5"},
  {_id: 6, name: "Server 6"},
  {_id: 7, name: "Server 7"},
  {_id: 8, name: "Server 8"},
  {_id: 9, name: "Server 9"}
]

const channelsData = [
  {_id: 101, serverId: 1, name: "Channel 1"},
  {_id: 102, serverId: 1, name: "Channel 2"},
  {_id: 103, serverId: 1, name: "Channel 3"},
  {_id: 104, serverId: 1, name: "Channel 4"},
  {_id: 105, serverId: 1, name: "Channel 5"},
  {_id: 201, serverId: 2, name: "Channel 6"},
  {_id: 202, serverId: 2, name: "Channel 7"},
  {_id: 203, serverId: 2, name: "Channel 8"},
  {_id: 204, serverId: 2, name: "Channel 9"},
  {_id: 301, serverId: 3, name: "Channel 10"},
  {_id: 302, serverId: 3, name: "Channel 11"},
  {_id: 303, serverId: 3, name: "Channel 12"},
]

export default function prueba(){
  const router = useRouter()
  const { params = [] } = router.query
  const [servers, setServers] = useState([])
  const [channels, setChannels] = useState([])

  useEffect(()=>{
    setServers(serversData)
  }, [])

  useEffect(()=>{
    let serverId = params[0]
    let channelId = params[1]

    const server = serversData.find((server)=>server._id == serverId)
    if(!server) return

    const channelsInServer = channelsData.filter((channel)=>channel.serverId === server._id)
    setChannels(channelsInServer)
    if(channelsInServer.length <= 0) return


    let existChannelInServer = channelsInServer.some((channel)=>channel._id == channelId)
    if (!existChannelInServer){
      router.push(`./${serverId}/${channelsInServer[0]._id}`)
    }
  }, [params])

  return (
    <ServersContainer>
      <NavBarServers servers={servers} />
      <SidebarChannels channels={channels}/>
      {/* <ChannelSms sms={[]}/> */}
    </ServersContainer>
  )
}