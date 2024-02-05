<script setup>

</script>

<template>
    <div class="wrapper">
        <MainComponentsHeaderItem />
        <main class="wrapper__main">
            <slot />
        </main>
        <MainComponentsFooterItem />
    </div>
</template>
<style scoped lang="scss">
.wrapper {
    max-width: 1248px;
    margin: auto;

    @media (max-width: 1248px) {
        width: 960px;
    }

    @media (max-width: 991px){
        max-width: 720px;	
    }

    @media (max-width: 768px){
        max-width: 540px;
    }


    @media (max-width: 546px){
        max-width: 320px;
        padding: 0 16px;
    }
    
    &__main {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 100%;
    }
}
</style>