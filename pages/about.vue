<script setup>

</script>

<template>
    <div class="about-section">
        <section class="about">
            <h2 class="about__title">About</h2>
            <p class="about__description">Who we are and why we do what we do!</p>
            <p class="about__content">Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget pellentesque risus scelerisque a. Nam ac urna maximus, tempor magna et, placerat urna. Curabitur eu magna enim. Proin placerat tortor lacus, ac sodales lectus placerat quis.</p>
        </section>
        <section class="trends">
            <h3 class="trends__title">Top trends</h3>
            <img src="../about-images/img_1.jpg" alt="Top Trend Image" class="trends__image">
            <p class="trends__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis.</p>
            <nav class="trends__navigation">
                <ul class="trends__navigation-list">
                    <li class="trends__navigation-item">consectetur adipiscing elit. Aliquam placerat</li>
                    <li class="trends__navigation-item">Lorem ipsum dolor sit amet consectetur</li>
                </ul>
            </nav>
        </section>
        <section class="care">
            <h3 class="care__title">Produced with care</h3>
            <img src="../about-images/img_2.jpg" alt="img_2" class="care__image">
            <p class="care__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendu.</p>
        </section>
    </div>
</template>
<style scoped lang="scss">
@import '~/assets/scss/AboutPage/AboutStyles.scss'; 
</style>