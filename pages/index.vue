<script setup lang="ts">

</script>

<template>
    <div>
        <!-- <input type="text"> -->
        <UISwiper />
        <div class="shop__header">
            <h2 class="shop__title">Shop The Latest</h2>
            <NuxtLink class="shop__link" to="/shop">View all</NuxtLink>
        </div>
        <Shope />
    </div>
</template>
<style scoped lang="scss">
.shop {
    display: flex;
    justify-content: space-between;
    &__header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 39px;
    }

    &__title {
        font-size: 33px;
        color: $black-light;
    }

    &__link {
        font-size: 20px;
        color: $accent-light;
    }

    @media (max-width: 546px) {
        &__header {
            margin-bottom: 13px;
        }

        &__title {
            font-size: 16px;
        }
    
        &__link {
            font-size: 14px;
        }
    }
}
</style>