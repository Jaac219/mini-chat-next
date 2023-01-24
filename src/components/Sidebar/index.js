import React, { useEffect, useState } from 'react'
import Style from './Sidebar.module.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AddIcon from '@material-ui/icons/Add'
import SidebarChannel from '@/components/SidebarChannel'
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt'
import  InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import CallIcon from '@material-ui/icons/Call'
import { Avatar } from '@material-ui/core'
import HeadSetIcon from '@material-ui/icons/Headset'
import MicIcon from '@material-ui/icons/Mic'
import SettingsIcon from '@material-ui/icons/Settings'

let channels = [
  {id: 1, channel: {channelName: 'Channel1'}},
  {id: 2, channel: {channelName: 'Channel2'}},
  {id: 3, channel: {channelName: 'Channel3'}},
  {id: 4, channel: {channelName: 'Channel4'}},
  {id: 5, channel: {channelName: 'Channel5'}},
  {id: 6, channel: {channelName: 'Channel6'}},
  {id: 7, channel: {channelName: 'Channel7'}},
]


export default function Sidebar() {
    return (
        <div className = {Style.sidebar}>
            <div className = {Style.sidebar__top}>
                <h3>Jaac</h3>
                <ExpandMoreIcon />
            </div>
            <div className = {Style.sidebar__channels}>
                <div className = {Style.sidebar__channelsHeader}>
                    <div className = {Style.sidebar__header}>
                        <h4>Text Channels</h4>
                    </div>
                    <AddIcon 
                        // onClick = {handleChannel}
                        className = {Style.sidebar__addChannel} />
                </div>
                <div className = {Style.sidebar__channelsList}>
                    { channels.map(({ id, channel}) => (
                        <SidebarChannel
                            key = {id}
                            id = {id}
                            channelName = {channel.channelName}
                        />
                    ))}
            </div>
            </div> 
            <div className = {Style.sidebar__voice}>  
                <SignalCellularAltIcon 
                    className = {Style.sidebar__cellularVoiceIcon}
                    fontSize = "large"
                />
                <div className = {Style.sidebar__voiceInfo}>
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>
                <div className = {Style.sidebar__voiceIcon}>
                    <InfoOutlinedIcon />
                    <CallIcon />
                </div>
            </div>
            <div className = {Style.sidebar__profile}>
                <Avatar 
                    className = {Style.sidebar__profileAvatar}
                    // onClick = { () => auth.signOut()}
                    src = "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
                />
                <div className = {Style.sidebar__profileInfo}>
                    <h3>Jaac</h3>
                    <p>#</p>
                </div>
                <div className = {Style.sidebar__profileIcons}>
                    <MicIcon />
                    <HeadSetIcon />
                    <SettingsIcon />
                </div>
            </div>
        </div>
    )
}