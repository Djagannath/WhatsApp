import * as React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

type componentProps = {
}

const InputBox: React.FC<componentProps> = ({

}) => {
  return (
    <View className='flex-row justify-between justify-items-center 
      items-center bg-gray-50 p-2 pt-3'>
      <AntDesign name='plus' size={20} color='royalblue' />
      <TextInput placeholder='type your message...' 
        className='flex-1 bg-white p-2 px-3 mx-2 rounded-2xl border border-gray-300' />
      <MaterialIcons name='send' size={16} color='white' style={styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    overflow: 'hidden',
    backgroundColor: 'royalblue',
    padding: 7, paddingRight: 5, paddingLeft: 8,
    borderRadius: 15,
  }
});

export default InputBox;

