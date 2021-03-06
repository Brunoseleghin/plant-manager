import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  View
} from 'react-native';
import { Feather } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar';

import { Animation } from '../components/Animation';
import wateringPlants from '../assets/watering-plants.json';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Welcome({ navigation }: any){

  function handleStart() {
    navigation.navigate('UserIdentification')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Gerencie {'\n'}
          suas plantas de {'\n'}
          forma fácil
        </Text>

        <View style={styles.image}>
          <Animation loadAnimation={wateringPlants}/>
        </View>
        

        <Text style={styles.subtitle}>
            Não esqueça mais de regar suas {'\n'}
            plantas. Nós cuidamos de lembrar você {'\n'}
            sempre que precisar.
        </Text>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.6}
          onPress={handleStart}
        >
          <Feather 
            name="chevron-right"
            style={styles.buttonIcon}
          />
        </TouchableOpacity>
      </View>
      <StatusBar style='auto'/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    //paddingHorizontal: 20
  },
  title: {
    fontSize: 28,
    lineHeight: 34,
    fontFamily: fonts.heading,
    //fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38
  },
  image: {
    height: Dimensions.get('window').width * 0.7
  },
  subtitle: {
    fontSize: 18,
    fontFamily: fonts.text,
    color: colors.body_dark,
    textAlign: 'center',
    //paddingHorizontal: 20
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 56
  },
  buttonIcon: {
    fontSize: 32,
    color: colors.white
  }
});
