import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ChangeLangScreen = ({navigation}) => {
  
    return (
      <View style={styles.container}>
        <View style={styles.header}></View>

        <View
          style={{marginLeft: 120, flexDirection: 'column', marginTop: -50}}>
          <Title style={styles.title}>Choose Language</Title>
        </View>
        <View style={styles.body}>
          <ScrollView>
            <View style={styles.bodyContent}>
            <View style={{flex: 1, alignItems: 'center', marginTop: 10}}>
                <TouchableOpacity style={styles.buttonContainer}>
                  <Text style={{color: 'grey',fontSize:16,marginLeft:22}}>ENGLISH</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer}>
                  <Text style={{color: 'grey',fontSize:16,marginLeft:22}}>RUSSIAN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer}>
                  <Text style={{color: 'grey',fontSize:16,marginLeft:22}}>FRENCH</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer}>
                  <Text style={{color: 'grey',fontSize:16,marginLeft:22}}>ARABIC</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainerSubmit}>
                  <Text style={{color: '#fff', fontSize:18}}>UPDATE</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebf0fa',
  },
  header: {
    backgroundColor: '#ffffff',
    height: 80,
    // elevation: 20,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#ebf0fa',
    marginBottom: 10,
    marginLeft: 30,
    position: 'absolute',
    marginTop: 30,
  },
  name: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  body: {
    flex: 1,
    marginTop: 60,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  bodyContent: {
    // flex: 1,
    //alignItems: 'center',
    padding: 30,
    marginTop: -20,
  },
  name: {
    fontSize: 28,
    color: '#696969',
    fontWeight: '600',
  },
  buttonContainer: {
    marginTop: 10,
    height: 48,
    flexDirection: 'row',
   // justifyContent: 'center',
    alignItems: 'center',
    marginBottom:5,
    width: 335,
    borderRadius: 25,
    backgroundColor: '#ebf0fa',
  },
  buttonContainerSubmit: {
    marginTop: 30,
    height: 48,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:5,
    width: 330,
    borderRadius: 25,
    backgroundColor: '#039BE5',

  },
  title: {
    marginBottom: 10,
    fontSize: 22,
    color: '#696969',
  },
  caption: {
    fontSize: 13,
    lineHeight: 14,
    color: '#039BE5',
    opacity: 0.7,
  },
  input: {
    borderWidth: 0,
    margin: 5,
    backgroundColor: '#ebf0fa',
    borderRadius: 25,
  },
  caption1: {
    marginLeft: 18,
  },
});
export default ChangeLangScreen;