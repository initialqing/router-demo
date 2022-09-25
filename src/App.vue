<script setup>
  import TheNavigationVue from './components/TheNavigation.vue';
</script>

<template>
  <Suspense>
    <TheNavigationVue/>
  </Suspense>
  
  <!-- 会刷新页面 -->
  <!-- <a href="/">A tag About</a> -->
  <div class="container">
    <router-view v-slot="{Component,route}">
      <component :is="Component" :key="route.path"/>
    </router-view>
  </div>
</template>

<style scoped>

</style>
