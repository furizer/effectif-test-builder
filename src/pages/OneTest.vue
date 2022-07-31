<template >
<div class="one-test__header-float">

    <div class="one-test__header-wrapper ">

        <div class="one-test__header container">

            <div class="one-test__name-wrapper">
                <div class="one-test__name">
                    {{ test.name }}
                </div>

                <div class="one-test__questions-quantity">
                    {{ quantityQuestions }}
                    <span>
                        вопросов 
                    </span>
                </div>
            </div>

            <router-link :to="{ name:'builderIndex' }"  class="btn routeback-btn"> Обратно </router-link>
            
        </div>    
        
    </div>

</div>


<div class="test-preparation" v-if="testPreparation">

    <div class="one-test__text">{{test.text}}</div>

    <div class="one-test__start-wrapper">
        <div class="btn end-create-btn" @click="startTest">Начать тест</div>
    </div>
   
</div>

<div class="passing-test" v-if="testPassing">

    <OneQuestion
        class="passing-test__item"

        v-for="(question, index) in test.questions"
        :key="question.id"
        :id="'question' + question.id"

        :index="index + 1"
        :question="question"

        @saveAnswer="onSaveAnswer"
    
    />

    <div class="one-test__start-wrapper">
        <div class="btn end-create-btn" @click="endTest">Закончить тест</div>
    </div>    
</div>


</template>

<script>
import Test from '@/store/test/Test'
import UserTestResult from '@/store/test/UserTestResult'
import OneQuestion from '@/components/testPassing/OneQuestion'

export default {
    components: { OneQuestion },
    data() {
        return {
            testResult : {
                testId : null,
                result : [
          
                ]
            },

            testPassing : false,
            testPreparation : true,
        }
    },


    methods: {
        startTest(){

            for (let i = 0; i < this.test.questions.length; i++) {
                let answer = {}
                answer.questionId = this.test.questions[i].id
                answer.answerIndex = null
                this.testResult.result.push(answer)
            }

            this.testPassing = true
            this.testPreparation = false
            this.testResult.testId = this.test.id

        },

        onSaveAnswer(data) {
            console.log('save answer');
            this.testResult.result.find(answer => answer.questionId === data.questionId).answerIndex = data.answerIndex
        },

        endTest() {
            this.userTestResult.resultPost(this.testResult);
        },
    },

    computed: {
        test() {
            let test = Test.find(this.$route.params.id) || null
            test = Object.assign({}, test)       
            return test || {}
        },

        userTestResult() {
            return new UserTestResult
        },

        quantityQuestions() {
            if(this.test.questions) {
                let quantityQuestions = this.test.questions.length
                return quantityQuestions 
            }return null     
        },
    },


    created() {
        if(Object.keys(this.test).length == 0) {Test.fetch()}
    },

}
</script>
