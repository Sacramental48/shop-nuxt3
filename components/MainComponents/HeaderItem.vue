<script setup lang="ts">
const navbar = ref(['Shop', 'Blog', 'Our Story']);
const actionsBar = ref([
    {path: '/svg-header/search-icon.svg', alt: 'search'},
    {path: '/svg-header/shopping-icon.svg', alt: 'shopping', routerPath: '/shopping'},
    {path: '/svg-header/user-icon.svg', alt: 'user', routerPath: '/userlogin'},
]);
</script>

<template>
    <header class="header">
        <NuxtLink class="header__logo" to="/">SHOPPE</NuxtLink>
        <UIBurgerTheBurgerMenu />
        <div class="header__right-side">
            <nav class="header__menu">
                <ul class="header-menu__list" v-for="item in navbar" :key="item">
                    <li class="header-menu__item">
                        <NuxtLink class="header-menu__link" :to="item">{{ item }}</NuxtLink>
                    </li>
                </ul>
            </nav>
            <div class="header__actions">
                <NuxtLink class="header-actions__link" :to="item.routerPath" v-for="item in actionsBar" :key="item.path">
                    <img class="header-actions__img" :src="item.path" :alt="item.alt">
                </NuxtLink>
            </div>
        </div>
    </header>
</template>
<style scoped lang="scss">
@import './styles/HeaderStyles.scss'
</style>