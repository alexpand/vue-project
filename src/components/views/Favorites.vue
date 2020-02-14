<template>
<div class="main">
    <div class="container">
    <TeamCard v-for="(team, idx) in favoriteTeams" :key="team.id" :index="idx" :team="team" :favoriteTeams="favoriteTeams" />
    </div>
</div>

</template>

<script>

import { mapState, mapActions } from 'vuex'

import Comments from '@/components/Comments.vue'
import TeamCard from '@/components/TeamCard.vue'

    export default {
        name: 'favorites',
        components: {
            Comments,
            TeamCard
        },

        computed: {
            ...mapState('teams', ['favoriteTeams'])

        },

        methods: {
            ...mapActions('teams', ['getFavTeamToRemove']),

        }
    }

</script>

<style lang="scss" scoped>

.main {
    margin: 1em;
    a {
        color: white;
        text-decoration: none;
        font-size: 1.5em;
    }
}

.container {
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
}

</style>

