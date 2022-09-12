<template>
  <div>
     <p>这是Slot1组件的第一个p标签</p>
      <slot></slot>
     <p>这是Slot1组件的最后一个p标签</p>
  </div>
</template>

<script>
export default {
  name: "Slot1"
}
</script>

<style scoped>

</style>
