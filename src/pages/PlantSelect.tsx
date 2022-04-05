import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList
} from 'react-native';

import { Header } from '../components/Header';
import { EnvironmentButton } from '../components/EnvironmentButton';
import { PlantCardPrimary } from '../components/PlantCardPrimary';
import api from '../services/api';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface EnvironmentProps {
  key: string;
  title: string;
}

interface PlantProps {
  id: string;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: [string];
  frequency: {
    times: number;
    repeat_every: string;
  }
}

export function PlantSelect(){

  const [environments, setEnvironments] = useState<EnvironmentProps[]>([]);
  const [plants, setPlants] = useState<PlantProps[]>([]);

  // useEffect -> hook react que na hora que a tela é montada
  // ele é carragado antes.
  // Neste caso, queremos que o useEffect carregue os dados da
  // api antes da tela ser montada.
  useEffect(() => {
    // async await utilizado pois como na busca na api ela não me
    // retorna exatamente no mesmo momento, ou seja vai depender de 
    // internet. Eu preciso utilizar o await para garantir que ele
    // vai aguardar a api devolver os dados que eu preciso no data.
    async function fetchEnvironment(){
      const { data } = await api
      .get('plants_environments?_sort=title&_order=asc');
      setEnvironments([
        // Criação de um objeto manualmente - Todos.
        {
          key: 'all',
          title: 'Todos',
        },
        // Uso do spread operator data para passar junto com o objeto Todos
        // os valores da api ["Sala","Quarto","Cozinha","Banheiro"].
        ...data
      ]);
    }

    fetchEnvironment();
  },[]);

  useEffect(() => {
    async function fetchPlants(){
      const { data } = await api
      .get('plants?_sort=name&_order=asc');
      setPlants(data);
    }

    fetchPlants();
  })

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />

        <Text style={styles.title}>Em qual ambiente</Text>
        <Text style={styles.subtitle}>você quer colocar sua planta?</Text>
      </View>
    
      <View>
        <FlatList
          data={environments}
          renderItem={({ item }) => (
            <EnvironmentButton
              title={item.title}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.environmentList}
        />
      </View>

      <View style={styles.plants}>
        <FlatList 
          data={plants}
          renderItem={({ item }) => (
            <PlantCardPrimary 
              data={ item }
            />
          )}
          showsVerticalScrollIndicator={false}
          numColumns={2}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  header: {
    paddingHorizontal: 30
  },
  title: {
    fontFamily: fonts.heading,
    fontSize: 17,
    color: colors.heading,
    lineHeight: 20,
    marginTop: 10
  },
  subtitle: {
    fontFamily: fonts.text,
    fontSize: 17,
    color: colors.heading,
    lineHeight: 22
  },
  environmentList: {
    height: 40,
    justifyContent: 'center',
    paddingBottom: 5,
    marginLeft: 30,
    marginVertical: 30
  },
  plants: {
    flex: 1,
    paddingHorizontal: 32,
    justifyContent: 'center'
  }
})