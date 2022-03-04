<template>
  <div class="row">
    <div class="col-md-12 text-center text-white"><h1>Sección comercial</h1></div>
    <div class="card">
      <div class="card-header">Agencia Bancaria</div>
      <div class="card-body"></div>
      <div class="card-footer"></div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: "BusinessPartnerContent",
  data() {
    return {};
  },
  mounted() {
    if (!this.$store.state.userName) {
      this.$router.push("/login");
    }
  },
  methods: {},
};
</script>

<style></style>
