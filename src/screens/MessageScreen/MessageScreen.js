import React, { useEffect, useState } from 'react'
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View, Dimensions, ListView } from 'react-native'
import styles from './styles';
import { firebase } from '../../firebase/config'
import {
    LineChart,
  } from "react-native-chart-kit";



async function getData(user_id) {

    var data = [];
    var time = [];
  
    var snapshot = await firebase.firestore()
      .collection('data')
      .orderBy('createdAt')
      .get()
  
    snapshot.forEach((doc) => {
      const datapoint = doc.data();
      datapoint.id = doc.id;
      if (user_id == datapoint.authorID) {
        data.push(datapoint.text);
        time.push(datapoint.date);
      }
    })  ;
    alert(time)
    alert(data)
  }


export default function MessageScreen({navigation}) {

    const [entityText, setEntityText] = useState('')
    const [entities, setEntities] = useState([])
    const months = ['Jan', 'Feb', 'Mar', 'Apr']
    const amount = [3, 7, 8, 9]
    const entityRef = firebase.firestore().collection('data')
    var user_id = ''
    firebase.auth().onAuthStateChanged(function(user){
        if(user){
            entityRef
            .where("authorID", "==", user.uid)
            .orderBy('createdAt', 'desc')
            .onSnapshot(
                querySnapshot => {
                    const newEntities = []
                    querySnapshot.forEach(doc => {
                        const entity = doc.data()
                        alert(doc.id)
                        entity.id = doc.id
                        newEntities.push(entity)
                    });
                    setEntities(newEntities)
                },
                error => {
                    console.log(error)
                }
            )
            user_id = user.uid
            getData(user_id)
        }else{
            user_id = ''

        }
    })

    const onAddButtonPress = () => {
        if (entityText && entityText.length > 0) {
            const timestamp = firebase.firestore.FieldValue.serverTimestamp();
            var date = new Date().getDate();
            var month = new Date().getMonth();
            var full_date = date + '/' + month
            const data = {
                text: Number(entityText),
                authorID: user_id,
                createdAt: timestamp,
                date: full_date,
            };
            entityRef
                .add(data)
                .then(_doc => {
                    setEntityText('')
                    Keyboard.dismiss()
                })
                .catch((error) => {
                    alert(error)
                });
        }
    }  

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Add your puff count for the day'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEntityText(text)}
                    value={entityText}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableOpacity style={styles.button} onPress={onAddButtonPress}>
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>
            </View>
            <View>
                <LineChart
                    data={{
                    labels: months,
                    datasets: [
                        {
                            data: amount
                        }
                    ]
                    }}
                    width={Dimensions.get("window").width} // from react-native
                    height={220}
                    chartConfig={{
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    }}
                    bezier
                />
            </View>
        </View>
            
    )
}
