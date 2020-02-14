<template> 
    <div :style="{ 'background-color': team.color }" class="team--card" >
    <router-link class="team--text" :to="{ name: 'team', params: { id: team.id } }">
       <p>{{team.school}}</p>
       <p class="team--mascot">{{team.mascot}}</p>
       <div class="team--logo" v-if="team.logos">
        <img :src="team.logos[0]" :alt="team.school + ' logo'">
       </div>
       </router-link>
       <Comments v-if="$route.name === 'favorites'" :index="index" :teamId="team.id" />
        <TeamButton v-if="!isInFavs" :title="buttonTitles.addFav" :method="addFavorite" :value="team" />
        <TeamButton :class="'fav--button'" v-if="isInFavs" :title="buttonTitles.removeFav" :method="removeFavorite" :value="team" />
    </div>
    
</template>
<script>

import { mapActions } from 'vuex'

import Comments from '@/components/Comments.vue'
import TeamButton from '@/components/TeamButton.vue'

    export default {
        name: 'teamCard',
        props: ['team', 'index', 'favoriteTeams'],

        components: {
            Comments,
            TeamButton
        },

        computed: {
            isInFavs() {
             return this.favoriteTeams.find(favTeam => { 
                    return favTeam.id === this.team.id })
            }
        },

        methods: {
            ...mapActions('teams', ['getFavTeam', 'getFavTeamToRemove']),
            ...mapActions('comments', ['getCommentToRemove']),

            addFavorite(newTeam){
             this.getFavTeam(newTeam)
      },

            removeFavorite(favTeam){
             this.getFavTeamToRemove(favTeam)
             this.getCommentToRemove(this.index)
      }

 },

        data(){
            return {
                buttonTitles: {
                    addFav: 'Add favorite',
                    removeFav: 'Remove favorite'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

@import '../styles/styles';

.team--card {
    width: 100%;
    margin: 2em auto;
    border: $border-selected;
    background-color: black;
    text-align: center;

    &:hover {
        border: $border-selected;
    }

    @media(min-width: 768px){
       width: 30%;
       border: $border;
   }

}

.team--text {
    font-size: 1.5em;
    text-decoration: none;
    color: white;   
}

.team--logo {
    img{
        width: $logo-width;
        margin: 0 auto;
        font-size: .5em;
    }
}

.team--mascot {
    font-size: .8em;
}

// Buttons

.fav--button {
    background-color: gold;
    color: $font-color;
    border: $border-selected;
}

</style>