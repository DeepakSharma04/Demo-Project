import React from 'react';
import {Text, View, Button} from 'react-native';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './components/login';
import HomeScreen from './components/HomeScreen';
import CreateTicket from './components/CreateTicket';
import Screen2 from './components/Screen2';
import ProfileScreen from './components/ProfileScreen';
import PasswordScreen from './components/PasswordScreen';
import ChangeLangScreen from './components/ChangeLangScreen';
import OpenTickets from './components/OpenTickets';
import ClosedTickets from './components/ClosedTickets';
import TicketDetailsScreen from './components/TicketDetails';
import ClosedScreen from './components/ClosedDetails';
import Reply from './components/Reply';
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { DrawerContent } from './components/CustomDrawer';



const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerMenu = () => {
  return (
    
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} initialRoute={HomeScreen}/>}>
     {/*  <Drawer.Navigator initialRouteName="Homescreen"></Drawer.Navigator> */} 
     <Drawer.Screen name="Inbox" component={HomeScreen}  />
     <Drawer.Screen name="Create Ticket" component={CreateTicket}  />
     <Drawer.Screen name="Profile" component={ProfileScreen}  />
     <Drawer.Screen name="Open Tickets" component={OpenTickets}  />
     <Drawer.Screen name="Closed Tickets" component={ClosedTickets} />
      <Drawer.Screen name="Password" component={PasswordScreen} />
      <Drawer.Screen name="Language" component={ChangeLangScreen} />
    </Drawer.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
     
        <Stack.Navigator>
         <Stack.Screen
          name="Login"
          component={LoginScreen}
         options={{
            header: () => null,
          }}
        /> 
        <Stack.Screen
          name="Inboxx"
          component={DrawerMenu}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen
          name="TicketDetails"
          component={TicketDetailsScreen}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen
          name="Reply"
          component={Reply}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen
          name="TicketClosed"
          component={ClosedScreen}
          options={{
            header: () => null,
          }}
        />
        {/* <Stack.Screen name="Home" component={HelloWorldApp} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
