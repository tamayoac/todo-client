import * as API from '../../api/api';

const state = {
    user: null,
    isLoggedIn: false
};

const mutations = {
    SET_USER_DATA (state, userData) {
        state.user = userData
        localStorage.setItem('user', JSON.stringify(userData))
    },
    LOGIN_STATUS(state, isLoggedIn) {
        state.loading = isLoggedIn;
    },
    CLEAR_USER_DATA () {
        localStorage.removeItem('user')
        location.reload()
    }
};

const actions = {
    async login (context, credentials) {
        const response = await API.call({
            config: {
                url: "/login",
                method: "POST",
                data: credentials,
            },
            isAuthenticated: false,
        }).catch((err) => err);
        if(response.status === 200) {
            context.commit("LOGIN_STATUS", true);
            context.commit("SET_USER_DATA", response);
        }
        else {
            context.commit("LOGIN_STATUS", false);
        }
       
    },
  
    async logout (context) {
        context.commit('CLEAR_USER_DATA')
    }
};

const getters = {
    isLoggedIn: state => !!state.user
};

export default {
    state,
    mutations,
    actions,
    getters
}