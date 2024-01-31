<script setup lang="ts">

</script>

<template>
    <div class="user-account">
        <span class="user-account__title">My account</span>
        <div class="user-account__buttons">
            <button class="user-account__signin">Sign in</button>
            <button class="user-account__register">Register</button>
        </div>
        <form action="" class="user-account__form form">
            <input class="form__email" type="text" name="email" placeholder="Email">
            <input class="form__password" type="text" name="password" placeholder="Password">
            <div class="form__checkbox">
                <input class="form__input" type="checkbox" name="remember-me" value="">
                <label class="form__label" for="remember-me">Remember me</label>
            </div>
            <button class="form__signin">SIGN IN</button>
            <NuxtLink class="form__forgot-password">Have you forgotten your password?</NuxtLink>
        </form>
    </div>
</template>
<style scoped lang="scss">
@import '../assets/scss/UserPage/UserStyle.scss';
</style>