import service from "../services/estadoServicio.service";

export const estadoServicio = {
    namespaced: true,
    state: {
        status: {
            success: false,
        },
    },
    actions: {
        getAll({ commit }) {
            return service.getAll().then(
                (response) => {
                    commit("getAllSuccess");
                    return Promise.resolve(response);
                },
                (error) => {
                    commit("getAllFailure");
                    return Promise.reject(error);
                }
            );
        },
        getById({ commit }, id) {
            return service.getById(id).then(
                (response) => {
                    commit("getByIdSuccess");
                    return Promise.resolve(response);
                },
                (error) => {
                    commit("getByIdFailure");
                    return Promise.reject(error);
                }
            );
        },
        create({ commit }, description) {
            return service.create(description).then(
                (response) => {
                    commit("createSuccess");
                    return Promise.resolve(response);
                },
                (error) => {
                    commit("createFailure");
                    return Promise.reject(error);
                }
            );
        },
        update({ commit }, objData) {
            return service.update(objData).then(
                (response) => {
                    commit("updateSuccess");
                    return Promise.resolve(response);
                },
                (error) => {
                    commit("updateFailure");
                    return Promise.reject(error);
                }
            );
        },
        delete({ commit }, id) {
                return service.delete(id).then(
                (response) => {
                    commit("deleteSuccess");
                    return Promise.resolve(response);
                },
                (error) => {
                    commit("deleteFailure");
                    return Promise.reject(error);
                }
            );
        },
            },
    mutations: {
        getAllSuccess(state) {
            state.status.success = true;
        },
        getAllFailure(state) {
            state.status.success = false;
        },
        getByIdSuccess(state) {
            state.status.success = true;
        },
        getByIdFailure(state) {
            state.status.success = false;
        },
        createSuccess(state) {
            state.status.success = true;
        },
        createFailure(state) {
            state.status.success = false;
        },
        updateSuccess(state) {
            state.status.success = true;
        },
        updateFailure(state) {
            state.status.success = false;
        },
        deleteSuccess(state) {
            state.status.success = true;
        },
        deleteFailure(state) {
            state.status.success = false;
        },
    },
};
