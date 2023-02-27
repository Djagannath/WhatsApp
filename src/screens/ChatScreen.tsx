import { FlatList, ImageBackground } from "react-native";
import MessageItem from "../components/Message";
import { bg } from "../res/images";
import Data from "../../assets/data/messages.json"


const Chat = () => {
  return (
    <ImageBackground source={bg} className='flex-1'>
      <FlatList 
        className="p-2"
        inverted
        data={Data}
        renderItem={({ item }) => <MessageItem message={item} /> }
      />    
    </ImageBackground>
  );
}

export default Chat;