const tests = [
    {
        'id': 1,
        'name': 'Tест 1',
        'questions': [
            {
                'id' : 1,
                'trueAnswer' : 0,
                'questionText' : '1000-7?', 

                'answers': [
                    {
                        'answerText' : '993',
                    },
                    {
                        'answerText' : '992',
                    },                                    
                ]
            },
            {
                'id' : 2,
                'questionText' : 'Сколько пальцев у человека?', 
                'trueAnswer' : 1,

                'answers': [
                    {
                        'answerText' : '21',
                    },
                    {
                        'answerText' : '20',
                    },                                       
                ]
            }            
        ]
    },



]

export default {
    tests,
}