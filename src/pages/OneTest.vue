<template>

<PageCrumbs
    :entities="crumbsEntities"
/>
{{test}}
<div class="one-test">
   
</div>


</template>

<script>
import PageCrumbs from '@/components/PageCrumbs'
import Test from '@/store/test/Test'

export default {
    components: {PageCrumbs},
    data() {
        return {
            crumbsEntities: [
                {
                    'text': 'Обратно',
                    'routeName': 'builderIndex',
                }
            ],

        }
    },

    computed: {
        test() {
            return Test.find(1)
        }
    },

    created() {
        if(!this.test) Test.fetch()
    },


    
    
}
</script>