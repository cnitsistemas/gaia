import AsyncStorage from "@react-native-async-storage/async-storage";
import { mapLoginCreateData } from "../redux/mappers/mapAuth";
import api from "./apiService";
import { storeDataStorage } from "./asyncStoregeServices";
let STORAGE_KEY = 'auth';

const logIn = async (data) => {
  const url = `api/login`;
  const result = await api.post(url, data);
  const mappedResult = mapLoginCreateData(result.data.result);

  if (mappedResult.success) {
    await storeDataStorage({ key: STORAGE_KEY, value: mappedResult });

    return mappedResult;
  }

  return mappedResult;
};

const logOut = async () => {
  await storeDataStorage({ key: STORAGE_KEY, value: {} });

  return {
    status: "success",
    message: "You are logged out",
  };
};

export default {
  logIn,
  logOut,
};