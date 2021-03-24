import { StatusBar } from 'expo-status-bar';
import React,{ useState } from 'react';
import { StyleSheet, Text, View , TextInput,Button,SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';





export default function Login({navigation}) {


  const [email,setEmail] =  useState("");
  const [password,setPassword] =  useState("");

  const url ="http://localhost:3003/api/login"
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email, password: password })
  };

  const toRegister = () => {
    navigation.navigate('Register')
  }



  const toSignIn = () => {

   
    fetch(url,requestOptions)
    .then ( response => response.json()) 
    .then(data => {
      //console.log(data.result.length);

      if (data.result.length==1) {
        storeData(data.result[0])
        //console.log(2);
        navigation.push('Records')
      } else {
        
      }
  });


  }

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
 
      await AsyncStorage.setItem('@user', jsonValue)
    } catch (e) {
      // saving error
    }
  }
    
  
  return (

    <SafeAreaView  style={styles.container}>
      <Text>Email </Text>
      <TextInput style={styles.input} 
      onChange={e=>setEmail(e.target.value)} ></TextInput>
      <Text>Password</Text>
      <TextInput style={styles.input}
       onChange={e=>setPassword(e.target.value)} secureTextEntry={true} ></TextInput>
      <View style={styles.buttonView}>
        <Button style={styles.container}
            title="Sign In" onPress={toSignIn}
            > </Button>
        <Button style={styles.container}
            title="register" onPress={toRegister}
            > </Button>
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


