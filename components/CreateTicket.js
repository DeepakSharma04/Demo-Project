import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity, ScrollView, Alert} from 'react-native';
import {TextInput,Button} from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';



const onPressTicket= () =>{
Alert.alert("Thank you",
"Your Ticket has been submitted successfully",)
}


const CreateTicket = () => {
  return (

    <View style={styles.container}>
      <KeyboardAwareScrollView style={styles.ticketForm}>
        <View style={styles.inputView}>
        <TextInput
        style={styles.inputs}
          mode="flat"
          label={<Text>Requester</Text>}
          placeholder="Type requester name"
          underlineColor="#ebf0fa"
          activeUnderlineColor="#039BE5"
        />
        <TextInput
        style={styles.inputs}
          mode="flat"
          label="Subject"
          placeholder="Type Subject Here"
          underlineColor="#ebf0fa"
          activeUnderlineColor="#039BE5"
          
        />
        <TextInput
        style={styles.inputs}
          mode="flat"
          label="Location"
          placeholder="Type Location name"
          underlineColor="#ebf0fa"
          activeUnderlineColor="#039BE5"
          
        />
        <TextInput
        style={styles.inputs}
          mode="flat"
          label="Requester"
          placeholder="Type requester name"
          underlineColor="#ebf0fa"
          activeUnderlineColor="#039BE5"
          
        />
        <TextInput
        style={styles.inputs}
          mode="flat"
          label="Department"
          placeholder="Type Department here"
          underlineColor="#ebf0fa"
          activeUnderlineColor="#039BE5"
         
        />
         <TextInput
        style={styles.inputs}
          mode="flat"
          label="Location"
          placeholder="Select Location"
          underlineColor="#ebf0fa"
          activeUnderlineColor="#039BE5"
         
        />
         <TextInput
        style={styles.inputs}
          mode="flat"
          label="Team"
          placeholder="SelectTeam"
          underlineColor="#ebf0fa"
          activeUnderlineColor="#039BE5"
         
        />
         <TextInput
        style={styles.inputs}
          mode="flat"
          label="Type"
          placeholder="Select"
          underlineColor="#ebf0fa"
          activeUnderlineColor="#039BE5"
         
        />
         <TextInput
        style={styles.inputDescription}
          mode="flat"
          label="Description"
          placeholder="Type Description here"
          underlineColor="#ebf0fa"
          activeUnderlineColor="#039BE5"
          
        />
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.ticketButton} onPress={onPressTicket} >
            <Text style={{fontSize: 17, color: '#ffffff'}}>Create Ticket</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#ffffff"
  },
  ticketForm: {
    marginTop:0,
  },
    inputView:{
        width:350,
        marginLeft:20,
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
    },
    ticketButton: {
      width: 378,
      height: 45,
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#039BE5',
    },
});
export default CreateTicket;