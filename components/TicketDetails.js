import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {IconButton, Colors} from 'react-native-paper';

const TicketDetailsScreen = ({navigation}) => {

  const OnPressClosed = () => {
    navigation.navigate('TicketClosed');
  };
  const OnPressReply = () => {
    navigation.navigate('Reply');
  };

  return (
    
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/ticket.png')}
          style={styles.image}></ImageBackground>
          <TouchableOpacity onPress={OnPressClosed} style={{ height:600}}>
           <Text></Text>
          </TouchableOpacity>

        <View style={{marginTop:560, marginLeft: 310,position:"absolute" }}>
          <IconButton
            style={{backgroundColor: '#039BE5',elevation:20}}
            icon="reply"
            color={Colors.grey50}
            size={43}
            onPress={OnPressReply}
          />
        </View>
      </View>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 415,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    height: 680,
  },
});
export default TicketDetailsScreen;
