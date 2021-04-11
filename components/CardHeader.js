import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

const CardHeader = ({dataInfo}) => {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.textName,
          {
            transform: [{ rotate: "-90deg" }],
          },
        ]}
      >
        <Text>NAME</Text>
      </View>

      <View>
        <View>
          <Image
            style={{ width: 200, height: 200, borderRadius: 100 }}
            source={{
              uri: dataInfo.image,
            }}
          />

            <View style={{display:"flex",alignItems:"center",padding:20,width:"100%"}}>
                   <Text style={styles.titulo}>{dataInfo.name}</Text>
          <Text style={styles.div}></Text>
            </View>
       
        </View>
      </View>
  
    </View>
  );
};

export default CardHeader;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  textName: {
    display: "flex",
    justifyContent: "center",
  },
  titulo:{
      fontWeight:"bold",
      fontSize:25,
      textAlign:"center",
      marginTop:20
  },
  div:{

    width: 87,
    height: 6,
    backgroundColor: "#F7391C",

  }
});
