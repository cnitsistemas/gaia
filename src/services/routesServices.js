import { mapFetchRoutersResponse } from "../redux/mappers/rotas";
import api from "./apiService";
import { storeDataStorage } from "./asyncStoregeServices";
let STORAGE_KEY = "routes";
import AsyncStorage from "@react-native-async-storage/async-storage";

const getRoutesService = async () => {
  const item = await AsyncStorage.getItem("auth");
  const auth = JSON.parse(item);
  const token = auth && auth.accessToken;

  const url = `api/rotas`;
  const result = await api.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const response = result.data;

  const mappedResult = mapFetchRoutersResponse(response.data.data);

  if (mappedResult && mappedResult.success) {
    await storeDataStorage({ key: STORAGE_KEY, value: mappedResult });

    return mappedResult;
  }

  return mappedResult;
};

export default {
  getRoutesService,
};
