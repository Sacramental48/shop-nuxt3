<template>
    <div class="wrapper">
        <MainComponentsHeaderItem />
        <main class="wrapper__main">
            <NuxtLoadingIndicator />
            <NuxtPage />
        </main>
        <MainComponentsFooterItem />
    </div>
</template>
<script setup lang="ts">
</script>
<style scoped lang="scss">
.wrapper {
    @media (min-width: 575.98px){
        max-width: 540px;
        margin: auto;
        padding: 0;
    }

    @media (min-width: 767.98px){
        max-width: 720px;	
    }

    @media (min-width: 991.98px) {
        max-width: 960px;
    }

    @media (min-width: 1250px) {
        max-width: 1248px;
    }

    &__main {
        display: flex;
        justify-content: center;
    }
}
</style>