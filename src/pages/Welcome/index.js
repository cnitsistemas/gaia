import { View, Text, Image, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { IconButton, MD3Colors } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import { AntDesign } from '@expo/vector-icons'; 

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

export default function Welcome() {
  const navigation = useNavigation();
  const [showApp, setShowApp] = useState(false);

  // useEffect(() => {
  //   if (showApp) {
  //     navigation.navigate('SingIn')
  //   }
  // }, [showApp])

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
        <AntDesign name="arrowright" size={24} color="black" />
      </View>
    );
  };

  _renderPrevButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </View>
    );
  };

  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <AntDesign name="check" size={24} color="black" />
      </View>
    );
  };

  if (showApp) {
    return navigation.navigate('SingIn');
  } else {
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
        onDone={() => navigation.navigate('SingIn')}
      />
    </>

    )
  }
}

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
    fontSize: 23,
    paddingHorizontal: 23,
    fontWeight: "bold",
    color: "#ff843a",
    textAlign: "center"
  },
  subtitle: {
    color: "#a5a5a5",
    paddingLeft: 23,
    paddingRight: 23,
    textAlign: "center"
  }
});