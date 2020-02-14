import apiCalls from '../../services/teamServices'

export default {
    namespaced: true,

    state: {
        teams: [],

        selectedTeam: {},

        favoriteTeams: []
    },

    actions: {
        getAllTeams({commit}){
            apiCalls.getTeams()
            .then(response => {
               commit('saveAllTeams', response)
            })
        },

        getFavTeam({commit}, favTeam){
            commit('saveFavTeam', favTeam)
        },

        getFavTeamToRemove({commit, state}, favTeamToRemove){
            let index = null
            state.favoriteTeams.find( (team, idx) => {
                favTeamToRemove.id === team.id ? index = idx : null
            })
            commit('removeFavTeam', index)
        },

        getSelectedTeam({commit}, selecTeam){
            commit('saveSelectedTeam', selecTeam)
        }
    },

    mutations: {
        saveAllTeams(state, teams){
            state.teams = teams
        },

        saveFavTeam(state, favTeam){
            state.favoriteTeams.unshift(favTeam)
        },

        removeFavTeam(state, index){
            state.favoriteTeams.splice(index, 1)
        },

        saveIfFavTeam(state, isFav){
            state.isTheTeamInFavs = isFav
        },

        saveSelectedTeam(state, selecTeam){
            state.selectedTeam = selecTeam
        }
    }
}