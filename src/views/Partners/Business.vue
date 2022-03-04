<template>
  <InternalHeader></InternalHeader>
  <BusinessContent></BusinessContent>
</template>

<script>
import InternalHeader from "../../components/InternalHeader.vue";
import BusinessContent from "../../components/Partner/BusinessContent.vue";

export default {
  name: "BusinessPartner",
  components: {
    InternalHeader,
    BusinessContent,
  },
};
</script>

<style></style>
