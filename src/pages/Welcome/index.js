import { View, Text, Image, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { IconButton, MD3Colors } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import { AntDesign } from '@expo/vector-icons';
import { customQuicksandFontBoldUI, customQuicksandFontRegularUI } from '../../utils/fontsUi';
import { setFirstAccess } from '../../redux/actions/ui'
import { connect } from 'react-redux';
import Icon, {Icons} from '../../components/Icons';

const slides = [
  {
    key: '1',
    title: 'Bem-vindo ao Sistema de Frequência Escolar do CNIT',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum, nibh vel lobortis tempor, ipsum odio dignissim elit, non placerat purus odio sit amet urna.',
    image: require('../../../assets/slides/slide1.png'),
  },
  {
    key: '2',
    title: 'Realização de gestão e frequência de Alunos',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum, nibh vel lobortis tempor, ipsum odio dignissim elit, non placerat purus odio sit amet urna.',
    image: require('../../../assets/slides/slide2.png'),
  },
  {
    key: '3',
    title: 'Cadastro e gerenciamento de rotas',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum, nibh vel lobortis tempor, ipsum odio dignissim elit, non placerat purus odio sit amet urna.',
    image: require('../../../assets/slides/slide3.png'),
  },
]

function Welcome(props) {
  const { firstAccess, setFirstAccess } = props;

  function renderSlides({ index, item }) {
    return <>
      <Animatable.View delay={600} animation="fadeInUp" style={styles.container}>
        <Image key={`image-${index}`} source={item.image}
          style={styles.img} />
        <Text style={styles.text} >
          {item.title}
        </Text>
        <Text style={styles.subtitle}>
          {item.subtitle}
        </Text>
      </Animatable.View>
    </>
  };

  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <AntDesign name="arrowright" size={24} color="#ff843a" />
      </View>
    );
  };

  _renderPrevButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <AntDesign name="arrowleft" size={24} color="#ff843a" />
      </View>
    );
  };

  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <AntDesign name="check" size={24} color="#ff843a" />
      </View>
    );
  };

  if (firstAccess) {
    return (<>
      <AppIntroSlider
        renderItem={renderSlides}
        data={slides}
        showPrevButton={true}
        renderDoneButton={this._renderDoneButton}
        renderNextButton={this._renderNextButton}
        renderPrevButton={this._renderPrevButton}
        activeDotStyle={{
          backgroundColor: '#ff7a2d'
        }}
        onDone={() => setFirstAccess(false)}
      />
    </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    firstAccess: state.ui.firstAccess,
    accessToken: state.auth.auth && state.auth.auth.accessToken || null,
  };
}

export default connect(mapStateToProps, {
  setFirstAccess
})(Welcome)

const styles = StyleSheet.create({
  buttonCircle: {
    width: 50,
    height: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  img: {
    resizeMode: "cover",
    height: "70%",
    width: "100%"
  },
  text: {
    ...customQuicksandFontBoldUI,
    fontSize: 23,
    paddingHorizontal: 23,
    color: "#ff843a",
    textAlign: "center"
  },
  subtitle: {
    ...customQuicksandFontRegularUI,
    color: "#a5a5a5",
    paddingLeft: 23,
    paddingRight: 23,
    textAlign: "center"
  }
});