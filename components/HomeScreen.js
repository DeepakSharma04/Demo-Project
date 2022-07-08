import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList
} from 'react-native';
import { FAB } from 'react-native-paper';


export default class HomeScreen extends Component {

 
  constructor(props) { 
    super(props);
    this.state = {
      data:[
        {id:1, image: "https://prod.slm-media.net/medias/86e3de7c-849f-4310-b3df-f9f022e63d4c/original/86e3de7c-849f-4310-b3df-f9f022e63d4c.jpg?v=63700626460", name:"Frank Odalthh",    comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", tags:['tag 1', 'tag 2', 'tag 3']},
        {id:2, image: "https://play-lh.googleusercontent.com/-5OQ-h8AfbOc/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmNdKzVvAeggWmkJb28bjEUWwlwBQ/photo.jpg", name:"John DoeLink",     comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", tags:['tag 1', 'tag 2', 'tag 3']},
        {id:3, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_4ZCS90wUmNsLUTl-UxZkiPCQiJCIshV-ew&usqp=CAU", name:"March SoulLaComa", comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", tags:['tag 1', 'tag 2', 'tag 3']},
        {id:4, image: "https://www.chetanasforum.com/uploads/monthly_2017_10/A.png.748560ecd0dd3a3e8966502c59a179d2.png", name:"Finn DoRemiFaso",  comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", tags:['tag 1', 'tag 2', 'tag 3']},
        {id:5, image: "https://play-lh.googleusercontent.com/-y74TB7AV0PI/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnr34C9pIL-AqSut-aMBNFRVYrIrw/photo.jpg", name:"Maria More More",  comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", tags:['tag 1', 'tag 2', 'tag 3']},
        {id:6, image: "http://platesmania.com/newforum/uploads/monthly_2017_10/Z.png.1f1164f473a4cfaf7e41b594b3d1b844.png", name:"Clark June Boom!", comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", tags:['tag 1', 'tag 2', 'tag 3']},
        {id:7, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCbMJ25XPOt161KxGyCfIgaBJlI-4NSnflSw&usqp=CAU", name:"The googler",      comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", tags:['tag 1', 'tag 2', 'tag 3']},
        {id:8, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZor4-9RY-LtLqFs5-bdmGFgqrJ58fepadMId0-GWuvl3XHjOprNFInmu5NeVKy62EOgs&usqp=CAU", name:"Frank Odalthh",    comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", tags:['tag 1', 'tag 2', 'tag 3']},
        {id:9, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgyeRGMsMFkOlxTxuwU3BcBxrkYYNO_L7bc1KxKt8pYgHR_98OYkTVDsiTQxWD_KpLmY8&usqp=CAU", name:"John DoeLink",     comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", tags:['tag 1', 'tag 2', 'tag 3']},
        {id:10, image: "https://play-lh.googleusercontent.com/-hMqanKb6WnQ/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmEv77sgm3U6qhq6y9D4TbVOSaVnQ/photo.jpg", name:"March SoulLaComa", comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", tags:['tag 1', 'tag 2', 'tag 3']},
        {id:11, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Rg9R-hEYlGrADQxQF67F0Ju22_kdF7wKuA&usqp=CAU", name:"Finn DoRemiFaso",  comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", tags:['tag 1', 'tag 2', 'tag 3']},
        {id:12, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Eo_circle_pink_white_letter-r.svg/768px-Eo_circle_pink_white_letter-r.svg.png", name:"Maria More More",  comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", tags:['tag 1', 'tag 2', 'tag 3']},
        {id:13, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUpdkrSvnb4xZUH5u7xfCAhbiHNpHNJ1TX4oUO51_xlS81Jh7duCZPFHJqIrJClazTNWQ&usqp=CAU", name:"Clark June Boom!", comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", tags:['tag 1', 'tag 2', 'tag 3']},
        {id:14, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmVeZP43JM6XQsZE49p4-90I4sA-7pk5x1nUef3MhWslf2K5OrY9y8cMLv6y61Qq1Hd9g&usqp=CAU", name:"The googler",      comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", tags:['tag 1', 'tag 2', 'tag 3']},
        {id:15, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa6Kn5vvtnhd3Kae-4OGhz7C4vfel95sreeMqKz8-SgPPDAe3oT0oEBlMv5eela57VJQs&usqp=CAU", name:"Frank Odalthh",    comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", tags:['tag 1', 'tag 2', 'tag 3']},
        {id:16, image: "https://i0.wp.com/bane-tech.com/wp-content/uploads/2015/10/H.png?ssl=1", name:"John DoeLink",     comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", tags:['tag 1', 'tag 2', 'tag 3']},
        {id:17, image: "https://play-lh.googleusercontent.com/-5OQ-h8AfbOc/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmNdKzVvAeggWmkJb28bjEUWwlwBQ/photo.jpg", name:"March SoulLaComa", comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", tags:['tag 1', 'tag 2', 'tag 3']},
        {id:18, image: "https://blog.codinghorror.com/content/images/2016/01/discourse-default-avatar-a.png", name:"Finn DoRemiFaso",  comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", tags:['tag 1', 'tag 2', 'tag 3']},
        {id:19, image: "https://lh6.googleusercontent.com/-IPtGW2S38Cw/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rcXKP7S-PsjZ2oGmAqsOf9uDkTjTw/mo/photo.jpg", name:"Maria More More",  comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", tags:['tag 1', 'tag 2', 'tag 3']},
        {id:20, image: "https://i1.sndcdn.com/avatars-000638476566-vbdo7x-t500x500.jpg", name:"Clark June Boom!", comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", tags:['tag 1', 'tag 2', 'tag 3']},
        {id:21, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPR_T-44Sxeq0O1Odq6UEA4qm_IvV8BjJdSelKuo_Yv10OxzmTEIzO8kk5EN7MNefYnFM&usqp=CAU", name:"The googler",      comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", tags:['tag 1', 'tag 2', 'tag 3']},
      ]
    }
  }
  OnPressTicket = (navigation) => {
    this.props.navigation.navigate('TicketDetails')
    console.log("on press ticket")
  };
  

  render() {
    return (
      <View>
      <FlatList
        style={styles.root}
        data={this.state.data}
        extraData={this.state}
        ItemSeparatorComponent={() => {
          return (
            <View style={styles.separator}/>
          )
        }}
        keyExtractor={(item)=>{
          return item.id;
        }}
        renderItem={(item) => {
          const Notification = item.item;
          return(
            <TouchableOpacity onPress={this.OnPressTicket}>
            <View style={styles.container}>
              <TouchableOpacity onPress={() => {}}>
                <Image style={styles.image} source={{uri: Notification.image}}/>
              </TouchableOpacity>
              <View style={styles.content}>
                <View style={styles.contentHeader}>
                  <Text  style={styles.name}>{Notification.name}</Text>
                  <Text style={styles.time}>
                    9:58 am
                  </Text>
                </View>
                <Text rkType='primary3 mediumLine'>{Notification.comment}</Text>
              </View>
            </View>
            </TouchableOpacity>
          );
        }}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#ffffff",
  },
  container: {
    backgroundColor: "#ffffff",
    paddingLeft: 19,
    paddingRight: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  content: {
    backgroundColor: "#ffffff",
    marginLeft: 16,
    flex: 1,
  },
  contentHeader: {
    backgroundColor: "#ffffff",
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6
  },
  separator: {
    height: 1,
    backgroundColor: "#ffffff"
  },
  image:{
    width:45,
    height:45,
    borderRadius:25,
    marginLeft:5,
    marginRight:5,
    marginTop:5
  },
  time:{
    fontSize:11,
    color:"#808080",
  },
  name:{
    fontSize:16,
    fontWeight:"bold",
  },
}); 