import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import api from '@/api/api'

import Test from './test/Test'

const database = new VuexORM.Database()

database.register(Test)


const getters = {
    api: () => api,
    Test: () => Test,
    
    
}

const store = new Vuex.Store({
    plugins: [VuexORM.install(database)],
    getters
})

export default store