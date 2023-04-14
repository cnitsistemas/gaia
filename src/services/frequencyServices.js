import api from "./apiService";
import { storeDataStorage } from "./asyncStoregeServices";
let STORAGE_KEY = 'frequency';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { mapCreateFrequencyResponse } from "../redux/mappers/frequency";

const createFrequencyService = async (data) => {
  const item = await AsyncStorage.getItem('auth')
  const auth = JSON.parse(item)
  const token = auth && auth.accessToken

  const url = `api/frequencias`;
  const result = await api.post(url, data, {
    headers:{
      Authorization: `Bearer ${token}`,
    }
  });

  const mappedResult = mapCreateFrequencyResponse(result.data.data);

  if (mappedResult.success) {
    await storeDataStorage({ key: STORAGE_KEY, value: mappedResult });

    return mappedResult;
  }

  return mappedResult;
};

export default {
  createFrequencyService,
};