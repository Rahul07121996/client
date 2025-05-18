import axiosInstance from "../lib/axiosInstance";


export const login = async (username, password) => {
    try {
        const response = await axiosInstance.post('/Auth', { username, password });
        const token = response.data?.token;
        if (!token || typeof token !== 'string') {
            throw new Error('Invalid token received from server.');

        }
        localStorage.setItem('token', token);
        return token;
    } catch (error) {
        throw new error(error);
    }
   
}