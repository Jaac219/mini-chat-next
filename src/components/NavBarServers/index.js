import Link from "next/link";

export default function NavBarServers({servers}){
  return (
    <ul>
      {servers.map((val)=>{
        return (
          <Link key={val._id} href={`./${val._id}`}><li>{val.name}</li></Link>
        )
      })}
    </ul>
  )
}