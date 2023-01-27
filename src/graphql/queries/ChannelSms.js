import { gql } from "@apollo/client";

export const GET_CHANNEL_SMS = gql`
  query C_ChannelSms($filter: C_ChannelSmsFilter, $option: Options) {
    C_ChannelSms(filter: $filter, option: $option) {
      _id
      createdAt
      isRemove
      message
      updatedAt
      userId
      channelId
      user
    }
  }
`;