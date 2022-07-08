import React, {Component} from 'react';
import {StyleSheet, View, Image, TouchableOpacity, TextInput} from 'react-native';
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


const ProfileScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <View style={styles.header}></View>
        <Image
          style={styles.avatar}
          source={{
            uri: 'https://i1.sndcdn.com/avatars-000422594328-r9bxsv-t240x240.jpg',
          }}
        />
        <View
          style={{marginLeft: 135, flexDirection: 'column', marginTop: -35}}>
          <Title style={styles.title}>Mohd Arqum Malik</Title>
          <Caption style={styles.caption}>Edit Profile Picture</Caption>
        </View>
        <View style={styles.body}>
          <ScrollView>
            <View style={styles.bodyContent}>
            <Caption style={styles.caption1} >NAME</Caption>
             <TextInput style={styles.input} placeholder="   Mohd Arqum Malik"/>
             <Caption style={styles.caption1} >Email</Caption>
             <TextInput style={styles.input} placeholder="   md.arqummalik@ladybirdweb.com"/>
             <Caption style={styles.caption1} >MOBILE</Caption>
             <TextInput style={styles.input} placeholder="   7006082958"/>
             <Caption style={styles.caption1} >WORK PHONE</Caption>
             <TextInput style={styles.input} placeholder="   8492011321"/>
             
            <View style={{flex: 1,alignItems: 'center',marginTop:20}}>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text style={{color:"#fff", fontSize:18}}>Update</Text>
              </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }

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
    marginTop: 20,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  bodyContent: {
    // flex: 1,
    //alignItems: 'center',
    padding: 30,
    marginTop:-20
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
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 335,
    borderRadius: 25,
    backgroundColor: '#039BE5',
  },
  title: {
    marginBottom: 10,
    fontSize: 20,
    color: '#696969',
  },
  caption: {
    fontSize: 13,
    lineHeight: 14,
   color: '#039BE5',
   opacity:0.7
    
  },
  input:{
      borderWidth:0,
      margin:5,
      backgroundColor:"#ebf0fa",
      borderRadius:25,
  },
  caption1:{
      marginLeft:18
  }
});

export default ProfileScreen;