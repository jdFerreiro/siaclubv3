<template>
  <InternalHeader></InternalHeader>
  <ProfileContent></ProfileContent>
</template>

<script>
// @ is an alias to /src
import InternalHeader from "../components/InternalHeader.vue";
import ProfileContent from "../components/Profile/ProfileContent.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Profile",
  components: {
    InternalHeader,
    ProfileContent,
  },
};
</script>
