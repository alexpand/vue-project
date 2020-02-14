<template>
    <div :style="{ 'background-color': selectedTeam.color }" class="team--container"> 
            <h3>{{selectedTeam.school}}</h3>
            <p>{{selectedTeam.abbreviation}}</p>
            <p>{{selectedTeam.mascot}}</p>
            <div class="team--logo" v-if="selectedTeam.logos">
            <img :src="selectedTeam.logos[0]" :alt="selectedTeam.school + ' logo'">
            </div>
            <div class="team--buttons--container">
             <TeamButton class="team--button" v-if="!isInFavs" :title="buttonTitles.addFav" :method="addFavorite" :value="selectedTeam" />
             <TeamButton class="team--button" :class="'fav--button'" v-if="isInFavs" :title="buttonTitles.removeFav" :method="removeFavorite" :value="selectedTeam" />
            </div>
       
    </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'

import TeamButton from '@/components/TeamButton.vue'

    export default {
        name: 'team',
        props: ['id'],
        components: {
            TeamButton
        },

        computed: {
            ...mapState('teams', ['teams', 'favoriteTeams', 'selectedTeam']),

           isInFavs() {
             return this.favoriteTeams.find(favTeam => { 
                    return favTeam.id === this.selectedTeam.id })
            }
        },

        created(){
            this.getThisSelectedTeam()
        },

        methods: {
            ...mapActions('teams',['getFavTeam', 'getFavTeamToRemove', 'getSelectedTeam']),

            getThisSelectedTeam(){
              const selTeam = this.teams.find(team => {
                return this.id === team.id
              })
              this.getSelectedTeam(selTeam)
            },

            addFavorite(){
                this.getFavTeam(this.selectedTeam)
            },

            removeFavorite(){
                this.getFavTeamToRemove(this.selectedTeam)
            }

        },

        data() {
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

@import '../../styles/styles';

.team--container {
    margin-top: 3em;
    padding: 1em;
    text-align: center;
    color: white;
    background-color: black;
    border: $border-selected;

    @media(min-width: 768px){
     margin-top: 1em;
     font-size: 2em;
   }
}

.team--logo {
    img {
        width: $logo-width;

        @media(min-width: 768px){
            width: 25%;
        }        
    }
}

// Button fav

.fav--button {
    background-color: gold;
    color: $font-color;
    border: 1px solid white;
}

//Team buttons container

.team--buttons--container {
    margin: 1em auto;
    width: 50%;
    font-size: .5em;
}

</style>