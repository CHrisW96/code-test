import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View , TextInput,Button, SafeAreaView } from 'react-native';


export default function Register({navigation}) {


  const [email,setEmail] =  useState("");
  const [password,setPassword] =  useState("");
  const [clinicName,setClinicName] =  useState("");
  const [phoneNumber,setphoneNumber] =  useState("");
  const [address,setAddress] =  useState("");

  const url ="http://localhost:3003/api/register"
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: email, password: password, clinicName: clinicName, phoneNumber: phoneNumber, address:address })
};



  const backHome = () => {
    navigation.push('Login')
  }

  const register = () => {
    fetch(url,requestOptions)
    .then ( response => response.json()) 
    .then(data => {

      if (data.result) {
        navigation.push('Login')
      } else {
        
      }
  });
  }
  
  return (
    <SafeAreaView  style={styles.container}>
      <Text>Email</Text>
      <TextInput style={styles.input}
     onChange={e=>setEmail(e.target.value)} ></TextInput>
      <Text>Password</Text>
      <TextInput style={styles.input} secureTextEntry={true} 
     onChange={e=>setPassword(e.target.value)} ></TextInput>
      <Text>Clinic name</Text>
      <TextInput style={styles.input}
      onChange={e=>setClinicName(e.target.value)}></TextInput>
      <Text>Phone number</Text>
      <TextInput style={styles.input}
      onChange={e=>setphoneNumber(e.target.value)}></TextInput>
      <Text>Address</Text>
      <TextInput style={styles.input}
      onChange={e=>setAddress(e.target.value)}></TextInput>

      <View style={styles.buttonView}>
        <Button style={styles.container}
            title="Back" onPress={backHome}
            > </Button>
        <Button style={styles.container}
            title="Enter" onPress={register}
            > </Button>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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


