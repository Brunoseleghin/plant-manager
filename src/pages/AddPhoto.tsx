import React from 'react';
import { 
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Button } from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function AddPhoto({ navigation }: any){

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Sem a permissão não é possivel selecionar uma foto! 😢');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === false) {
      handleAddPhoto();
    }
    
    console.log(pickerResult);
  }

  function handleAddPhoto(){
    navigation.navigate('Confirmation');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>
        Que tal adicionar uma foto para seu usuário?
        </Text>

        <Text style={styles.emoji}>
          😎🤳
        </Text>

        <View style={styles.footer}>
          <View style={styles.addPhoto}>
            <Button
              title='Adicionar Foto'
              onPress={openImagePickerAsync}
            />
          </View>

          <View style={styles.noPhoto}>
            <Button
              title='Agora não'
              onPress={handleAddPhoto}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 30
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.heading,
    color: colors.heading,
    textAlign: 'center',
    marginBottom: 40
  },
  emoji: {
    fontSize: 84,
    textAlign: 'center',
    marginBottom: 40
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  addPhoto: {
    width: '50%',
    paddingHorizontal: 5
  },
  noPhoto: {
    width: '50%',
    paddingHorizontal: 5
  }
})