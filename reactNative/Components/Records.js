import { StatusBar } from 'expo-status-bar';
import React,{useState , useEffect} from 'react';
import { StyleSheet, Text, View , FlatList, TextInput,Button,SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';





export default function Records({navigation}) {



  const [clinic,setClinic] =  useState(null);
  const [record,setRecord] =  useState([]);
  const [loading, setLoading] = useState(false);


  const url ="http://localhost:3003/api/showrecords"
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ clinic: clinic })
  };

 
  useEffect(  () => {

    async function getData()  {
      try {
        const jsonValue = await AsyncStorage.getItem('@user');
        const profile = JSON.parse(jsonValue);
  
        setClinic(profile.clinic_name)
        //console.log(profile.clinic_name)
        //console.log( clinic)
        //return jsonValue != null ? JSON.parse(jsonValue) : null;
      } catch(e) {
        // error reading value
      }
    }
    getData();
    //loadRecord();
    //setLoading(true);

  }, []);


  const loadRecord =  () => {


    fetch(url,requestOptions)
    .then ( response => response.json()) 
    .then(data => {

      //console.log(data.length);
     // console.log(data);
      if (data.length>0) {
        console.log(data[0]);
        setRecord(data);
        //showRecords()
      } else {
        
      }
  });
  }



  if (clinic != null && loading== false) {
    loadRecord();
    setLoading(true)
  }


  const toCreateRecord = () => {
    navigation.push('CreateRecord')
  }
  
  return (

    <SafeAreaView  style={styles.container}>
      <View  style={styles.buttonView}>
      <Button title="Create Record" onPress={toCreateRecord}></Button>
      <Button title="Logout"></Button>
      </View>
      <Text >Records</Text>
    
      <FlatList 
      style={styles.flatList}
      data = {record} 
      keyExtractor={item => item.id.toString()}
      renderItem={({item})=> {
        
        return (
        <View  style={styles.buttonView}>
          <Text style={styles.buttonView} >Clinic: {" "} {item.clinic} </Text>
          <Text style={styles.buttonView} >Doctor Name:{" "} {item.doctor_name}</Text>
          <Text  style={styles.buttonView}>Patient Name:{" "} {item.patient_name}</Text>
          <Text style={styles.buttonView} >Diagnosis:{" "} {item.diagnosis}</Text>
          <Text style={styles.buttonView} >Consulation Fee:{" "} {item.consulation_fee}</Text>
          <Text style={styles.buttonView}>Date And Time: {" "}{item.date_and_time}</Text>
          <Text style={styles.buttonView} >Follow Up:{" "} {item.follow_up}</Text>
        </View>
        )

      }}
      />


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    width:'100%',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  input: {
    width: '50%',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  
  buttonView: {
    
    width:'100%',
    backgroundColor: '#fff',
    //alignSelf: "baseline",
    alignSelf: 'flex-start',
    flexDirection: "row",
    justifyContent: 'space-between',
  },

  flatList: {
    
    width:'100%',

  },

  text: {
    width:'14.2857142857%'

  },
  enter: {

  },

});

