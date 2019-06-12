import axios from 'axios';

const baseURL = "http://localhost:8080";

const api = axios.create({
    baseURL: baseURL,
    headers: {'Content-Type': 'application/json'}
});

class Api {
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

    saveComapany = (bodyRequest) => {
        return api.request({method: 'post', url: '/api/company/new', data: bodyRequest});
    }
}

export const apiInstance = () => {
    return new Api();
}