const tests = [
    {
        'id': 1,
        'name': 'Tест на знание продукта ',
        'text' : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus consectetur eveniet, eligendi mollitia repellat corporis, odio incidunt iste magni unde minima accusantium officiis autem? Et iusto doloribus quam laboriosam eius.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus consectetur eveniet, eligendi mollitia repellat corporis, odio incidunt iste magni unde minima accusantium officiis autem? Et iusto doloribus quam laboriosam eius.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus consectetur eveniet, eligendi mollitia repellat corporis, odio incidunt iste magni unde minima accusantium officiis autem? Et iusto doloribus quam laboriosam eius.',
        'questions': [
            {
                'id' : 1,
                'questionText' : '1000-7?', 
                'trueAnswer' : 2,
                'questionPosition' : 1,
                'answers': [
                    {
                        'answerText' : '993',
                    },
                    {
                        'answerText' : '992',
                    },       
                    {
                        'answerText' : 'zxc',
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
            },
            {
                'id' : 3,
                'questionText' : 'Сколько у человека?', 
                'trueAnswer' : 2,
                'questionPosition' : 3,
                'answers': [
                    {
                        'answerText' : '16',
                    },
                    {
                        'answerText' : '22',
                    },       
                    {
                        'answerText' : '28',
                    },                                                      
                ]
            },
            {
                'id' : 4,
                'questionText' : 'Сколько пальцев?', 
                'trueAnswer' : 0,
                'questionPosition' : 4,
                'answers': [
                    {
                        'answerText' : '1',
                    },
                    {
                        'answerText' : '2',
                    },      
                    {
                        'answerText' : '3',
                    },    
                    {
                        'answerText' : '4',
                    },                                                                          
                ]
            },
            {
                'id' : 5,
                'questionText' : 'Сколько ?', 
                'trueAnswer' : 3,
                'questionPosition' : 5,
                'answers': [
                    {
                        'answerText' : 'да',
                    },
                    {
                        'answerText' : 'нет',
                    },   
                    {
                        'answerText' : 'затрудняюсь ответить',
                    },     
                    {
                        'answerText' : 'lorem lorem lorem lorem lorem lorem lorem',
                    },                                                                         
                ]
            }                                               
        ]
    },



]

export default {
    tests,
}