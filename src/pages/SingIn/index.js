import { ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton';
import { View, Text } from 'react-native-ui-lib';
import * as Animatable from 'react-native-animatable';
import { connect } from 'react-redux';
import { login } from './../../redux/actions/auth'
import CustomDialog from '../../components/CustomDialog';
import { styles } from './styles';
import ToastAlert from '../../components/Toast';
import { useToast } from 'native-base';

function SingIn(props) {
  const { login, onLayoutRootView } = props;
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const showToast = (item) => {
    toast.show({
      duration: 5000,
      placement: "top",
      render: ({
        id: id
      }) => {
        return <ToastAlert id={id} {...item} />;
      }
    })
  }

  const handleSubmit = async ({ email, password }) => {
    try {
      setIsLoading(true);
      if (email && password) {
        await login({ email: email, password: password })
          .then((response) => {
            console.log(response)
            if (response && !response.success) {
              showToast({
                id: 'error-login',
                title: "Falha no Login!",
                status: 'error',
                variant: "solid",
                description:
                  (response.message || "Erro ao realizar o login do usuario. Usuário ou senha incorretos."),
                isClosable: false
              });
              setIsLoading(false);
            } else {
              setIsLoading(false);
            }
          })
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
  };

  return (
    <View paddingH-40 style={styles.main} onLayout={onLayoutRootView}>
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
            onChangeText={text => setEmail(text)}
            maxLength={30}
            size="md"
          />
          <CustomInput
            placeholder={'Senha'}
            onChangeText={text => setPassword(text)}
            maxLength={30}
            size="md"
            type="password"
          />
          {isLoading ? <View style={styles.buttonLoading}>
            <ActivityIndicator size="large" color="#c7c7c7" />
          </View> :
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

const mapStateToProps = (state) => {
  return {};
}

export default connect(mapStateToProps, {
  login
})(SingIn)