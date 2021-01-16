<template>
    <Navbar />
    <div class="max-w-3xl mx-auto">
        <AddTodo />
        <TodoList />
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
import moment from 'moment';
import Navbar from '../components/Navbar.vue';
import AddTodo from '../components/AddTodo.vue';
import TodoList from '../components/TodoList.vue';
export default {
  components: { Navbar, AddTodo, TodoList },
    data: function() {
        return {
            sortType: 'recent',
            sortOptions:  [
                { text: 'RECENT', value: 'recent' },
                { text: 'OLDEST', value: 'oldest' },
            ]
        };
    },
    name: 'Todos',
    methods: {
        formatter(date) {
            return moment(date).format('LL');
        },
        destoryTodo(todo) {
            this.$store.dispatch('destoryTodo', todo);
        },
        sortBy(sortkey) {
            if(sortkey === "recent") {
                
                return this.allTodos.sort((a, b) => a.date > b.date ? 1 : -1);
            } else {
                return this.allTodos.sort((a, b) => a.date < b.date ? 1 : -1);
            }
          
        },
    },
    
    mounted() {
        this.$store.dispatch("fetchTodos");
    },
    
    computed: { 
        ...mapGetters(["allTodos"]),
    },
}
</script>