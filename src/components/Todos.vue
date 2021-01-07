<template>
    <div v-if="allTodos.length == 0" class="flex justify-center items-center pt-64">
        <div class="text-4xl text-white font-bold">No Todos Available</div>
    </div>
    <div v-else class="flex flex-wrap py-10 mx-4">
        <div class="flex justify-between items-center w-full mx-8">
            <h3 class="py-6 text-3xl font-bold text-white">Todos</h3>
            <select class="py-3 px-2 rounded-lg focus:outline-none" name="sortBy" id="sortBy" @change="sortBy(sortType)" v-model="sortType">
                <option v-for="item in sortOptions" :value="item.value" :key="item.value">{{item.text}}</option>
            </select>
        </div>
        <div v-for="todo in allTodos" v-bind:key="todo.id" class="px-6 lg:w-1/3 w-full my-4">
            <div class="p-4 rounded bg-denim h-64">
                <div class="flex items-center justify-between">
                    <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0 p-2">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>                </div>
                    <button class="bg-red-500 font-bold text-red-800 p-2 rounded" @click.prevent="destoryTodo(todo)">Delete</button>
                </div>
                <div class="flex-grow ">
                    <h2 class="text-white text-xl title-font font-medium mb-3">{{formatter(todo.date)}}</h2>
                    <p class="text-white leading-relaxed text-sm text-justify">{{todo.description}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
import moment from 'moment';
export default {
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