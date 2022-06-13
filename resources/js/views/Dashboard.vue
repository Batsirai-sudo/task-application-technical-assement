<template>
    <PageComponent>
        <template v-slot:title>
            {{title}}
        </template>
        <Loader  v-if="loading"/>
        <div v-else class="px-10">
            <div class="grid grid-cols-1  gap-6  sm:grid-cols-2 md:grid-cols-3">
                <div v-for="task in tasks"
                     :key="task.id"
                     class="flex flex-col relative  py-4 px-6 shadow-md bg-white hover:bg-gray-50 h-[270px]">
                    <StatusComponent :label="task.status"  />
                    <h4 class="mt-8  text-lg font-bold">{{task.title}}</h4>
                    <div v-html="task.description" class="overflow-hidden text-sm  flex-1"></div>
                    <div class="flex justify-between pt-2">
                        <router-link
                            :to="{name: 'TaskForm', params: { id: task.id}}"
                            class="flex py-2 px-4 border border-transparent text-sm rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-offset-2 focus:ring-indigo-500" >
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m16.474 5.408l2.118 2.117m-.756-3.982L12.109 9.27a2.118 2.118 0 0 0-.58 1.082L11 13l2.648-.53c.41-.082.786-.283 1.082-.579l5.727-5.727a1.853 1.853 0 1 0-2.621-2.621Z"/><path d="M19 15v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3"/></g></svg>
                            Edit</router-link>
                        <button v-if="task.id"
                                type="button"
                                @click="deleteTask(task)">
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="red" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16l-1.58 14.22A2 2 0 0 1 16.432 22H7.568a2 2 0 0 1-1.988-1.78L4 6Zm3.345-2.853A2 2 0 0 1 9.154 2h5.692a2 2 0 0 1 1.81 1.147L18 6H6l1.345-2.853ZM2 6h20m-12 5v5m4-5v5"/></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </PageComponent>
</template>
<!--StatusComponent-->
<script setup>
    import PageComponent from '../components/PageComponent';
    import StatusComponent from '../components/StatusComponent';
    import Loader from '../components/Loader';
    import store from '../store';
    import { computed } from 'vue';

    const tasks = computed(()=> store.state.tasks)
    const loading = computed(()=> store.state.loading)

    store.dispatch('getTasks')
    const title="Dashboard";
    const deleteTask = (task)=>{

        if(confirm('Are you sure you want to delete')){
            store.dispatch('deleteTask',task.id)
                 .then(()=>{
                     store.dispatch('getTasks')
                 })
        }

    }
</script>

<style scoped>

</style>

