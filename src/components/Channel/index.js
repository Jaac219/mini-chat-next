import Link from 'next/link'
import React from 'react'
import Style from './Channel.module.css'

export default function Channe({channel}){
    const {_id, name, serverId} = channel
    return (
        <div className = {Style.sidebarChannel}>
            <h4>
                <Link href={`./${serverId}/${_id}`}>
                    <span className = {Style.sidebarChannel__hash}>
                        # 
                    </span>{ name }
                </Link>
            </h4>
        </div>
    )
}