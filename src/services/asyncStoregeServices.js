import AsyncStorage from "@react-native-async-storage/async-storage";

export const clearStorage = async () => {
    try {
        await AsyncStorage.clear();
        alert('Storage successfully cleared!');
    } catch (e) {
        alert('Failed to clear the async storage.');
    }
};

export const storeDataStorage = async ({ key, value }) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
        // saving error
    }
}

export const getDataStorage = async (key) => {
    let data = '';
    try {
        data = await AsyncStorage.getItem(key) || 'none';
    } catch (error) {
        console.log(error);
    }

    return data != null ? JSON.parse(data) : null;
}