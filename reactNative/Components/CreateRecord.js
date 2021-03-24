import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View , TextInput,Button,SafeAreaView } from 'react-native';
import {Picker} from '@react-native-picker/picker';





export default function CreateRecord({navigation}) {

    const [clinic,setClinic] =  useState("");
    const [doctorName,setDoctorName] =  useState("");
    const [patient,setPatient] =  useState("");
    const [diagnosis,setDiagnosis] =  useState("");
    const [medication,setMedication] =  useState("");
    const [consulationFee,setConsulationFee] =  useState("");
    const [selected, setSelected] = useState("Yes");

    const url ="http://localhost:3003/api/createrecord"
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ clinic:clinic, doctorName:doctorName,patient:patient,
         diagnosis:diagnosis, medication:medication,consulationFee:consulationFee, followUp:selected })
  };
  

  
    const backprev = () => {
      navigation.push('Records')
    }

    const register = () => {
        fetch(url,requestOptions)
        .then ( response => response.json()) 
        .then(data => {
    
          if (data.result) {
            navigation.push('Records')
          } else {
            
          }
      });
      }

  return (

    <SafeAreaView  style={styles.container}>
      <Text>Clinic</Text>
      <TextInput style={styles.input}
     onChange={e=>setClinic(e.target.value)} ></TextInput>
      <Text>Doctor Name</Text>
      <TextInput style={styles.input}
     onChange={e=>setDoctorName(e.target.value)} ></TextInput>
      <Text>Patient</Text>
      <TextInput style={styles.input}
      onChange={e=>setPatient(e.target.value)}></TextInput>
      <Text>Diagnosis</Text>
      <TextInput style={styles.input}
      onChange={e=>setDiagnosis(e.target.value)}></TextInput>
      <Text>Medication</Text>
      <TextInput style={styles.input}
      onChange={e=>setMedication(e.target.value)}></TextInput>
      <Text>Consulation Fee</Text>
      <TextInput style={styles.input}
      onChange={e=>setConsulationFee(e.target.value)}></TextInput>
      <Text>Follow Up</Text>
      <Picker
             style={styles.input}
            selectedValue={selected}
            onValueChange={(itemValue, itemIndex) =>
                setSelected(itemValue)
            }>
            <Picker.Item label="Yes" value="Yes" />
            <Picker.Item label="No" value="No" />
        </Picker>

      <View style={styles.buttonView}>
        <Button style={styles.container}
            title="Back" onPress={backprev}
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
    height: 'fit-content',
    width:'50%',
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  Picker: {
    width:"100%"
  },

});
