<script setup lang="ts">

</script>

<template>
    <div class="wrapper">
        <div class="container">
            <MainComponentsHeaderItem />
            <main class="main">
                <NuxtLoadingIndicator />
                <component />
            </main>
            <MainComponentsFooterItem />
        </div>
    </div>
</template>
<style scoped lang="scss">
.wrapper {
    max-width: 1248px;
    margin: 0 auto;
}
.container {
    // margin: 0 96px;
}
</style>