<script setup lang="ts"> 
interface Product {
    name: string,
    price: string,
    pathToImage: string,
}

const storeProducts: Product[] = [
    {name: 'Lira Earrings', price: '$ 20,00', pathToImage: '/shop-images/img_1.jpg'},
    {name: 'Hal Earrings', price: '$ 25,00', pathToImage: '/shop-images/img_2.jpg'},
    {name: 'Kaede Hair Pin Set Of 3 ', price: '$ 30,00', pathToImage: '/shop-images/img_3.jpg'},
    {name: 'Hair Pin Set of 3', price: '$ 30,00', pathToImage: '/shop-images/img_4.jpg'},
    {name: 'Plaine Necklace', price: '$ 19,00', pathToImage: '/shop-images/img_5.jpg'},
    {name: 'Yuki Hair Pin Set of 3', price: '$ 29,00', pathToImage: '/shop-images/img_6.jpg'},
];

</script>

<template>
    <div class="shop">
        <div class="shop__header">
            <h2 class="shop__title">Shop The Latest</h2>
            <NuxtLink class="shop__link" to="/shop">View all</NuxtLink>
        </div>
        <div class="shop__wrapper">
            <article class="shop__item" v-for="item in storeProducts" :key="item.name">
                <img class="shop__image" :src="item.pathToImage" :alt="item.name" />
                <p class="shop__name">{{ item.name }}</p>
                <span class="shop__price">{{ item.price }}</span>
            </article>
        </div>
    </div>
</template>
<style scoped lang="scss">
@import './TheShopeStyles.scss';
</style>