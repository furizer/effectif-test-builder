<template >

<PageCrumbs
    :entities="crumbsEntities"
/>

<div v-if="test">

    <div v-for="item in test" :key="item.id" >

    <div class="test">
        <div>Вопрос № {{ item.questionPosition }} : {{ item.questionText }}</div>
        <div>Ответы : </div>
        <div v-for="answer in item.answers" :key="answer.id">
            {{ answer.answerText }} {{ item.trueAnswer }}
        </div>
    </div>
        

    </div>

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
            let a = Test.find(this.$route.params.id) || null
            return a != null ? a.questions : false
        },
     
    },
    created() {
        if(!this.test) Test.fetch()     
    },
}
</script>

<style>
    .test{
        margin-bottom: 20px;
        margin-top: 20px;
    }
</style>