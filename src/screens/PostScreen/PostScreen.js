import * as React from 'react';
import { useCallback } from "react";
import { Text, SafeAreaView, TouchableOpacity, Linking } from 'react-native';
import styles from './styles';


export default function PostScreen() {
  const supportedURL = "https://e-jectapp.weebly.com/"

  const OpenURLButton = ({ url, children }) => {
    const handlePress = useCallback(async () => {
      // Checking if the link is supported for links with custom URL scheme.
      const supported = await Linking.canOpenURL(url);
  
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
      }, [url]);
      return (<TouchableOpacity style={styles.button} onPress={() => {
        Linking.openURL(url);
      }}><Text style={styles.buttonText}>Resources</Text>
      </TouchableOpacity>)}

    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.instructions}>
          Profile
        </Text> 
        {/* <TouchableOpacity style={styles.button} onPress = {() =>
      this.props.navigation.navigate("AllQuestionnaire")}>
          <Text style={styles.buttonText}>Go to Questionnare</Text>
        </TouchableOpacity> */}
          <OpenURLButton url={supportedURL}></OpenURLButton>
      
      </SafeAreaView>
    )
  }                         
