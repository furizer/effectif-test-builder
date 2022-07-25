<template >

<div class="test-contstructor-wrapper">
    <div class="test-constructor_header">
        <div class="test-constructor_container container">
            <div class="name_wrapper">         

                <input class="name_input" autofocus placeholder="Новый тест" v-model="newTest.name"  nameForCheck="testName" >

                <TestCreateStatus
                />  

            </div>
            <div class="controll">
                <div class="btn add-question" @click="addQuestion">
                    Добавить вопрос
                </div>
                <div class="btn end-create-btn" @click="saveTest" v-if="tests">
                    Сохранить
                </div>
                <div class="btn delete-btn">
                    <PageCrumbs
                        :entities="crumbsEntities"
                    /> 
                </div>
            </div>
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
import TestCreateStatus from '@/components/testConstructor/TestCreateStatus'


export default {
    components : { PageCrumbs, OneQuestion, TestCreateStatus },

    data() {
        return {
            
            currentStatus : null,   
            
            crumbsEntities: [
                {
                    'text': 'Отменить',
                    'routeName': 'builderIndex',
                }
            ],

            newTest: {
                'id': null,
                'name': '',
                'questions' : [

                    // Если по дефолту требуется один вопрос - расскоментить
                    // {
                    //     'id': 0,
                    //     'questionText' : '',
                    //     'trueAnswer' : null,

                    //     'answers' : [
                    //         {
                    //             'answerText' : '',
                    //         },
                    //     ]
                    // }
                ]
            },

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

 
        setQuestionPosition() {
            this.newTest.questions.forEach((element, index) => {
                element.questionPosition = index + 1
            });
        },



        addQuestion() {
            let question = Object.assign({}, this.newTest.questions[0])
            question.id = Date.now()
            this.newTest.questions.push(question)

            this.setQuestionPosition()
        },
        // Удаление вопроса
        onDeleteQuestion(data) {
            this.newTest.questions = this.newTest.questions.filter((item) => item.id !== data.id)
            
            this.setQuestionPosition()
        },
        onSaveQuestion(data) {
            this.setQuestionPosition()
            console.log('save question');
            let i = this.newTest.questions.findIndex(item => item.id === data.id)
            this.newTest.questions[i] = data
        },        
    
    },


    created() {
        this.setQuestionPosition()        
        if(Object.keys(this.tests).length > 0){
            return
        }
        Test.fetch()
    }, 
    
}
</script>


