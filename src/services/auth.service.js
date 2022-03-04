import api from "./api";
import TokenService from "./token.service";
import authHeader from "./auth-header";

class AuthService {
    login( { email, password }) 
    {
        return api.post('auth/signIn', {
            email: email,
            password: password
        }).then(response => {
            if (response.data.accessToken) {
                TokenService.setUser(response.data);
            }
            return response.data;
        });
    }
    logout(id) {
        return api.post('auth/signOut', 
        {
            IdUsuario: id
        }, 
        { 
            headers: authHeader() 
        }).then(response => {
            if (response.data.success) {
                TokenService.setUser(response.data);
            }
            return response.data;
        });
    }
    register({ email, password, roles }) {
        return api.post('auth/signUp', {
            NroAccion: email,
            ClaveUsuario: password,
            Roles: roles
        });
    }
}

export default new AuthService();