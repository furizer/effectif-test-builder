<template>
    <div class="cite-crumbs">
        <div class="crumb" v-for="entity in entities" :key="entity.text">
            
            <router-link :to="{ name:entity.routeName }">{{ entity.text }}</router-link>

        </div>
    </div>
</template>

<script>
export default {
    props: {
        entities: { type: Array }
    }
}
</script>