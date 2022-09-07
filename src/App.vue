<template>
    <!-- Create by Skizer-slp -->
    <div class="container">
        <router-view />
    </div>

</template>

<script>
    export default {
        created() {
            this.$store.getters.api.preload(null, (data) => {
                
                Object.keys(data).forEach(index => {
                    
                    console.log(index, data[index])

                    let model = this.$store.getters[index]
                    if (model) {
                        model.insertOrUpdate({ data: data[index] })
                    }
                })
                
            })
        }
    }
</script>