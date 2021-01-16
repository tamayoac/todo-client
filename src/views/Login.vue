<template>
    <div class="absolute z-10 ml-64 flex items-center h-screen">
        <div class="bg-storm bg-opacity-25 rounded-lg shadow-xl p-10 max-w-sm mx-auto">
            <img src="" alt="">
            <div class="font-thin text-3xl text-white">Welcome</div>
            <div class="text-lg text-white">Enter your credentials below</div>
            <form @submit.prevent="login">
                <div class="flex flex-wrap pt-10">
                    <div class="w-full bg-storm rounded-md">
                        <div class="text-white pt-3 px-3 text-sm font-bold">E-MAIL</div>
                        <input type="text" class="bg-storm w-full px-3 py-2 rounded-b-md focus:outline-none text-white" placeholder="your@email.com" v-model="form.username">
                    </div>
                    <div class="w-full bg-storm mt-3 rounded-md">
                        <div class="text-white pt-3 px-3 text-sm font-bold">PASSWORD</div>
                        <input type="password" class="bg-storm w-full px-3 py-2 rounded-b-md focus:outline-none text-white" placeholder="Password" v-model="form.password">
                    </div>
                    <div class="w-full mt-2 mb-3">
                        <input type="checkbox" class="mr-2"><span class="text-sm text-white">Remember Me</span>
                    </div>

                    <div class="w-full mt-5">
                        <button class="text-sm font-semibold text-center px-3 py-2 bg-gray-100 w-full rounded-md uppercase transform hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out focus:outline-none">Login</button>
                    </div>

                    <div class="flex items-center justify-between mt-5 w-full text-white">
                        <div class="text-sm font-bold">Forgot Your Password?</div>
                        <router-link to="/register" class="text-sm font-bold">Register</router-link>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <Background />
</template>

<script>
import Background from '../components/landing/Background.vue'
export default {
    components: {
        Background
    },
    data: function() {
    return {
        form: {
            username: "",
            password: "",
            }
        };
    },
    methods: {
        login() {
            this.$store.dispatch("login", this.form).then(() => {
                this.$router.push({ name: 'Todos' });
            }).catch(err => {
                console.log(err);
            });
        }
    },
 
}
</script>