export default {
    namespaced: true,

    state: {
        singleComment: {},

        comments: []
    },

    actions: {
        getCommentToRemove({commit}, index){
            commit('removeComment', index)
        },

        getComment({commit}, index){
            commit('saveComment', index)
        },

        getSingleComment({commit}, comment){
            commit('saveSingleComment', comment)
        }

    },

    mutations: {
        removeComment(state, index){
            state.comments.splice(index, 1)
        },

        saveComment(state, index){
            state.comments.length === 0 ? state.comments.push(state.singleComment) : 
            state.comments.splice(index, 1, state.singleComment)
        },

        saveSingleComment(state, comment){
            state.singleComment = comment
        }
        
    }
}