<script setup lang="ts">
const navbar = ref([
    {name: 'Shop', path: '/shop'},
    {name: 'Blog', path: '/blog'},
    {name: 'Our Story', path: '/about'},
]);

const actionsBar = ref([
    {path: '/svg-header/shopping-icon.svg', alt: 'shopping', routerPath: '/shopping'},
    {path: '/svg-header/user-icon.svg', alt: 'user', routerPath: '/login'},
]);
</script>

<template>
    <header class="header">
        <NuxtLink class="header__logo" to="/">SHOPPE</NuxtLink>
        <UIBurger />
        <div class="header__right-side">
            <nav class="header__menu">
                <ul class="header-menu__list" v-for="item in navbar" :key="item.name">
                    <li class="header-menu__item">
                        <NuxtLink class="header-menu__link" :to="item.path">{{ item.name }}</NuxtLink>
                    </li>
                </ul>
            </nav>
            <div class="header__actions">
                <button class="header-actions__button">
                    <img src="/svg-header/search-icon.svg" alt="search">
                </button>
                <NuxtLink class="header-actions__link" :to="item.routerPath" v-for="item in actionsBar" :key="item.path">
                    <img class="header-actions__img" :src="item.path" :alt="item.alt">
                </NuxtLink>
            </div>
        </div>
    </header>
</template>
<style scoped lang="scss">
@import './styles/HeaderItemStyles.scss';
</style>