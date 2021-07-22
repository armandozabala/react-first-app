import React, {useState} from 'react';
import { Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import Fab from '../components/Fab';

const ContadorScreen = () => {

    const [contador, setContador] = useState(0)

  return (
     <View style={ styles.container }>

          <Text style={ styles.title }>Contadorx: { contador } </Text>

          <Fab title="+1"
               onPress={ ()=> setContador(contador + 1)}
               position='br'
          />

          <Fab title="-1"
               position='bl'
               onPress={ ()=> setContador(contador - 1)}
          />
    
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: 45,
    textAlign: 'center',
    top: -15
  },
  fabLocation:{
      position: 'absolute',
      bottom: 20,
      right: 25
  },
  fab: {
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center'
  },
  fabText:{
      color: 'white',
      fontSize: 25,
      fontWeight: 'bold',
      alignSelf: 'center'
  }
})

export default ContadorScreen
