import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
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
import {color} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';





export function DrawerContent (props) {
  return (
    <View style={{flex:1, backgroundColor:"#fff" , }}>
    <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
            <View style={styles.userInfoSection}>
                <View style={{flexDirection:'column',marginTop: 12,}}>
                    <Avatar.Image 
                    style={{marginLeft:60,marginBottom:5}}
                        source={{
                            uri: 'https://i1.sndcdn.com/avatars-000422594328-r9bxsv-t240x240.jpg'
                        }}
                        size={50}
                    />
                    <View style={{marginLeft:15, flexDirection:'column'}}>
                        <Title style={styles.title}>Mohd Arqum Malik</Title>
                        <Caption style={styles.caption}>admin</Caption>
                    </View>
                </View>
            </View>

            <Drawer.Section style={styles.drawerSection}>
            <DrawerItem 
                style={styles.tiles}
                    icon={({color, size}) => (
                        <Icon 
                        name="inbox-arrow-down" 
                        color={color}
                        size={size}
                        
                        />
                    )}
                    label="Create Ticket"
                    onPress={() => {props.navigation.navigate('Create Ticket')}}
                />
                <DrawerItem 
                style={styles.tiles}
                    icon={({color, size}) => (
                        <Icon 
                        name="inbox-arrow-down" 
                        color={color}
                        size={size}
                        
                        />
                    )}
                    label="Inbox"
                    onPress={() => {props.navigation.navigate('Inbox')}}
                />
                <DrawerItem 
                style={styles.tiles}
                    icon={({color, size}) => (
                        <Icon 
                        name="book-open-outline" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Open Tickets"
                    onPress={() => {props.navigation.navigate('Open Tickets')}}
                />
                <DrawerItem 
                style={styles.tiles}
                    icon={({color, size}) => (
                        <Icon 
                        name="close-box-outline" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Closed Tickets"
                    onPress={() => {props.navigation.navigate('Closed Tickets')}}
                />
                {/* <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="settings" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Settings"
                    onPress={() => {}}
                /> */}
                <DrawerItem 
                style={styles.tiles}
                    icon={({color, size}) => (
                        <Icon 
                        name="human-capacity-increase" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Organisations"
                    onPress={() => {}}
                />
            </Drawer.Section>
            {/* <Drawer.Section title="Preferences">
                <TouchableRipple onPress={() => {toggleTheme()}}>
                    <View style={styles.preference}>
                        <Text>Dark Theme</Text>
                        <View pointerEvents="none">
                            <Switch value={paperTheme.dark}/>
                        </View>
                    </View>
                </TouchableRipple>
            </Drawer.Section> */}
        </View>
    </DrawerContentScrollView>
    <Drawer.Section title="Preferences">
    <DrawerItem 
                style={styles.tiles}
                    icon={({color, size}) => (
                        <Icon 
                        name="face-man-profile" 
                        color={color}
                        size={size}
                        
                        />
                    )}
                    label="Edit Profile"
                    onPress={() => {props.navigation.navigate('Profile')}}
                />
    <DrawerItem 
        style={{borderRadius:5}}
            icon={({color, size}) => (
                <Icon 
                name="form-textbox-password" 
                color={color}
                size={size}
               
                />
            )}
            label="Change Password"
            onPress={() => {props.navigation.navigate('Password')}}
        />
         <DrawerItem 
        style={{borderRadius:5}}
            icon={({color, size}) => (
                <Icon 
                name="alphabetical" 
                color={color}
                size={size}
                />
            )}
            label="Change Language"
            onPress={() => {props.navigation.navigate('Language')}}
        />
    </Drawer.Section>
    <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem 
        style={{borderRadius:2}}
            icon={({color, size}) => (
                <Icon 
                name="exit-to-app" 
                color={color}
                size={size}
                />
            )}
            label="Sign Out"
            onPress={() => alert('SignOut Successfully !')}
        />
    </Drawer.Section>
</View>
);
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
    
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: '300',
   // color:"#fff"
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
   // color:"white"
  },
  row: {
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 6,
    borderTopColor: '#fff',
   // borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  tiles:{
   borderRadius:25,
  }
});
