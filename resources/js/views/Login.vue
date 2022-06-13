<template>
    <!-- component -->
    <div class="h-screen bg-white flex flex-col space-y-10 justify-center items-center">
        <div class="bg-white w-96 shadow-xl rounded p-5">
            <h1 class="text-3xl font-medium">Welcome</h1>
            <p class="text-sm">Login to start using the Task Application</p>
             <span class="text-red-500  text-sm">{{errorMsg}}</span>
            <form @submit="login" class="space-y-5 mt-5">
                <input v-model="user.email" type="text" class="w-full h-12 border border-gray-800 rounded px-3" placeholder="Email" />
                <div class="w-full flex items-center border border-gray-800 rounded px-3">
                    <input v-model="user.password" type="password" class="w-4/5 h-12" placeholder="Password" />
                    <span class="text-blue-700 hover:bg-blue-400 rounded-md px-3">Show</span>
                </div>

                <div class="text-sm ">
                    <p class="inline">Dont have an account</p>
                    <router-link :to="{name: 'Register'}" class="font-medium text-blue-900 hover:text-blue-300  p-2">
                        Register ?
                    </router-link>
                </div>

                <button class="text-center w-full bg-blue-900 rounded-md text-white py-3 font-medium">Login</button>
            </form>
        </div>
    </div>
</template>

<script setup>
    import store from "../store";
    import { useRouter } from 'vue-router';
    import { ref } from 'vue';

    const router = useRouter();
    const user ={
        email: "",
        password:'',
    }
    let errorMsg = ref('');

    const login = (ev) =>{
        ev.preventDefault();

        store.dispatch('login', user)
          .then(()=>{
              router.push({
                 name: 'Dashboard'
              })
          })
          .catch((err)=>{
              errorMsg.value = err.response.data.error
          })}
</script>

<style scoped>

</style>
