import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import Chats from './src/screens/ChatsScreen';
import Chat from './src/screens/ChatScreen';


export default function App() {
  return (
    <SafeAreaView className='flex-1 justify-around'>
      <Chat />

      <StatusBar />
    </SafeAreaView>
  );
}
