<!--  -->
<template>
    <section v-if="destination" class="destination">
        <h1>{{destination.name}}</h1>
        <div class="destination-details">
            <img :src="`/images/${destination.image}`" :alt="destination.name" />
            <p>{{destination.description}}</p>
        </div>
    </section>
</template>

<script setup>
import { useRoute,onBeforeRouteUpdate } from 'vue-router';
import sourceData from '~/data.json';
import { onBeforeMount,ref,defineProps } from 'vue';
const route = useRoute()
const props = defineProps({
    id: {
        type:  Number,
        required: true
    },
    slug: {
        type: String,
        required: true
    }
})
console.log(props)
// 这边去除是因为可以通过路由props传参
// const destinationID = parseInt(route.params.id)
// sourceData.destinations.find(destination => destination.id === destinationID)
let destination = ref({})
destination.value = sourceData.destinations.find(destination => destination.id === props.id)


// const response = await fetch(`https://travel-dummy-api.netlify.app/${route.params.slug}`)
// destination = await response.json()
// console.log(destination)

// 这边去除是因为可以再router-view中使用key属性retriger生命周期
// onBeforeRouteUpdate((to,from) => {
//     destination.value = sourceData.destinations.find(destination => destination.id === parseInt(to.params.id))
// })
</script>
<script>
</script>
<style lang="css" scoped>
.destination .destination-details p {
    line-height: 1.7;
}
</style>