<script setup>
import 'vue3-carousel/dist/carousel.css'

</script>

<template>
    <SwiperCarousel :items-to-show="1">
        <SwiperSlide v-for="slide in 4" :key="slide">  
            <div class="swiper">
                <div class="swiper__block">
                    <NuxtImg  class="swiper__image" src="/img-main-content/main-img.jpg" alt="img" />
                    <div class="swiper__discription">
                        <span class="swiper__title">Gold big hoops </span>
                        <span class="swiper__price">$ 68,00</span>
                        <button class="swiper__button">View product</button>
                    </div>
                </div>
            </div>
        </SwiperSlide>
    </SwiperCarousel>
</template>
<style scoped>
@import './TheSwiperStyles.scss';
</style>