<template>
    <div class="h-screen bg-white flex flex-col space-y-10 justify-center items-center">
        <div class="bg-white w-96 shadow-xl rounded p-5">
            <h1 class="text-3xl font-medium">Register Account </h1>
            <p class="text-sm">Register to Get Started</p>
            <span class="text-red-500  text-sm">{{errorMsg}}</span>
            <form @submit="register" class="space-y-5 mt-5">
                <input v-model="user.first_name" type="text" name="first_name" class="w-full h-12 border border-gray-800 rounded px-3" placeholder="First Name" />
                <input v-model="user.last_name" type="text" name="last_name" class="w-full h-12 border border-gray-800 rounded px-3" placeholder="Last Name" />
                <input v-model="user.email" type="text" name="email" class="w-full h-12 border border-gray-800 rounded px-3" placeholder="Email" />
                <div class="w-full flex items-center border border-gray-800 rounded px-3">
                    <input v-model="user.password" type="password" class="w-full h-12" placeholder="Password" />
                </div>
                <div class="w-full flex items-center border border-gray-800 rounded px-3">
                    <input  v-model="user.password_confirmation" type="password" class="w-full h-12" placeholder="Confirm Password" />
                </div>
                <div class="text-sm ">
                    <p class="inline">Already have an account</p>
                    <router-link :to="{name: 'Login'}" class="font-medium text-blue-900 hover:text-blue-300  p-2">
                        Login ?
                    </router-link>
                </div>
                <button class="text-center w-full bg-blue-900 rounded-md text-white py-3 font-medium">Submit</button>
            </form>
        </div>
    </div>
</template>

<script setup>
    import store from '../store';
    import { useRouter } from 'vue-router';
    import { ref } from 'vue';

    const router = useRouter();
    let errors =[]
    let errorMsg = ref('');

    const user = {
        first_name:'',
        last_name:'',
        email:'',
        password:'',
        password_confirmation:'',
    }

    const register = (ev) =>{
        ev.preventDefault();

        store.dispatch('register',user)
            .then(()=>{
                router.push({
                    name: 'Dashboard'
                })
            })
            .catch((err)=>{
                errorMsg.value = err.response.data.errors
           })
    }
    const passwordShow = () =>{
        if(password_show.value === 'password') return password_show.value = 'text'
        password_show.value = 'password'
    }
</script>

<style scoped>

</style>




<!--Gallery Page/Featured Image-->

<!--Top:Part CASH AMOUNT-->

<!--Vehicle Model:-->

<!--Make:-->

<!--Year-->

<!--Monthly Instalment:-->

<!--Term:-->

<!--Application form Link-->





<!--Inside Part:-->

<!--Full Image Gallery-->

<!--Text Box For Vehicle Specs and description-->

<!--Link for application form-->

