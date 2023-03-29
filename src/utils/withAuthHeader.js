import AsyncStorage from "@react-native-async-storage/async-storage"

const withAuthHeader = async (includeHeaderKey = true) => {
    const value = await AsyncStorage.getItem('auth');
    const sessionUser = JSON.parse(value)
    if (sessionUser) {
        const auth = `${sessionUser.auth.tokenType} ${sessionUser.auth.accessToken}`
        if (includeHeaderKey) {
            return {
                headers: {
                    Authorization: auth
                }
            }
        } else {
            return {
                Authorization: auth
            }
        }
    }
    return null;
}

export default withAuthHeader;