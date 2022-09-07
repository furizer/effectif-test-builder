<template>
<PageCrumbs
    :entities="crumbsEntities"
/>

<TestList
    :tests="tests"
/>


</template>

<script>

import Test from '@/store/test/Test.js'
import TestList from '@/components/TestList'
import PageCrumbs from '@/components/PageCrumbs'

export default {
    components: {TestList, PageCrumbs},

    data() {
        return {
            crumbsEntities: [
              
                {
                    'text': 'Создать тест',
                    'routeName': 'testConstructor',
                }
            ]
        }
    },

    computed: {
        tests() {
            return Test.all()
        }
    },

}

</script>