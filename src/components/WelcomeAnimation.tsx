import React from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';

import loadAnimation from '../assets/watering-plants.json';

export function WelcomeAnimation(){
  return (
    <View style={styles.container}>
      <LottieView 
        source={loadAnimation}
        autoPlay
        loop
        style={styles.animation}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  animation: {
    backgroundColor: 'transparent',
    width: 250,
    height: 250
  }
})