<template>
    <div id="nav">
        <router-link id="logo" to="/">
            Vue-School
        </router-link>
        <router-link v-for="destination in destinations" :key="destination.id"
            :to="{name:'destination.show',params:{id:destination.id,slug:destination.slug}}">
            {{destination.name}}
        </router-link>
    </div>
</template>

<script setup>
    import sourceData from '~/data.json'
    const destinations = sourceData.destinations;
</script>

<style lang="css" scoped>
#nav .vue-router-active-link {
    color: #42b983;
    border-bottom: 2px solid lightblue;
}
</style>