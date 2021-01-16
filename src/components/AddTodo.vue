<template>
    <div class="flex flex-wrap px-12">
        <h3 class="w-full py-10 text-xl text-black font-bold uppercase">Add Todo</h3>

        <form method="POST" @submit.prevent="store" class="flex flex-wrap w-full shadow-xl">
            <div class="flex flex-wrap w-full bg-white rounded-lg">
                <div class="lg:w-2/5 w-full">
                    <input type="date"
                        class="px-6 py-3 focus:outline-none w-full h-full lg:rounded-l-lg rounded-t-lg"
                        :class="allErrors.date ? 'border-2 border-red-700': '' "
                        v-model="form.date">
                </div>
                <div class="lg:w-2/5 w-full">
                    <input placeholder="Add Todo..." 
                        class="px-6 py-3 focus:outline-none w-full h-full " 
                        type="text"
                        :class="allErrors.description ? 'border-2 border-red-700': '' "
                        v-model="form.description">
                </div>
                <div class="lg:w-1/5 w-full">
                    <button class="w-full h-full py-3 px-6 bg-denim text-white focus:outline-none hover:bg-gray-600 hover:text-white lg:rounded-r-lg">Create</button>
                </div>
            </div>
            
            
            
        </form>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
    export default {
        data: function() {
            return {
                form: {
                    date: this.date,
                    description: this.description,
                }
            };
        },
        methods: {
            store() {
                this.$store.dispatch("addTodos", this.form);
                this.$store.dispatch("fetchTodos");
            }
        },
        computed: {
            ...mapGetters(["allErrors"]),
        },
    }
</script>