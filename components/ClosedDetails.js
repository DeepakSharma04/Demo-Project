import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground
} from 'react-native';
import {Chip} from 'react-native-paper';




const ClosedScreen = () => {
  return (
    <View style={styles.container}>
    <ImageBackground source={require('../assets/closed.png')}  style={styles.image}>
    </ImageBackground>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:415,
 
  },
  image: {
    flex: 1,
    justifyContent: "center",
    height:680
    
  },
});
export default ClosedScreen;
