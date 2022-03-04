import api from './api';

class UserService {
    getPublicContent() {
        return api.get('seguridad/usuario');
    }
    getUserBoard() {
        return api.get('seguridad/usuario');
    }
    getModeratorBoard() {
        return api.get('seguridad/usuario');
    }
    getAdminBoard() {
        return api.get('seguridad/usuario');
    }
}

export default new UserService();