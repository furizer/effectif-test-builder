import Model from '@/core/Model'

export default class UserTestResult extends Model {
    static entity = 'userResult'
    static routes = {
        save: ['testPassing', 'save'],
    }
    static fields () {
        return {
            testId : this.number(0),

            result : this.attr({
                questionId : this.number(0),
                userAnswer : this.number(0)
            })
        }
    }

    resultPost(data) {
        let formData = new FormData();
        formData.append('data',JSON.stringify(data));

        const requestOptions = {
            method: "POST",
            headers: { 
                // "Content-Type": "application/json;charset=utf-8",
                // "Access-Control" : "Allow-Origin"
            },
            body: formData,
            mode: 'no-cors',
        }

        fetch("https://itevas.ru/work/erement/jsonTest/", requestOptions)
        .then(response => {response.text()} )
        .then(data => {console.log(data)} );
    }

}