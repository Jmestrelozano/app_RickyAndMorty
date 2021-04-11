import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import { ApiAxios } from './api/api';
import CardBody from './components/CardBody';
import CardHeader from './components/CardHeader';
import Header from './components/Header';

export default function App() {
  const [Next, setNext] = useState(1)
  const [dataInfo ,setGuardarInfo] = useState([])

  const handleNewPerson = () =>{
    setNext(Next+1)
  }
  useEffect(() => {
 ApiAxios(Next).then(result =>setGuardarInfo(result.data))
  }, [Next])

  return (
  <> 
   <StatusBar style="dark" backgroundColor="white" />
    <View style={styles.container}>
    
   <ScrollView showsVerticalScrollIndicator={false} >
      <Header />
      <View style={{marginTop:40,width:"100%"}}>
          <CardHeader dataInfo={dataInfo} />
          <CardBody dataInfo={dataInfo} />
      </View>
    
      </ScrollView>
    </View>
    <Button title="Siguiente" onPress={()=>{handleNewPerson()}} />
 
    
     
 
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00a5be',
alignItems:"center",

  },
});
