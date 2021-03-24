import React, { useState, useEffect }  from 'react';
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  View,
  SafeAreaView
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AuthLoadingScreen({navigation}) {


  const [email,setEmail] =  useState("");
  const [password,setPassword] =  useState("");

  const url ="http://localhost:3003/api/login"
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email, password: password })
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@user');
      //const profile = JSON.parse(jsonValue);

  

      //return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
    }
  };

  useEffect( () => {

    const user = getData()
    if(user != null) {
      navigation.navigate("Auth")
    } else {
      navigation.navigate("App")
    }

  }, []);

 


      


  
    
  return (

    <SafeAreaView  style={styles.container}>
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      width:'100%',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    input: {
      width: '50%',
      borderWidth: 1,
      marginTop: 10,
      marginBottom: 10,
    },
    buttonView: {
  
      width:'50%',
      backgroundColor: '#fff',
      alignItems: 'center',
      flexDirection: "row",
      justifyContent: 'space-between',
    },
    enter: {
  
    },
  
  });