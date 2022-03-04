<template>
  <Header></Header>
  <LoginContent></LoginContent>
</template>

<script>
// @ is an alias to /src
import Header from '../components/Home/Header.vue';
import LoginContent from '../components/Login/LoginContent.vue';

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Login',
    components: {
        Header,
        LoginContent,
    }
}
</script>
