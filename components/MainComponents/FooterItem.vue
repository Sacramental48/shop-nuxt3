<script setup lang="ts">
const usefulLinks = ref(['CONTACT', 'TERMS OF SERVICES', 'SHIPPING AND RETURNS']);
const footerIconsLink = ref([
    {path: '/svg-footer/in-icon.svg', alt: 'in'},
    {path: '/svg-footer/facebook-icon.svg', alt: 'facebook', way: 'https://vk.com/al_feed.php'},
    {path: '/svg-footer/instagram-icon.svg', alt: 'instagram'},
    {path: '/svg-footer/twitterX-icon.svg', alt: 'twitterX'}
])
</script>

<template>
    <div class="footer">
        <div class="footer__useful">
            <div class="footer__useful-block">
                <NuxtLink class="footer__useful-item" v-for="item in usefulLinks" to="">{{ item }}</NuxtLink>
            </div>
            <div class="footer__useful-input">
                <input type="text" placeholder="Give an email, get the newsletter.">
                <button><img src="/svg-footer/right-arrow-icon.svg" alt="right-arrow"></button>
            </div>
        </div>
        <div class="footer__lower">
            <p class="footer__privacy">© 2021 Shelly. <span>Terms of use</span> and <span>privacy policy.</span></p>
            <div class="footer__icons">
                <NuxtLink class="footer__icons-link" v-for="item in footerIconsLink" :key="item.path" :to="item.way">
                    <img :src="item.path" :alt="item.alt">
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
@import './styles/FooterItemStyles.scss';
</style>