import { mapLoginCreateData } from "../redux/mappers/mapAuth";
import api from "./apiService";
import { storeDataStorage } from "./asyncStoregeServices";
let STORAGE_KEY = 'auth';
let CREDENTIALS = 'credentials';

const logIn = async (data) => {
  try {
    const url = `api/login`;
    const result = await api.post(url, data);
    const mappedResult = mapLoginCreateData(result.data.result);
    if (mappedResult && mappedResult.success) {
      await storeDataStorage({ key: STORAGE_KEY, value: mappedResult });
      await storeDataStorage({ key: CREDENTIALS, value: data });

      return mappedResult;
    }
    return mappedResult;
  }
  catch (e) {
    return{
      success: false,
      message: 'Erro ao realizar o login do usuario. Usuário ou senha incorretos.'
    }
  }
};

const logOut = async () => {
  await storeDataStorage({ key: STORAGE_KEY, value: {} });
  await storeDataStorage({ key: CREDENTIALS, value: null });

  return {
    status: "success",
    message: "You are logged out",
  };
};

export default {
  logIn,
  logOut,
};