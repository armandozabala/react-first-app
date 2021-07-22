import React, { useState } from 'react'
import { StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View, Platform } from 'react-native'

interface Props {
     title: string;
     position?: 'br' | 'bl';
     onPress: () => void;
}

const Fab = (  { title, onPress, position = 'br'}: Props) => {


    const ios = () => {
        return(
            <TouchableOpacity style={ [styles.fabLocation, (position === 'bl') ? styles.left : styles.right] }
                              onPress={ onPress }
                              activeOpacity={0.8}
            >  
        
                <View style={styles.fab}>
                <Text style = { styles.fabText}> { title } </Text>
                </View>
    
            </TouchableOpacity>
        )

    }

    const android = () => {
         return(
            <View style={ [styles.fabLocation, (position === 'bl') ? styles.left : styles.right] }>  
        
            <TouchableNativeFeedback onPress={ onPress }
                                     background={ TouchableNativeFeedback.Ripple('black', false, 30) }
            >
                <View style={styles.fab}>
                <Text style = { styles.fabText}> { title } </Text>
                </View>
    
            </TouchableNativeFeedback>
            </View>
         )
    }

    return (
        (Platform.OS === 'ios') ? ios() : android() 
    )
}



const styles = StyleSheet.create({
    fabLocation:{
        position: 'absolute',
        bottom: 20
    },
    right:{
        right: 25
    },
    left:{
        left: 25
    },
    fab: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 8
    },
    fabText:{
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
  })

export default Fab
