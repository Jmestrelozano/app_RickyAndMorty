import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

const CardBody = ({dataInfo}) => {
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
        <Text>ABOUT</Text>
      </View>

      <View>
      <View style={styles.contenedorInfo}><Text>Genero: {dataInfo.gender}</Text></View>
      <View style={styles.contenedorInfo}><Text>Especies: {dataInfo.species}</Text></View>
      <View style={styles.contenedorInfo}><Text>Estado: {dataInfo.status}</Text></View>
      </View>
  
    </View>
  );
};

export default CardBody;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  textName: {
    display: "flex",
    justifyContent: "center",
  },
 
  contenedorInfo:{

    backgroundColor: "#685128",
    padding: 10,
    color: "white",
    borderRadius: 10,
    textAlign: "left",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom:20

  }
});
