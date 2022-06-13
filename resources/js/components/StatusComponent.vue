<template>
    <div :class="label" class="absolute status-tag">
        {{label}}
    </div>
</template>

<script>
    export default {
        props: ['label']
    }
</script>

<style scoped>
  .status-tag{
      right: 15px;
      padding: 4px 8px;
      font-size: 12px;
      border-radius: 5px;
  }
  .completed{
      background: #69eb6c;
  }
  .inProgress{
      background: #C4B190;
  }
  .open{
      background: #E985F9;
  }
  .closed{
      background: #FDD25F;
  }
</style>
