const tests = [
    {
        'id': 1,
        'name': 'Tест 1',
        'questions': [
            {
                'id' : 1,
                'questionText' : '1000-7?', 
                'trueAnswer' : 0,
                'questionPosition' : 1,
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
                'questionPosition' : 2,
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