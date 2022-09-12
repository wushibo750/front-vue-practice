<template>
<div class="home-container">
<!--头部组件-->
<MyHeader></MyHeader>
<!--  主体区域-->
  <div class="home-main-box">
<!--    左边栏-->
    <MyAside></MyAside>
    <div class="home-main-body">
      <router-view></router-view>
    </div>
  </div>
</div>
</template>

<script>
import MyHeader from "@/components/shoprouter/MyHeader";
import MyAside from "@/components/shoprouter/MyAside";
export default {
  name: "Home",
  components: {
    MyAside,
    MyHeader
  }
}
</script>

<style scoped>

</style>