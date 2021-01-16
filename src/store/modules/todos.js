import * as API from '../../api/api';

const state = {
    todos: {},
    errors: {},
    loading: false,
};

const getters = {
    allTodos: state => state.todos,
    allErrors: state => state.errors
};

const actions = {
    async fetchTodos(context) {
        context.commit("SET_LOADING_STATUS", true);
        const response = await API.call({
            config: {
                url: "/todos",
                method: "GET",
            },
            isAuthenticated: true,
        }).catch((err) => err);
        console.log(response);
        context.commit("SET_LOADING_STATUS", false);
        context.commit("GET_TODOS", response.data);
            
    },
    // async addTodos(context, payload) {
        
    //     todos.store(payload).then((response) => {
    //         if(response.status === 200) {
    //             this.$toast.success("Successfully Saved");
    //         }
    //     }).catch((error)=>{
    //         if (error.response.status === 422) {
    //             context.commit("SET_VALIDATION_ERRORS", error.response.data);
    //         }
    //         return Promise.reject(error);
    //     });
    // },
    // async destoryTodo(context, todo) {
    //     context.commit("REMOVE_TODO", todo);
    //     todos.destory(todo.id).then(response => {
    //         if(response.status === 200) {
    //             this.$toast.success("Successfully Deleted");
    //         }
    //     });
    // }
};

const mutations = {
    GET_TODOS(state, todos) {
        state.todos = todos;
    },
    SET_LOADING_STATUS(state, loading) {
        state.loading = loading;
    },
    SET_VALIDATION_ERRORS(state, errors) {
        state.errors = errors;
    },
    REMOVE_TODO(state, todo) {
       
        state.todos = state.todos.filter(item => {
            return item.id !== todo.id
        })
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};