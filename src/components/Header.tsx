import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image
} from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import userImg from '../assets/profile-pic.png'
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Header(){
  return(
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>Bruno</Text>
      </View>

      <Image
        source={userImg}
        style={styles.image}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 30,
    marginTop: getStatusBarHeight()
  },
  greeting: {
    fontFamily: fonts.text,
    fontSize: 32,
    color: colors.heading
  },
  userName: {
    fontFamily: fonts.heading,
    fontSize: 32,
    color: colors.heading,
    lineHeight: 35
  },
  image: {
    width: 65,
    height: 65,
    borderRadius: 40
  },

})