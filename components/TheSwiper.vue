<script setup>
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import axios from 'axios'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const result = ref('');

const getRequest = async () => {
    try {
        const response = await axios.get('https://75b6151bc3226b27.mokky.dev/popularProducts');
        result.value = response.data;
    } catch(e) {
        console.log(e);
    }
}

onMounted(() => {
    getRequest();
})

const modules = ref([Navigation, Pagination, Scrollbar, A11y]);
</script>

<template>
    <div class="swiper">
        <swiper
            :modules="modules"
            :slides-per-view="1"
            navigation
            :pagination="{ clickable: true }"
        >
            <swiper-slide v-for="item in result" :key="item.id">
                <div class="swiper__block">
                    <img class="swiper__image" :src="item.picture" alt="img">
                    <div class="swiper__discription">
                        <span class="swiper__title">Gold big hoops </span>
                        <span class="swiper__price">$ 68,00</span>
                        <button class="swiper__button">View product</button>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>
<style scoped>
@import '../assets/scss/Swiper/SwiperStyles.scss';
.test {
    width: 1248px;

}
.img {
    width: 1248px;
    height: 646px;
    object-fit: cover;
}
</style>