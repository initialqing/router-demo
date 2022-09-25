import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', component: () => import('~/views/Home.vue'), name: 'Home' },
    // { path: '/brazil', component: () => import('~/views/Brazil.vue'), name: 'Brazil' },
    // { path: '/hawaii', component: () => import('~/views/Hawaii.vue'), name: 'Hawaii' },
    // { path: '/jamaica', component: () => import('~/views/Jamaica.vue'), name: 'Jamaica' },
    // { path: '/panama', component: () => import('~/views/Panama.vue'), name: 'Panama' },
    {
        path: '/destination/:id/:slug',
        component: () => import('~/views/DestinationShow.vue'),
        name: 'destination.show', 
        props: route => ({ id: parseInt(route.params.id), slug: route.params.slug })
    },
]



const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'vue-router-active-link',
})


export default router