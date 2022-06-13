<template>
    <header class="border-b-2">
        <nav class=" flex mx-auto flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-white container">
            <div>
                <a href="#">
                    <h5 class="font-extrabold">Task Application</h5>
                </a>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg"
                id="menu-button"
                class="h-6 w-6 cursor-pointer md:hidden block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>

            <div class="hidden w-full md:flex md:items-center md:w-auto" id="menu">
                <ul class=" pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0">
                    <li><router-link :to="{name: 'Dashboard'}"  class="md:p-4 py-2 block hover:text-purple-400" href="#">Dashboard </router-link></li>
                    <li><router-link :to="{name: 'TaskForm'}"  class="md:p-4 py-2 block hover:text-purple-400" href="#">Create Task </router-link></li>
                    <li><a @click="logout" class="md:p-4 py-2 block hover:text-purple-400" href="#">Sign Out</a></li>
                </ul>
            </div>
        </nav>
    </header>

</template>

<script setup>

    import store from "../store";
    import { useRouter } from "vue-router";

    const router = useRouter();

    const logout = () =>{
        store.dispatch('logout')
            .then(() =>{
              router.push({
                  name: 'Login'
              })
            });
    }
</script>

<style scoped>

</style>
