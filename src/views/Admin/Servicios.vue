<template>
  <InternalHeader></InternalHeader>
  <ServicesContent></ServicesContent>
</template>

<script>
import InternalHeader from "../../components/InternalHeader.vue";
import ServicesContent from "../../components/Admin/ServicesContent.vue";

export default {
  name: "ServicesAdmin",
  components: {
    InternalHeader,
    ServicesContent,
  },
  data() {
    return {};
  },
};
</script>
