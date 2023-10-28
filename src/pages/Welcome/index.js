import { View, Text, Image } from "react-native";
import React from "react";
import AppIntroSlider from "react-native-app-intro-slider";
import * as Animatable from "react-native-animatable";
import { AntDesign } from "@expo/vector-icons";
import { setFirstAccess } from "../../redux/actions/ui";
import { connect } from "react-redux";
import { styles } from "./styles";

const slides = [
  {
    key: "1",
    title:
      "Bem-vindo ao aplicativo de Frequência de Transporte Escolar do tecnogatt",
    subtitle:
      "A tecnogatt é uma pioneira na região com serviços de transporte de escolar com inovação tecnológica. Garantindo o acesso à educação e a informação.",
    image: require("../../../assets/slides/slide1.png"),
  },
  {
    key: "2",
    title: "Realização de gestão e frequência de Alunos",
    subtitle:
      "Realize chamada de frenquentar de alunos no transporte escolar, acesse as informações dos alunos por rota.",
    image: require("../../../assets/slides/slide2.png"),
  },
  {
    key: "3",
    title: "Cadastro e gerenciamento de rotas",
    subtitle:
      "Cadastre e gerencie as informações da rota, com geolocalização de ponto de partida, ponto de chegada e seus respectivos horários.",
    image: require("../../../assets/slides/slide3.png"),
  },
];

function Welcome(props) {
  const { firstAccess, setFirstAccess } = props;

  function renderSlides({ index, item }) {
    return (
      <>
        <Animatable.View
          delay={600}
          animation="fadeInUp"
          style={styles.container}
        >
          <Image
            key={`image-${index}`}
            source={item.image}
            style={styles.img}
          />
          <Text style={styles.text}>{item.title}</Text>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
        </Animatable.View>
      </>
    );
  }

  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <AntDesign name="arrowright" size={24} color="#32386f" />
      </View>
    );
  };

  _renderPrevButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <AntDesign name="arrowleft" size={24} color="#32386f" />
      </View>
    );
  };

  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <AntDesign name="check" size={24} color="#32386f" />
      </View>
    );
  };

  if (firstAccess) {
    return (
      <>
        <AppIntroSlider
          renderItem={renderSlides}
          data={slides}
          showPrevButton={true}
          renderDoneButton={this._renderDoneButton}
          renderNextButton={this._renderNextButton}
          renderPrevButton={this._renderPrevButton}
          activeDotStyle={{
            backgroundColor: "#32386f",
          }}
          onDone={() => setFirstAccess(false)}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    firstAccess: state.ui.firstAccess,
    accessToken: (state.auth.auth && state.auth.auth.accessToken) || null,
  };
};

export default connect(mapStateToProps, {
  setFirstAccess,
})(Welcome);
