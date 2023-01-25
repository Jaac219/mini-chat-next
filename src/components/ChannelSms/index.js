export default function ChannelSms({Sms}){
  return (
    <div>
      {Sms?.map((sms)=>sms.msg)}
    </div>
  )
}