<template>
    <div class="home--main">
    <Searchbar v-model="searchbarConfig.searchbarText" :type="searchbarConfig.searchbarType" :placeholder="searchbarConfig.searchbarPlaceholder" />
    <Spinner v-if="teams.length === 0" />

    <Pagination :nextPage="nextPage" :prevPage="prevPage" :currentPage="currentPage" />

    <div v-if="searchbarConfig.searchbarText !== ''" class="home--container">
       <TeamCard v-for="team in filteredTeams" :key="team.id" :team="team" :favoriteTeams="favoriteTeams" />
    </div>
    <div v-if="searchbarConfig.searchbarText === ''" class="home--container">
       <TeamCard v-for="team in paginatedTeams" :key="team.id" :team="team" :favoriteTeams="favoriteTeams" />
    </div>
  
</div>

</template>

<script>

import { mapState, mapActions } from 'vuex'

import Searchbar from '@/components/Searchbar.vue'
import TeamCard from '@/components/TeamCard.vue'
import Spinner from '@/components/Spinner.vue'
import Pagination from '@/components/Pagination.vue'

export default {
  name: 'home',

  components: {
      Searchbar,
      TeamCard,
      Pagination,
      Spinner
  },

  computed: {
      ...mapState('teams', ['teams', 'favoriteTeams']),

      filteredTeams(){
          return this.teams.filter(team => {
              return team.school.toLowerCase().match(this.searchbarConfig.searchbarText.toLowerCase())
          })
      },

      paginatedTeams(){
          return this.teams.filter( (team, idx) => {
              return idx < this.maxTeams && idx >= this.minTeams
          })
      }
  },

  created(){
      this.teams.length === 0 ? this.getAllTeams() : null
  },

  methods: {
      ...mapActions('teams', ['getAllTeams']),

      nextPage(){
        if( this.currentPage !== Math.floor(((this.teams.length-1) / this.teamsPerPage)+1) ){
            this.maxTeams +=this.teamsPerPage
            this.minTeams += this.teamsPerPage
            this.currentPage++
        } else {
            null
        }
      },

      prevPage(){
        if( this.currentPage !== 1 ){
            this.maxTeams -=this.teamsPerPage
            this.minTeams -= this.teamsPerPage
            this.currentPage--
        } else {
            null
        }
      }
  },

  data(){
      return {
          searchbarConfig: {
            searchbarText: '',
            searchbarType: 'text',
            searchbarName: 'searchbar',
            searchbarId: 'searchbar',
            searchbarPlaceholder: 'Search for teams'
          },

          teamsPerPage: 12,
          minTeams: 0,
          maxTeams: 12,
          currentPage: 1
      }
  }
}
</script>

<style scoped lang='scss'>

.home--main {
    margin: 1em;
    a {
        color: white;
        text-decoration: none;
        font-size: 1.5em;
    }
}

.home--container {
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
}

</style>
