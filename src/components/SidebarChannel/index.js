import React from 'react'
import Style from './SidebarChannel.module.css'

export default function SidebarChannel({ id, channelName}){
    return (
        <div className = {Style.sidebarChannel}>
            <h4>
                <span className = {Style.sidebarChannel__hash}>
                    # dasfd
                </span>{ channelName }
            </h4>
        </div>
    )
}