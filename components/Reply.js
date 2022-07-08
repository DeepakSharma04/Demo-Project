import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity, ScrollView, Alert} from 'react-native';
import {TextInput,Button} from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';



const onPressTicket= () =>{
Alert.alert("Thank you",
"Your Ticket has been submitted successfully",)
}


const Reply = () => {
  return (

    <View style={styles.container}>
      <KeyboardAwareScrollView style={styles.ticketForm}>
        <View style={styles.inputView}>
        <TextInput
        style={styles.inputs}
          mode="flat"
          label={<Text>Cc</Text>}
          placeholder="Select CC"
          underlineColor="#ebf0fa"
          activeUnderlineColor="#039BE5"
        />
        <TextInput
        style={styles.inputs}
          mode="flat"
          label="Bcc"
          placeholder="Select Bcc"
          underlineColor="#ebf0fa"
          activeUnderlineColor="#039BE5"
          
        />
        <TextInput
        style={styles.inputs}
          mode="flat"
          label="Compose Reply"
          placeholder=""
          underlineColor="#ebf0fa"
          activeUnderlineColor="#039BE5"
          
        />
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.ticketButton} onPress={onPressTicket} >
            <Text style={{fontSize: 17, color: '#ffffff'}}>Reply</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#ffffff",
    marginTop:5,
  },
  ticketForm: {
    marginTop:0,
  },
    inputView:{
        width:420,
        marginLeft:0,
        marginTop:0,
       
    },
    inputs:{
        margin:5,
       backgroundColor:"#fff",
       height:50
       
        
    },
    inputDescription:{
        height:130,
        margin:5,
        backgroundColor:"#fff"
    },
    buttonView: {
      alignItems: 'center',
      margin: 20,
      marginTop:420
    },
    ticketButton: {
      width: 378,
      height: 45,
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#039BE5',
    },
      inputs:{
        margin:5,
       backgroundColor:"#fff",
       height:50
       
        
    },
});
export default Reply;