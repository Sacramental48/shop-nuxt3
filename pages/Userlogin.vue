<script setup lang="ts">

</script>

<template>
    <div class="user-account">
        <span class="user-account__title">My account</span>
        <div class="user-account__buttons">
            <button class="user-account__signin"></button>
            <button class="user-account__register"></button>
        </div>
        <form action="" class="user-account__form">
            <input class="form__email" type="text" name="email" placeholder="Email">
            <input class="form__password" type="text" name="password" placeholder="Password">
            <input class="form__checkbox" type="checkbox" name="checkbox" value="">
            <button class="form__signin">SIGN IN</button>
            <NuxtLink class="form__forgot-password">Have you forgotten your password?</NuxtLink>
        </form>
    </div>
</template>
<style scoped lang="scss">
@import '../assets/scss/user/UserStyle.scss';
</style>