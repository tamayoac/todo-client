import api from './api';

export default {
    all() {
        return api.get('todos');
    },
    store(data) {
        return api.post('todos', data)
    },
    destory(id) {
        return api.delete(`todos/${id}`);
    }
}