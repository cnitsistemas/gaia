import React, { useEffect, useLayoutEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { getRoutes } from "../../redux/actions/rotas";
import { connect } from "react-redux";
import CustomButton from "../../components/CustomButton";
import Loading from "../../components/Loading";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import SearchableDropdown from "react-native-searchable-dropdown";
import Colors from "../../constants/Colors";
import CustomDialog from "../../components/CustomDialog";
import { HStack, VStack } from "native-base";
import { saveRoute } from "../../redux/actions/frequency";

function ChooseRoute(props) {
  const { getRoutes, routes, saveRoute } = props;
  const navigation = useNavigation();
  const [selectedRouter, setSelectedRouter] = useState([
    {
      id: "Lista de Rotas",
      name: "Lista de Rotas",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [screenLoading, setScreenLoading] = useState(true);
  const [isVisibleDialog, setIsVisibleDialog] = useState(false);

  useLayoutEffect(() => {
    async function featchRoutesList() {
      getRoutes()
        .then((response) => {
          if (response) setSelectedRouter(response[0]);
          setScreenLoading(false);
        })
        .catch(() => setScreenLoading(false));
    }

    featchRoutesList();
  }, []);

  useEffect(() => {
    if (routes && routes.length > 0) {
      setSelectedRouter(routes && routes[0]);
    }
  }, [routes]);

  const handleCreateFrequency = () => {
    setIsLoading(true);
    setIsVisibleDialog(false);
    saveRoute(selectedRouter);
    navigation.navigate("Frequency");
    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      {screenLoading ? (
        <Loading />
      ) : (
        <>
          <View style={styles.description}>
            <Text style={styles.textDescription}>
              Ao criar uma frequência você estabelece informações importantes
              para a criação do fluxo de chamadas dos alunos . Baseado em
              informações como Data, horário, rota e turno, é possivel listar os
              alunos que irão participar da realização da frequência.{" "}
            </Text>
          </View>
          <View>
            <SearchableDropdown
              onTextChange={(text) => console.log(text)}
              onItemSelect={(item) => setSelectedRouter(item)}
              containerStyle={{ padding: 5, maxHeight: 650 }}
              selectedItems={selectedRouter}
              textInputStyle={{
                height: 55,
                fontSize: 16,
                marginBottom: 20,
                borderColor: "#32386f",
                borderBottomWidth: 1,
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
                borderBottomLeftRadius: 5,
                borderBottomRightRadius: 5,
              }}
              itemStyle={{
                padding: 10,
                marginTop: 5,
              }}
              itemTextStyle={{
                color: Colors.darkGray,
                borderColor: Colors.newGray,
                borderBottomWidth: 1,
                paddingBottom: 10,
              }}
              itemsContainerStyle={{
                maxHeight: "70%",
              }}
              items={routes}
              defaultIndex={2}
              placeholder="Selecione a rota"
              resetValue={false}
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.action}>
            {isLoading ? (
              <ActivityIndicator size="large" color="#c7c7c7" />
            ) : (
              <CustomButton
                borderRadius={7}
                label="SELECIONAR"
                onPress={() => setIsVisibleDialog(true)}
                style={styles.buttonSubimit}
              />
            )}
          </View>
        </>
      )}
      <CustomDialog
        visible={isVisibleDialog}
        setVisible={setIsVisibleDialog}
        title={`Rota selecionada`}
        content={
          <>
            <VStack space={3}>
              <HStack alignItems="center" justifyContent="space-between">
                <Text style={styles.textDialog}>
                  {selectedRouter && selectedRouter.name}
                </Text>
              </HStack>
            </VStack>
          </>
        }
        visibleCancel={false}
        visibleConfirm={true}
        textCancel={``}
        textConfirm={`Confirmar`}
        handleCancelButton={() => setIsVisibleDialog(false)}
        handleConfirmButton={() => handleCreateFrequency()}
        size={"lg"}
        closeOnOverlayClick={false}
      />
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    routes: (state.routes && state.routes.routes) || null,
  };
};

export default connect(mapStateToProps, {
  getRoutes,
  saveRoute,
})(ChooseRoute);
