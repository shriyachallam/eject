import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
})