import axios from 'axios';

const baseURL = "http://localhost:8080";

const api = axios.create({
    baseURL: baseURL,
    headers: {'Content-Type': 'application/json'}
});

class ApiLogin {
    login = (bodyRequest) => {
        return api.post("/auth/session", bodyRequest);
    }

    loginStepTwo = (token, bodyRequest) => {
        return api.post("/auth/session/stepTwo", bodyRequest, { headers: { 'Authorization': 'Bearer '+ token } });
    }

    resetPasswordSendEmail = (bodyRequest) => {
        return api.post("/reset-password", bodyRequest);
    }

    resetPasswordSave= (bodyRequest) => {
        return api.put("/reset-password", bodyRequest);
    }
}

export const apiLogin = () => {
    return new ApiLogin();
}