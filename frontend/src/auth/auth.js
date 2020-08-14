class Auth {
    constructor() {
        this.isAdmin = false
    }

    login(callback) {
        this.isAdmin = true;
        callback();
    }

    logout(callback) {
        this.isAdmin = false;
        localStorage.removeItem('token');
        callback();
    }

    isAuthenticated() {
        return !!localStorage.getItem('token');
    }
}

export default new Auth();