<template>
  <Header></Header>
  <HomeContent></HomeContent>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Home/Header.vue";
import HomeContent from "../components/Home/Content.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: {
    Header,
    HomeContent,
  },
};
</script>
