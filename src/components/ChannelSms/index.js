import useFetchChannelSms from "@/hooks/useFetchChannelSms";

export default function ChannelSms({channelId}){

  let [channelSms] = useFetchChannelSms({channelId});
  return (
    <div className='flex-1 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-700'>
      {channelSms?.map((sms, i) => (
        <div key={sms._id}>
          {i === 0 || sms.userId !== channelSms[i - 1].userId ? (
            MessageWithUser({sms})
          ) : (
            Message({sms})
          )}
        </div>
      ))}
    </div>
  )
}

const MessageWithUser = ({ sms }) => (
  <div className="leading-[22px] mt-[17px] flex pl-4 pr-16 py-0.5 hover:bg-gray-950/[.07]">
    <img
      className="w-10 h-10 mr-4 rounded-full mt-0.5"
        src={sms.user?.avatar}
      alt=""
    />
    <div>
      <p className="flex items-baseline">
        <span className="mr-2 font-medium text-green-400">
          {sms.user?.name}
        </span>
        <span className="text-xs font-medium text-gray-400">
          {/* {sms.date} */}
          2023
        </span>
      </p>
      <p className="text-gray-100">{sms.message}</p>
    </div>
  </div>
);

const Message = ({ sms }) => (
  <div className="pl-4 pr-16 py-0.5 hover:bg-gray-950/[.07] leading-[22px]">
    <p className="text-gray-100 pl-14">{sms.message}</p>
  </div>
);
