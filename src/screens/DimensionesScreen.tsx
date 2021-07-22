import React from 'react'
import { Text, View, StyleSheet, Dimensions, useWindowDimensions } from 'react-native';


const DimensionesScreen = () => {

    const { width, height } = useWindowDimensions();


    return (

        <View style={styles.container}>
            <View style={styles.cajaMorada}>
            
            </View>

            <View style={styles.cajaNaranja}>
            
            </View>

            <Text>{width} - { height }</Text>

        </View>
       
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 600,
        backgroundColor: 'red'
    },
    cajaMorada:{
        backgroundColor: 'blue',
        //width: 50,
        height: '50%'
    },
    cajaNaranja:{
        backgroundColor: 'green'
    }
})

export default DimensionesScreen
