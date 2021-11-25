import React, { Component } from 'react';
import {View,Text, KeyboardAvoidingView,TextInput,StyleSheet,ScrollView,TouchableOpacity, Image} from 'react-native';
import MyHeader from '../components/MyHeader'
import db from '../config'
import firebase from 'firebase'

export default class HomeScreen extends Component{
  
constructor(){
    super();
    this.state={
      emailId:'',
      firstName:'',
      lastName:'',
      address:'',
      contact:'',
      docId:''
    }
  }

 getData(){
  var user = firebase.auth().currentUser;
  var email= user.email
 console.log("Hi1"+email)
 db.collection('users').where('username','==',email).get()
  .then(snapshot => {
    console.log("Hi1"+snapshot)
    snapshot.forEach(doc => {
       var data = doc.data()
       console.log("Hi")
       this.setState({
         emailId: data.username,
         firstName:data.first_name,
         lastName:data.last_name,
         address:data.address,
         contact:data.mobile_number,
         docId:doc.id
       })
    });
  })

}

 updateData(){

  db.collection('users').doc(this.state.docId)
    .update({
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      address:this.state.address,
      contact:this.state.contact,
    })
}

componentDidMount(){
  console.log("componentDidMount")
  this.getData()
}



   render(){
        return(

              <View style={{flex:1}} >
                <MyHeader title="Welcome "/>
                <View style={{flex:1,width:'100%',alignItems: 'center'}}>
                  <Text style={styles.formText}> Welcome {this.state.firstName} {this.state.lastName}</Text>          
                  <Text style={styles.formText}> Contact : {this.state.contact}</Text>
                  <Text style={styles.formText}> Address : {this.state.address}</Text>
                  <Text style={styles.formText}> Email : {this.state.emailId}</Text>
              
               
                </View>

              </View>





        )
    }
}


const styles = StyleSheet.create({
   
    formText:{
      width:"75%",
      height:35,
      alignSelf:'center',
      marginTop:20,
      padding:10,
    },
   

}
)