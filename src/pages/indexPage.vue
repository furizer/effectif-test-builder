<template>
    
    <router-link to="/testConstructor">Создать тест</router-link>
    
    <TestList
        :tests="tests"
    />
</template>

<script>

import Test from '@/store/test/Test.js'
import TestList from '@/components/TestList'

export default {
    components: {TestList},

    data() {
        return {
            
        }
    },

    computed: {
        tests() {
            return Test.all()
        }
    },

    created() {
        Test.fetch()
    },
}

</script>