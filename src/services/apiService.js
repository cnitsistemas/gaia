import axios from "axios";
import { useEffect } from "react";
import { API_URL } from '../../config';
import { connect } from "react-redux";

// axios instance
const api = axios.create({
    responseType: 'json',
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    }
});

const AxiosInterceptor = (props) => {
    const { children, logout} = props;
    useEffect(() => {
        const resInterceptor = (response) => {
            return response;
        };

        const errInterceptor = (error) => {
            if (error.response.status === 401) {
                console.log('Token is invalid')
            }

            return Promise.reject();
        };

        const interceptor = api.interceptors.response.use(
            resInterceptor,
            errInterceptor
        );

        return () => api.interceptors.response.eject(interceptor);
    }, []);

    return children;
};


const mapStateToProps = (state) => { }

export default connect(mapStateToProps, {
})(api)
export { AxiosInterceptor };