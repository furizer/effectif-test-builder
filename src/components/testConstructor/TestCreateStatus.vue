<template>
    <div>
        <!-- <div class="status-bar"> СТАТУС {{currentStatus.text}}</div>
        <div @click="checkStatus">ПРОВЕРИТЬ СТАТУС</div> -->
    </div>
</template>

<script>
export default {


    data() {
        return {
            createStatuses: [
                {
                    'id' : 1,
                    'text' : 'Тест готов к созданию',
                    'lelel' : 1
                },
                {
                    'id' : 2,
                    'text' : 'Возможно создание, но ......',
                    'lelel' : 2
                },
                {
                    'id' : 3,
                    'text' : 'Создание теста не возможно',
                    'lelel' : 3
                }                                
            ], 

            typeInputs: {

            },
    
            inputs: [],

            currentStatus : {
                id: null,
                'text' : '',
                'level' : null
            }            
        }
    },

    methods: {
        checkStatus() {
            let inputs = document.querySelectorAll('input[nameForCheck]')
            let textarea = document.querySelectorAll('textarea[nameForCheck]')

            console.log(textarea, 'textarea');
            console.log(inputs, 'INPUTS');



        },

        getStatus() {

        },

    },


    mounted() {
        this.checkStatus()
    },





}
</script>