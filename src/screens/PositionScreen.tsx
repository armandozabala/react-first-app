import React from 'react'
import { StyleSheet, View } from 'react-native';

const PositionScreen = () => {
    return (
        <View style={styles.container}>
                    
                    <View style={styles.cajaMorada}/>

                    <View style={styles.cajaNaranja}/>

                    <View style={styles.cajaVerde}/>

        </View>
    )
}

const styles = StyleSheet.create({
        container:{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#4AF2A1'
        },
        cajaMorada:{
            width: 100,
            height: 100,
            backgroundColor: '#B0F566',
            borderWidth: 10,
            borderColor: 'white',
            position: 'absolute',
            top: 0,
            right: 0
        },
        cajaNaranja:{
            width: 100,
            height: 100,
            backgroundColor: '#F78AE0',
            borderWidth: 10,
            borderColor: 'white'
        },
        cajaVerde:{
            width: 100,
            height: 100,
            backgroundColor: '#B0F566',
            borderWidth: 10,
            borderColor: 'white',
            position: 'absolute',
            bottom: 0,
            left: 0
        }
});

export default PositionScreen
