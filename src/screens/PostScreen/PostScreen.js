import * as React from 'react';
import { Image, Text, TouchableOpacity, SafeAreaView, StyleSheet, TextInput, View, Button, ScrollView } from 'react-native';
//import { createAppContainer, createSwitchNavigator } from 'react-navigation';
//import Questionnaire from './Questionnaire';

class AllQuestionnaire extends React.Component{
  onPress = () =>
    this.props.navigation.navigate('Profile', { name: this.state.name });

  render(){
    return(
      <View>
      <Questionnaire/>
      <TouchableOpacity style={styles.quiz} onPress={this.onPress}>
          <Text style={styles.quizbutton}>Return to Profile</Text>
      </TouchableOpacity>
      </View>
    )
  }
}
class Plan extends React.Component{
  constructor(props){
    super(props)

    this.state = ({
      stage: '',
      activity1: '', 
      activity2: '',
      trigger1: '',
      contact1: '',
    })
  }
  onPress = () =>
    this.props.navigation.navigate('Profile', { name: this.state.name });

  render(){
    return (
      <View style={styles.container}>
        <Text>
          Create your personal recovery plan now! 
          </Text> 
        <Text>
            What stage were you sorted into? (Stage 1-4)?
          </Text>
        <TextInput style={styles.inputBox} 
          underlineColorAndroid='rgba(0,0,0,0)' 
          placeholder='Stage Number'
          placeholderTextColor = "#ffffff"
          ref={(input) => this.stage = input}
          selectionColor='#fff'
          />  
      
        <Text>
            What are two activities that create feelings of wellness for you?
          </Text>
        <TextInput style={styles.inputBox} 
          underlineColorAndroid='rgba(0,0,0,0)' 
          placeholder='Activity 1'
          placeholderTextColor = "#ffffff"
          ref={(input) => this.activity1 = input}
          selectionColor='#fff'
          />
        <TextInput style={styles.inputBox} 
          underlineColorAndroid='rgba(0,0,0,0)' 
          placeholder='Activity 2'
          placeholderTextColor = "#ffffff"
          ref={(input) => this.activity2 = input}
          selectionColor='#fff'
          />       
        <Text>
            What is one of your personal triggers? 
          </Text>
        <TextInput style={styles.inputBox} 
          underlineColorAndroid='rgba(0,0,0,0)' 
          placeholder='Trigger 1'
          placeholderTextColor = "#ffffff"
          ref={(input) => this.trigger1 = input}
          selectionColor='#fff'
          />
        <Text>
            What is the contact information of a person you feel comfortable turning to when you feel triggers?
          </Text>
          <TextInput style={styles.inputBox} 
            underlineColorAndroid='rgba(0,0,0,0)' 
            placeholder='Contact 1'
            placeholderTextColor = "#ffffff"
            ref={(input) => this.contact1 = input}
            selectionColor='#fff'
            />
              <Text>
          Whenever you feel cravings or triggers please refer to your recovery plan for wellness suggestions. 
          </Text> 
          <TouchableOpacity style={styles.button} onPress={this.onPress}>
          <Text style={styles.buttonText}>Return to Profile</Text>
        </TouchableOpacity>
      </View>
  )}
}

export default class Profile extends React.Component{
   constructor(props){
    super(props)

    this.state = ({
      name: '',
      birthday: '', 
      gender: ''
    })
  }

  render(){
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.instructions}>
          Profile
        </Text> 
        <TextInput style={styles.inputBox} 
          underlineColorAndroid='rgba(0,0,0,0)' 
          placeholder='Name'
          placeholderTextColor = "#ffffff"
          ref={(input) => this.name = input}
          selectionColor='#fff'
          />
        <TouchableOpacity style={styles.button} onPress = {() =>
      this.props.navigation.navigate("AllQuestionnaire", { name: this.state.name })}>
          <Text style={styles.buttonText}>Go to Questionnare</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress = {() =>
      this.props.navigation.navigate("Plan", { name: this.state.name })}>
          <Text style={styles.buttonText}>My Personalized Plan!</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress = {() =>
      this.props.navigation.navigate("Resources", { name: this.state.name })}>
          <Text style={styles.buttonText}>Resources</Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
  }                         
}
const styles = StyleSheet.create({
    quiz : {
      backgroundColor: '#FFFCE0',
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
      textAlignVertical: 'bottom'  
    },
    container : {
      backgroundColor: '#FFFCE0',
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center'  
    },
    button: {
      width: 300,
      backgroundColor: '#521228',
      borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13,
    }, 
    quizbutton: {
      width: 300,
      backgroundColor: '#521228',
      borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13,
      fontSize: 16,
      fontWeight: '500',
      color: "#ffffff", 
      textAlign: 'center'
    }, 
    buttonText : {
      fontSize: 16,
      fontWeight: '500',
      color: "#ffffff", 
      textAlign: 'center'
    },
    inputBox : {
      width: 300,
      borderRadius: 25,
      backgroundColor: '#DEC5CE',
      paddingHorizontal: 16,
      color: '#00000',
      marginVertical: 10,
      paddingVertical: 12
    }, 
    instructions : {
      backgroundColor: '#FFFCE0',
      fontSize: 30, 
    },
  });

//export default createAppContainer(createSwitchNavigator(
//  {
//    Profile,
//    Plan,
//    AllQuestionnaire
//  },
//));