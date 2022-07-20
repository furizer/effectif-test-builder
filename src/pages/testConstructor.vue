<template>

<PageCrumbs
    :entities="crumbsEntities"
/>

<div class="test-constructor_header">
    <div>


        <div class="name title">         

            <input class="name_input" value="" placeholder="Новый тест">

            <div class="name_confirm">
                <div class="name_icon">
                    <img src="" alt="confirm-icon">
                </div>

                <div class="name_icon">
                    <img src="" alt="editing-icon">
                </div>
            </div>

        </div>
    </div>
    <div class="controll">
        <div class="btn add-question">
            Добавить вопрос
        </div>
        <div class="btn end-test-create">
            Закончить создание
        </div>
    </div>

</div>

<div class="test-constructor">

</div>

</template>

<script>
import PageCrumbs from '@/components/PageCrumbs'

export default {
    components : {PageCrumbs},

    data() {
        return {
            crumbsEntities: [
                {
                    'text': 'Обратно',
                    'routeName': 'builderIndex',
                }
            ]
        }
    },      
    
}
</script>


