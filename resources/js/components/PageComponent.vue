<template>
    <div class="px-4">
        <div class="py-5">
            <h1 class="text-2xl font-bold text-gray-900">
                <slot name="title"></slot>
            </h1>
        </div>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
   const props = defineProps({
       title: String
   })
</script>

<style scoped>

</style>
