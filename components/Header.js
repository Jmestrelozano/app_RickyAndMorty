import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import bolita from  "../assets/img/bolita.png"
import logo from "../assets/img/logo.png"


const Header = () => {
    return (
        <View>
            <View>
            <Image style={styles.imageBolita} source={bolita} />
            </View>
           
           <View style={{position:"absolute", top:40}}>
            <Image style={styles.logo} source={logo} />   
           </View>
            
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    imageBolita:{
        width:320,
        height:100
    },
    logo:{
        width:320,
        height:100
    }
})
