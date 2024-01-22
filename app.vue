<template>
    <div>
        <div class="wrapper">
            <div class="container">
                <MainComponentsHeaderItem />
                <main class="main">
                    <NuxtLoadingIndicator />
                    <NuxtPage />
                </main>
                <MainComponentsFooterItem />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
</script>
<style scoped lang="scss">
.wrapper {
    max-width: 1248px;
    margin: 0 auto;
}

.main {
    display: flex;
    justify-content: center;
}
</style>