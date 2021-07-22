import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxObjectModelScreen = () => {
    return (
        <View style={styles.container}>
                <Text style={styles.title}>Box Object Model</Text>
        </View>
    )
}

const styles = StyleSheet.create({
     title:{
          fontSize: 20,
          borderWidth: 10,
          padding: 10,
          marginHorizontal: 20,
          paddingHorizontal: 100,
          paddingVertical: 20
     },
     container:{
          backgroundColor: 'red',
          
          flex: 1    
    }
})

export default BoxObjectModelScreen
