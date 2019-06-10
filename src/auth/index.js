
const TOKEN_KEY = "privacy-tools-auth-token";
const USERNAME_KEY = "privacy-tools-name";
const STEP_TWO = "privacy-tools-auth-stepTwo";

class Auth {
    
    isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
    
    isStepTwo() {
        const stepTwoJson = JSON.parse(localStorage.getItem(STEP_TWO));
        return stepTwoJson && stepTwoJson.stepTwo;
    }

    login(token, name) {
        localStorage.setItem(TOKEN_KEY, token);
        localStorage.setItem(USERNAME_KEY, name);
    }

    loginStepTwo(objJson) {
        localStorage.setItem(STEP_TWO, objJson)
    }

    logout() {
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(USERNAME_KEY);
        localStorage.removeItem(STEP_TWO);
    } 

    getToken() {
        return localStorage.getItem(TOKEN_KEY);
    }

    getUsername() {
        return localStorage.getItem(USERNAME_KEY);
    }

    getStepTwoObj(){
        return JSON.parse(localStorage.getItem(STEP_TWO));
    }

}

const AUTH = new Auth();
export default AUTH;