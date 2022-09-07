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
                <router-link :to="{ name:'builderIndex' }"  class="btn routeback-btn"> Обратно </router-link>
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
import Test from '@/store/test/Test'
import OneQuestion from '@/components/testConstructor/OneQuestion'
import TestCreateStatus from '@/components/testConstructor/TestCreateStatus'


export default {
    components : { OneQuestion, TestCreateStatus },

    data() {
        return {
            currentStatus : null,   

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
            question.id = this.counter()
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
        
        
        counter() {
            let count = 0;
            this.counter = function() {
                return count++;
            };
            return count
        }
    
    },


    created() {
        this.setQuestionPosition()        
        // инициализация счетчика айдишиников
        this.counter() 

    }, 
    
}
</script>


