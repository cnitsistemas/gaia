import { ActivityIndicator, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton';
import { View, Text } from 'react-native-ui-lib';
import * as Animatable from 'react-native-animatable';
import { connect } from 'react-redux';
import { login } from './../../redux/actions/auth'
import { customQuicksandFontBoldUI } from '../../utils/fontsUi';
import Colors from '../../constants/Colors';
import CustomDialog from '../../components/CustomDialog';

function SingIn(props) {
  const { login } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    try {
      setIsLoading(true);
      if (email && password) {
        await login({ email: email, password: password })
          .then(() => setIsLoading(false));
      } else {
        setIsLoading(false);
        handleOpenDialog(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleOpenDialog = (value) => {
    setOpenDialog(value);
  }

  return (
    <View paddingH-40 style={styles.main}>
      <View style={styles.container}><Animatable.Image
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
            selectionColor={Colors.primary}
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
            selectionColor={Colors.primary}
          />
          {isLoading ? <ActivityIndicator size="large" color="#c7c7c7" /> :
            <CustomButton
              borderRadius={7}
              text70
              white
              background-primary
              enableShadow
              label="Entrar"
              onPress={() => handleSubmit({ email, password })}
              style={styles.buttonSubimit}
            />
          }

          <CustomDialog
            visible={openDialog}
            title="Aviso"
            content="Para seguir é preciso preencher todos os campos!"
            visibleCancel={false}
            visibleConfirm={true}
            textCancel=""
            textConfirm="Ok entendi"
            handleCancelButton={() => { }}
            handleConfirmButton={() => handleOpenDialog(false)}
          />
        </Animatable.View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center'
  },
  container:{
    flex: 1,
  },
  img: {
    resizeMode: "contain",
    height: "25%",
    width: "100%",
    marginBottom: 50
  },
  form: {
    paddingHorizontal: 30
  },
  welcomeContainer: {
    marginBottom: 3
  },
  welcomeText: {
    ...customQuicksandFontBoldUI,
    fontSize: 26,
    textAlign: "center"
  },
  welcomeSubtext: {
    ...customQuicksandFontBoldUI,
    fontSize: 16,
    textAlign: "center",
    color: "#acacac"
  },
  buttonSubimit: {
    marginTop: 3,
    height: 60,
  }
});

const mapStateToProps = (state) => {
  return {};
}

export default connect(mapStateToProps, {
  login
})(SingIn)