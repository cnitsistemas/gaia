import api from "./apiService";
import { storeDataStorage } from "./asyncStoregeServices";
let STORAGE_KEY = 'frequency';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { mapCreateFrequencyResponse, mapFrequencyDataResponse, mapMakeFrequencyResponse } from "../redux/mappers/frequency";

const createFrequencyService = async (data) => {
  try {
    const item = await AsyncStorage.getItem('auth')
    const auth = JSON.parse(item)
    const token = auth && auth.accessToken

    const url = `api/frequencias`;
    const result = await api.post(url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });

    const mappedResult = mapCreateFrequencyResponse(result.data.data);

    if (mappedResult.success) {
      await storeDataStorage({ key: STORAGE_KEY, value: mappedResult });

      return mappedResult;
    }

    return mappedResult;
  } catch (e) {
    return{
      success: false,
      message: 'A rota selecionada não possui alunos cadastrados ou não possui alunos para o horário escolido.'
    }
  }
};

const getDataFrequencyService = async (id) => {
  const item = await AsyncStorage.getItem('auth')
  const auth = JSON.parse(item)
  const token = auth && auth.accessToken

  const url = `api/frequencia-detalhe/${id}`;
  const result = await api.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
  const mappedResult = mapFrequencyDataResponse(result.data.data);

  if (mappedResult.success) {
    const item = await AsyncStorage.getItem('frequency')
    const frequency = JSON.parse(item)
    const newFrequency = {
      ...frequency,
      studants: mappedResult
    }
    await storeDataStorage({ key: STORAGE_KEY, value: newFrequency });

    return mappedResult;
  }

  return mappedResult;
};

const postMakeFrequencyService = async ({ id, data }) => {
  const item = await AsyncStorage.getItem('auth')
  const auth = JSON.parse(item)
  const token = auth && auth.accessToken

  const url = `api/frequencia/${id}`;
  const result = await api.put(url, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
  const mappedResult = mapMakeFrequencyResponse(result.data.data);

  if (mappedResult.success) {
    await storeDataStorage({ key: STORAGE_KEY, value: null });

    return mappedResult;
  }

  return mappedResult;
};


export default {
  createFrequencyService,
  getDataFrequencyService,
  postMakeFrequencyService
};