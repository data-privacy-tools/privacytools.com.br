
const TOKEN_KEY = "privacy-tools-auth-token";
const USERNAME_KEY = "privacy-tools-name";
const STEP_TWO = "privacy-tools-auth-stepTwo";
const MAX_ATTEMPTS = 3;
const ATTEMPTS_KEY = "pt-a";

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

    getAttempts() {
        const attempts = localStorage.getItem(ATTEMPTS_KEY);
        return attempts === null ? 0 : (parseInt(attempts) || 0);
    }

    setAttempts(value) {
        localStorage.setItem(ATTEMPTS_KEY, value);
    }

    resetAttempts() {
        this.setAttempts(0);
    }

    incAttempts() {
        const attempts = this.getAttempts();
        this.setAttempts(attempts + 1);
    }

    isMaxAttempts() {
        return this.getAttempts() >= MAX_ATTEMPTS;
    }
}

const AUTH = new Auth();
export default AUTH;