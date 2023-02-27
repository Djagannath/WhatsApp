import React from "react";
import { Text, View } from "react-native";
import { MessageItemType } from "./MessageItemType";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime"
dayjs.extend(relativeTime);

type MessageProps = {
  message: MessageItemType
} 
 
const MessageItem: React.FC<MessageProps> = ({
  message
}: MessageProps) => {
  return (
    <View className="bg-white m-1 p-2 rounded-xl" style={{
      maxWidth: '80%'
    }}>
      <Text>{message.text}</Text>    
      <Text className="text-gray-400 self-end">{dayjs(message.createdAt).fromNow(true)}</Text>    
    </View>
  );
}

export default MessageItem;