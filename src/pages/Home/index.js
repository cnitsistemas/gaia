import { View, Text, Pressable, Button } from "react-native";
import React, { useEffect } from "react";
import Styles from "../../commom/Styles";
import * as Animatable from "react-native-animatable";
import { connect } from "react-redux";
import { Image } from "react-native";
import Icon, { Icons } from "../../components/Icons";
import Colors from "../../constants/Colors";
import { styles } from "./styles";
import notifee, { EventType } from "@notifee/react-native";

function Home(props) {
  const { navigation, userName, avatar } = props;
  const viewRef = React.useRef(null);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      viewRef.current.fadeInUp();
    });
    return () => unsubscribe;
  }, [navigation, viewRef]);

  useEffect(() => {
    return notifee.onForegroundEvent(({ type, detail }) => {
      switch (type) {
        case EventType.DISMISSED:
          console.log("User dismissed notification", detail.notification);
          break;
        case EventType.PRESS:
          console.log("User pressed notification", detail.notification);
          break;
      }
    });
  }, []);
  return (
    <View style={Styles.container}>
      <Animatable.View
        delay={500}
        ref={viewRef}
        easing={"ease-in-out"}
        style={styles.container}
      >
        <View style={styles.header}>
          <View style={styles.headerText}>
            <Text style={styles.primaryText}>
              Olá,{" "}
              <Text style={{ color: Colors.primaryDark }}>{userName}!</Text>
            </Text>
            <Text style={styles.secondaryText}>
              Esse é o seu jeito facil de gerenciar os alunos e as rotas do
              CNIT.
            </Text>
          </View>
          <View style={styles.headerImg}>
            {!avatar ? (
              <Image
                key={`image-logo-user`}
                source={require("../../../assets/do-utilizador.png")}
                style={styles.img}
              />
            ) : (
              <Image
                key={`image-logo-user`}
                source={{
                  uri: `${avatar}`,
                }}
                style={styles.img}
              />
            )}
          </View>
        </View>
        <View style={styles.containerActions}>
          <Pressable
            style={styles.actions}
            onPress={() => navigation.navigate("ChooseRoute")}
          >
            <Icon
              type={Icons.Ionicons}
              name="clipboard"
              color="white"
              size={40}
            />
            <Text style={styles.textActions}>Frequências</Text>
          </Pressable>
          <Pressable style={styles.actionsDisable} onPress={() => {}}>
            <Icon type={Icons.Ionicons} name="map" color="white" size={40} />
            <Text style={styles.textActions}>Rotas</Text>
          </Pressable>
        </View>
      </Animatable.View>
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    userName: (state.auth.auth && state.auth.auth.name) || null,
    avatar: (state.auth.auth && state.auth.auth.avatar) || null,
  };
};

export default connect(mapStateToProps, {})(Home);
