import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity,TextInput} from 'react-native';
import {Button} from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const LoginScreen = ({navigation}) => {
  const [text, setText] = React.useState('');


  const OnPressLogin = () => {
    navigation.navigate('Inboxx')
  };

  return (
    <KeyboardAwareScrollView>
    <View style={styles.container}>
      {/* <Image
        source={require('../assets/bg.png')}
        style={{width: 415, height: 800, position: 'absolute'}}
      /> */}
      <View style={styles.img}>
          <Image
          source={require('../assets/faveo.jpeg')}
          style={{width: 350, height: 200}}
        /> 
      </View>
      <View>
        <View style={styles.section}>
          <View>
            <Text
              style={{
                fontSize: 32,
                marginLeft: 24,
                color: 'white',
                fontWeight: '300',
                color: '#039BE5',
                fontFamily: 'Roboto',
                padding: 3,
              }}>
              login
            </Text>
          </View>
          <View>
            <View></View>
            <View>
              <TextInput
                style={styles.pword}
                label="Email"
                value={text}
                placeholder="  Enter Email Here"
                onChangeText={text => setText(text)}
              />
            </View>
            <View>
              <TextInput
                style={styles.pword}
                label="Password"
                value={text}
                onChangeText={text => setText(text)}
                placeholder="  Enter Password Here"
              />
            </View>
            <View
              style={{alignItems: 'flex-end', marginRight: 12, padding: 10}}>
              <TouchableOpacity>
                <Text /* onPress={onPressForgot} */ style={{color: '#757575'}}>
                  Forgot password?
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{alignItems: 'center'}}>
              <Button
                mode="contained"
                onPress={OnPressLogin}
                style={styles.button}>
                <Text style={styles.btnText}>Login</Text>
              </Button>
            </View>
          </View>
          <View style={{alignItems: 'center', marginTop: 20}}>
            <TouchableOpacity>
              <Text /* onPress={onPressSignup} */ style={{color: '#757575'}}>
                Don't have an account? Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
    </KeyboardAwareScrollView>

  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#fbfeff",
  },
  bg: {
    backgroundColor:"#fbfeff",
    position: 'absolute',
    width: 1000,
    height: 1000,
  },
  body: {},
  img: {
    alignItems: 'center',
    marginTop: 50,
  },
  uname: {
    margin: 6,
    marginTop: 10,
    borderRadius: 25,
    backgroundColor: '#CFD8DC',
    width: 375,
    marginLeft: 10,
    padding: 10,
  },
  pword: {
    margin: 10,
    borderRadius: 50,
    backgroundColor: '#fff',
    width: 350,
    marginLeft: 22,
    padding: 10,
    elevation:0,
    borderWidth:1,
    borderColor: "#039BE5",
  },
  button: {
    height: 48,
    margin: 6,
    marginTop: 6,
    backgroundColor: '#039BE5',
    borderRadius: 50,
    width: 350,
    elevation:10,
    borderWidth:1,
    borderColor: "#039BE5",
    
  },
  btnText: {
    fontSize: 21,
    fontWeight: '400',
    textTransform: 'capitalize',
  },
  section: {
    height: 348,
    width: 395,
    marginLeft: 8,
    marginTop: 60,
  },
});

export default LoginScreen;
