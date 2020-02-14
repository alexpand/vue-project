import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

import teams from './modules/teams'
import comments from './modules/comments'

export default new Vuex.Store({
    plugins: [createPersistedState()],
    modules: {
        teams,
        comments
    }
})

