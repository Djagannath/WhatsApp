import React from "react";
import classNames from "classnames";
import { Text, View, StyleSheet } from "react-native";
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

  const isMyMessage = () => {
    return message.user.id === "u1";
  }

  
  const wrapper = classNames(
    'm-1 p-2 rounded-xl max-w-[80%]',
    {'bg-white self-start': !isMyMessage()},
    {'bg-lime-100 self-end': isMyMessage()}
  );

  return (
    <View className={wrapper} style={styles.wrapper}>
      <Text>{message.text}</Text>    
       
      <Text className="text-gray-400 self-end">{dayjs(message.createdAt).fromNow(true)}</Text>    
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 2,
  }
});

export default MessageItem;