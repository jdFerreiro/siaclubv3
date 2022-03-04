import AuthService from '../services/auth.service';

const dataLogin = JSON.parse(localStorage.getItem('dataLogin'));

const initialState = dataLogin
    ? { status: { loggedIn: true }, dataLogin }
    : { status: { loggedIn: false }, user: null };


export const auth = {
    namespaced: true,
    state: initialState,
    actions: {
        login({ commit }, user) {
            return AuthService.login(user)
            .then(
                user => {
                    commit('loginSuccess', user);
                    return Promise.resolve(user);
                },
                error => {
                    commit('loginFailure');
                    return Promise.reject(error);
                }
            );
        },
        logout({ commit }, userId) {
            AuthService.logout(userId);
            commit('logout');
        },
        register({ commit }, user) {
            return AuthService.register(user).then(
                response => {
                    commit('registerSuccess');
                    return Promise.resolve(response.data);
                },
                error => {
                    commit('registerFailure');
                    return Promise.reject(error);
                }
            );
        },
        refreshToken({commit}, accessToken) {
            commit('refreshToken', accessToken);
        }
    },
    mutations: {
        loginSuccess(state, user) {
            state.status.loggedIn = true;
            state.status.user = user;
        },
        loginFailure(state) {
            state.status.loggedIn = false;
            state.status.user = null;
        },
        logout(state) {
            state.status.loggedIn = false;
            state.status.user = null;
        },
        registerSuccess(state) {
            state.status.loggedIn = false;
        },
        registerFailure(state) {
            state.status.loggedIn = false;
        },
        refreshToken(state, accessToken) {
            state.status.loggedIn = true;
            state.status.user = { ...state.status.user, accessToken: accessToken };
        }
    }
};
