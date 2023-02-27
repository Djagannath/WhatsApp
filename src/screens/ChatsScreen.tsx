import { FlatList, Text, View, TouchableHighlight } from "react-native";
import ChatListItem from "../components/ChatListItem"
import Data from '../../assets/data/chat.json';

export default function Chats() {
  return (
    <FlatList className="flex-1"
      data={Data}
      keyExtractor={(item) => item.id}
      renderItem={({ item, index, separators }) => (
        <TouchableHighlight 
          key={item.id}
          onShowUnderlay={separators.highlight}
          onHideUnderlay={separators.unhighlight}
        >
          <ChatListItem message={item} />
        </TouchableHighlight>
      )}
    />
  );
}