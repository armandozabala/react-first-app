import React from 'react'
import { View, StyleSheet } from 'react-native';

const TareaScreen = () => {
    return (
        <View style={ styles.container }>
            <View style={styles.cajaMorada}/>
            <View style={styles.cajaAzul}/>
            <View style={styles.cajaNaranja}/>
        </View>
    )
}

const styles = StyleSheet.create({
     container:{
         flex: 1,
         backgroundColor: '#F78AE0',
         justifyContent: 'center',
         alignItems: 'center',
         flexDirection: 'row'
       
     },
     cajaMorada:{
       
         width: 100,
         height: 100,
         borderWidth: 10,
         borderColor: 'white',
         backgroundColor: '#B0F566'
     },
     cajaAzul:{
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#6638F0'
    },
    cajaNaranja:{
       
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor:  '#FA6D02'
    }
})

export default TareaScreen
