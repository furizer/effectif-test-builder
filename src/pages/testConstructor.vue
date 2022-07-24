<template >

<PageCrumbs
    :entities="crumbsEntities"
/>

<div class="test-constructor_header">
    <div>
        <div class="name title">         

            <input class="name_input" autofocus placeholder="Новый тест" v-model="newTest.name">

            <!-- <div class="name_confirm">
                <div class="name_icon">
                    <img src="" alt="confirm-icon">
                </div>

                <div class="name_icon">
                    <img src="" alt="editing-icon">
                </div>
            </div> -->

        </div>
    </div>
    <div class="controll">
        <div class="btn add-question" @click="addQuestion">
            Добавить вопрос
        </div>
        <div class="btn end-test-create" @click="saveTest" v-if="tests">
            Закончить создание
        </div>
    </div>

</div>

<div class="test-constructor">
    <OneQuestion
        v-for = "question in newTest.questions" 
        :key="question.id"
        :question="question"

        @saveQuestion="onSaveQuestion"
        @deleteQuestion="onDeleteQuestion"
    />
</div>

</template>

<script>
import PageCrumbs from '@/components/PageCrumbs'
import Test from '@/store/test/Test'
import OneQuestion from '@/components/testConstructor/OneQuestion'

export default {
    components : { PageCrumbs, OneQuestion },

    data() {
        return {
            crumbsEntities: [
                {
                    'text': 'Обратно',
                    'routeName': 'builderIndex',
                }
            ],

            newTest: {
                'id': null,
                'name': '',
                'questions' : [
                    {
                        'id': 0,
                        'questionText' : '',
                        'trueAnswer' : null,

                        'answers' : [
                            {
                                'answerText' : '',
                            },
                        ]
                    }
                ]
            }
        }
    },     
    
    computed: {
        tests() {
            return Test.all()
        },
        

    },    

    methods: {
        // Сохранение теста
        saveTest() {
            this.newTest.id = this.tests.slice(-1)[0].id + 1
            let newTest = this.newTest

            Test.insert({
                data: {
                    id : newTest.id,
                    name : newTest.name,
                    questions : newTest.questions
                }
            })
            this.$router.push('./');
        },   
        
        onSaveQuestion(data) {
            console.log('save question');
            let i = this.newTest.questions.findIndex(item => item.id === data.id)
            this.newTest.questions[i] = data
        },

        

        // Удаление вопроса
        onDeleteQuestion(data) {
            this.newTest.questions = this.newTest.questions.filter((item) => item.id !== data.id)
        },

        // Добавление вопроса
        addQuestion() {
            let question = Object.assign({}, this.newTest.questions[0])

            question.id = Date.now()

            this.newTest.questions.push(question)
        }
    },


    created() {
        if(Object.keys(this.tests).length > 0){
            return
        }
        Test.fetch()
    }, 
    
}
</script>


