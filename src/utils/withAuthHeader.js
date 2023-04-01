import { getDataStorage } from "../services/asyncStoregeServices";

const withAuthHeader = async (includeHeaderKey = true) => {
    await getDataStorage('@auth').then((response) =>{
        if (response) {
            const auth = `${response.tokenType} ${response.accessToken}`
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
    })
    .catch((e) => {
        console.log(e)
    });
}

export default withAuthHeader;