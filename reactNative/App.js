import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Login from './Components/Login';
import Navigator from './Routes/Stack';
import Records from './Components/Records';
import CreateRecord from './Components/CreateRecord';

export default function App() {
  return (

    <Navigator/>
  
 
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
});
