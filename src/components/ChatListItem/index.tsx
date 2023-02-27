import React from "react";
import { Text, View, Image } from "react-native";
import { MessageItem } from "./MessageItemType";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime"
dayjs.extend(relativeTime);

import { images } from "../../res/images";

type MessageProps = {
  message: MessageItem
} 

const ChatListItem: React.FC<MessageProps> = ({
  message
}: MessageProps) => {

  let image = null;
  
  if (message.user.image.indexOf('http') !== -1) {
    image = {
      uri: message.user.image
    };    
  } else {
    image = images.avatars[message.user.image];
  }

  return (
    <View className='flex-row mx-2 my-2'>
      <Image className='w-14 h-14 rounded-[30px] mr-2.5'
        source={image} />
      
      <View className='flex-1 border-b border-gray-300'>    
        <View className='flex-row mb-1'>
          <Text className='flex-1 font-bold'>{message.user.name}</Text>
          <Text className='text-gray-500'>{dayjs(message.lastMessage.createdAt).fromNow(true)}</Text>
        </View>
        <Text className='pb-2'>{message.lastMessage.text}</Text>
      </View>
    </View>
  );
}

export default ChatListItem;