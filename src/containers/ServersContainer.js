import Icons from "@/components/Icons";
import Link from "next/link";
import Image from 'next/legacy/image'
// import 'next/legacy/image'


export default function ServersContainer({children = [], servers = [], params}){
  return (
    <div className='flex h-screen text-gray-100'>
      <div className='hidden p-3 space-y-2 overflow-auto bg-gray-900 md:block'>
        <NavLink href='#'>
          <Icons.Discord className='h-5 w-7' />
        </NavLink>

        <hr className='border-t-white/[.06] border-t-2 rounded mx-2' />

        {servers?.map((server) => (
          <div className="mb-8" key={server._id}>
            <NavLink
              href={`./${server._id}`}
              active={params[0] == server._id}
            >
              <Image className="rounded-full" layout='fill' src={`/servers/next.png`} alt='' />
            </NavLink>
          </div>
        ))}
      </div>

      {children}
    </div>
  )
}

function NavLink({ href, active, children }) {
  return (
    <Link href={href}>
      <div className="relative block group">
        <div className="absolute flex items-center h-full -left-3">
          <div
            className={`${
              active
                ? "h-10"
                : "h-5 scale-0 opacity-0 group-hover:opacity-100 group-hover:scale-100"
            } w-1 transition-all duration-200 origin-left bg-white rounded-r`}
          ></div>
        </div>

        <div className="group-active:translate-y-px">
          <div
            className={`${
              active
                ? "rounded-full bg-brand text-white"
                : "text-gray-100 group-hover:rounded-full group-hover:bg-brand group-hover:text-white bg-gray-700 rounded-full"
            } flex items-center justify-center w-12 h-12 transition-all duration-200 overflow-hidden`}
          >
            {children}
          </div>
        </div>
      </div>
    </Link>
  );
}