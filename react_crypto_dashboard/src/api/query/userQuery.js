import Axios from "../axios";
const USER_URL = "/user";

export const signinUser = async ({ password, email }) => {
    try {
        const response = await Axios.post(`${USER_URL}/signin`, { email, password });
        const data = response.data; // Directly use response.data
        console.log(`signinUser funcation data is ${JSON.stringify(data)}`);
        return data;
    } catch (error) {
        throw new Error(error.response?.data?.message || "An error occurred");
    }
};

export const signupUser = async ({ password, email, firstName, lastName }) => {
    try {
        const response = await Axios.post(`${USER_URL}/signup`, { email, password, firstName, lastName });
        const data = response.data; // Directly use response.data
        // console.log("Data is ", JSON.stringify(data));
        return data;
    } catch (error) {
        throw new Error(error.response?.data?.message || "An error occurred");
    }
};

export const sendVerificationMail = async ({ email }) => {
    if (!email) {
        throw new Error("Email is required");
    }
    try {
        const response = await Axios.post(`${USER_URL}/send-verification-mail`, { email });
        const data = response.data;
        console.log(`mail data is ${JSON.stringify(data)}`)
        return data;
    } catch (error) {
        throw new Error(error.response?.data?.message || "An error occurred");
    }
};
export const verifyEmailAddressSignup = async ({ token }) => {
    if (!token) {
        throw new Error("Token is required");
    }
    try {
        const response = await Axios.post(`${USER_URL}/verfiy-user-mail`, { token });
        const data = response.data;
        console.log(`token data is ${JSON.stringify(data)}`)
        return data;
    } catch (error) {
        throw new Error(error.response?.data?.message || "An error occurred");
    }
};

export const sendForgotMail = async ({ email }) => {
    if (!email) {
        throw new Error("Email is required");
    }
    try {
        const response = await Axios.post(`${USER_URL}/forgot-password`, { email });
        const data = response.data;
        console.log(`forgot maimail data is ${JSON.stringify(data)}`)
        return data;
    } catch (error) {
        throw new Error(error.response?.data?.message || "An error occurred");
    }
};

export const verifyForgotToken = async ({ token,password }) => {
    if (!token) {
        throw new Error("Token is required");
    }
    if (!password) {
        throw new Error("Password is required");
    }
    
    try {
        const response = await Axios.post(`${USER_URL}/verify-forgot-mail`, { token,password });
        const data = response.data;
        console.log(`token data is ${JSON.stringify(data)}`)
        return data;
    } catch (error) {
        throw new Error(error.response?.data?.message || "An error occurred");
    }
};