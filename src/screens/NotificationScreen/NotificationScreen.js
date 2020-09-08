import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity
} from 'react-native';

export default class Timer extends React.Component{
  constructor() {
    super();
    this.state = {
      countDown : false,
      remainingSeconds : 10 * 60,
      interval : null,
    };
  }

  handleStart() {
    var ival = setInterval(() => {
      if ((this.state.remainingSeconds > 0) && this.state.countDown) {
        this.setState(prevState => {
          return {remainingSeconds : prevState.remainingSeconds - 1};
        });
      }
    }, 1000);

    this.setState(prevState => {
      return {
        remainingSeconds : prevState.remainingSeconds, 
        countDown : true,
        interval : ival,
      };
    });
  }

  handleStop() {
    clearInterval(this.state.interval);
    this.setState(prevState => {
      return {
        remainingSeconds : prevState.remainingSeconds,
        countDown : false,
        interval : null,
      };
    });
  }

  handleReset() {
    clearInterval(this.state.interval);
    this.setState(() => {
      return {
        remainingSeconds : 10 * 60, 
        countDown : false,
      };
    });
  }

  formatRemainingSeconds(remainingSeconds) {
    let numMinutes = Math.floor(remainingSeconds / 60);
    let numSeconds = remainingSeconds % 60;
    let formattedTime = "";

    if (numMinutes.toString().length == 1) {
      formattedTime += '0';
      formattedTime += numMinutes.toString();
    } else {
      formattedTime += numMinutes.toString();
    }

    formattedTime += ":";

    if (numSeconds.toString().length == 1) {
      formattedTime += '0';
      formattedTime += numSeconds.toString();
    } else {
      formattedTime += numSeconds.toString();
    }

    return formattedTime;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.timertext}>TIMER</Text>
        <Text style={styles.timer}> 
          {this.formatRemainingSeconds(this.state.remainingSeconds)} 
        </Text>
        <TouchableOpacity onPress={() => this.handleStart()} style={styles.button}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.handleStop()} style={styles.button}>
          <Text style={styles.buttonText}>Stop</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.handleReset()} style={styles.button}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
        <Text>During these 10 minutes, we recommend getting some exercise!</Text>
        <Text>Or you can also check out the hobbies tab to see what hobbies you can do!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container : {
      backgroundColor: '#FFFCE0',
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center'  
    },
    timertext : {
      backgroundColor: '#FFFCE0',
      fontSize: 30, 
      textAlign: 'center',
    },
    timer :{
      backgroundColor: '#FFFCE0',
      fontSize: 20, 
      textAlign: 'center',
    },
    button: {
      width: 300,
      backgroundColor: '#521228',
      borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13,
      textAlign: 'center',
    }, 
    buttonText : {
      fontSize: 16,
      fontWeight: '500',
      color: "#ffffff", 
      textAlign: 'center'
    }

  });