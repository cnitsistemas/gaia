import React from 'react'
import { Center, Image } from "native-base";
import { Text, View } from 'react-native'
import { styles } from './styles';

export default function Notice() {
  return (
    <View style={styles.container}>
      <Center>
        <Image source={require('../../../assets/aviso.png')} alt="Alternate Text" size="xl" />
        <Text style={styles.description} >
          Área em desenvolvimento
        </Text>
        <Text style={styles.text} >
          Estamos trabalhando para levar até nossos usuários a melhor experiência. Por isso, logo essa sessão estará disponivel para uso.
        </Text>
      </Center>
    </View>
  )
}