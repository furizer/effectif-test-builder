<template>
<div class="test-list" v-for="test in tests" :key="test.id">
    <router-link
        :to="{ name:'oneTestPage', params: { id: test.id } }"
    
    >
    {{ test.name }}
    </router-link>
</div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    props: {
        tests: { type: Object }
    }
}
</script>