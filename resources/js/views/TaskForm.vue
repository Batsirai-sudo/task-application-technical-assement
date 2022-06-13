<template>
    <PageComponent>
        <template v-slot:title>
            {{model.id ? model.title : "Create A Task"}}
        </template>
        <div>
            <div>
                <div class="max-w-2xl mx-auto">
                    <div class="mt-5 md:mt-0 md:col-span-2">

                        <form @submit="submitTask" action="#" method="POST">
                            <div class="shadow sm:rounded-md sm:overflow-hidden">

                                <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                                    <p class="text-red-500 text-sm">{{errorMsg}}</p>
                                    <div class="">
                                        <div class="col-span-3 sm:col-span-2">
                                            <label for="title" class="block text-sm font-medium text-gray-700"> Title </label>
                                            <div class="mt-1 flex rounded-md shadow-sm">
                                                <input v-model="model.title" type="text" name="title" id="title" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 py-2 px-3 w-full rounded-md sm:text-sm border-gray-300 border " placeholder="www.example.com" />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <label for="about" class="block text-sm font-medium text-gray-700"> Description </label>
                                        <div class="mt-1">
                                            <textarea  v-model="model.description" id="about" name="about" rows="5" class="shadow-sm py-2 px-3   focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="you@example.com" />
                                        </div>
                                        <p class="mt-2 text-sm text-gray-500">Brief description for your profile. URLs are hyperlinked.</p>
                                    </div>
                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="country" class="block text-sm font-medium text-gray-700">Status </label>
                                        <select v-model="model.status" id="country" name="country" autocomplete="country-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                            <option>open</option>
                                            <option>inProgress</option>
                                            <option>completed</option>
                                            <option>closed</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        {{buttonLabel}}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    </PageComponent>
</template>

<script setup>
    import PageComponent from '../components/PageComponent';
    import { ref } from 'vue';
    import store from '../store';
    import { useRoute,useRouter } from 'vue-router';

    const route = useRoute();
    const router = useRouter();

    let model =  ref({
        title: "",
        description: "",
        status: "",
    })

    const task_id = route.params?.id;
    const buttonLabel = ref('Submit');
    let errorMsg = ref('');

    if(task_id){
        model.value = store.state.tasks.find((task) => task.id === parseInt(task_id))
    }

    const submitTask = (el) =>{
        el.preventDefault();
        buttonLabel.value = 'Processing...';
          store.dispatch("submitTask",model.value)
               .then(() =>{
                   router.push({
                       name: "Dashboard"
                   })
               })
              .catch((err)=>{
                  errorMsg.value = err.response.data.message;
                  buttonLabel.value = 'Submit'
              })

    }

</script>

<style scoped>

</style>
