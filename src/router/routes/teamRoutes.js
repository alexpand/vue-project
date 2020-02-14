import Home from '@/components/views/Home.vue'
import Team from '@/components/views/Team.vue'
import Favorites from '@/components/views/Favorites.vue'

export default [

        {
            path: '/',
            name: 'home',
            component: Home
        },

        {
            path: '/team/:id',
            name: 'team',
            component: Team,
            props: true
        },

        {
            path: '/favorites',
            name: 'favorites',
            component: Favorites
        }
    
]