import { Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton';
import { View, Text, Button } from 'react-native-ui-lib';
import * as Animatable from 'react-native-animatable';

export default function SingIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View paddingH-30>
      <Animatable.Image
        delay={600}
        animation="fadeInUp"
        key={`image-logo-singin`}
        source={require('../../../assets/logo-sisfa.png')}
        style={styles.img}
      />
      <Animatable.View
        delay={600}
        animation="fadeIn"
        style={styles.welcomeContainer}
      >
        <Text style={styles.welcomeText}>
          Seja muito bem-vindo!
        </Text>
        <Text style={styles.welcomeSubtext}>
          Faça o login para continuar.
        </Text>
      </Animatable.View>
      <Animatable.View
        delay={600}
        animation="fadeIn">
        <CustomInput
          placeholder={'Email'}
          floatingPlaceholder={true}
          onChangeText={text => setEmail(text)}
          enableErrors={true}
          validate={['required', 'email']}
          validationMessage={['Campo requerido', 'Email é invalida']}
          maxLength={30}
          text70
          selectionColor="#ff843a"
        />
        <CustomInput
          placeholder={'Senha'}
          floatingPlaceholder={true}
          onChangeText={text => setPassword(text)}
          enableErrors={true}
          validate={['required', 'password', (value) => value.length > 6]}
          validationMessage={['Campo requerido', 'Senha é invalida', 'Password is too short']}
          maxLength={30}
          text70
          secureTextEntry={true}
          selectionColor="#ff843a"
        />

        <CustomButton
          borderRadius={7}
          text70
          white
          background-primary
          enableShadow
          label="Login"
          onPress={() => console.log({ email, password })}
          style={styles.buttonSubimit}
        />
      </Animatable.View>
    </View>
  )
}

const styles = StyleSheet.create({
  img: {
    resizeMode: "contain",
    height: "50%",
    width: "100%"
  },
  form: {
    paddingHorizontal: 30
  },
  welcomeContainer: {
    marginBottom: 3
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center"
  },
  welcomeSubtext: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    color: "#acacac"
  },
  buttonSubimit: {
    marginTop: 3
  }
});