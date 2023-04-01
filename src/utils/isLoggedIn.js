import AsyncStorage from "@react-native-async-storage/async-storage";

const isLoggedIn = () => {
    const item = AsyncStorage.getItem('auth')
    console.log(item)
    // var auth = item != null ? JSON.parse(item) : null;

    // if (auth && auth.auth && auth.auth.accessToken) {
    //     return true;
    // }

    // return false;
}

export default isLoggedIn;