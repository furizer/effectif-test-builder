<template>
<div class="test-list" v-for="test in tests" :key="test.id">
    {{ test.text }}
</div>
</template>

<script>
export default {

    props: {
        tests: { type: Object }
    }
}
</script>