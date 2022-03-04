<template>
  <Tabla :tableInfo="tableInfo"></Tabla>
</template>

<script>
import Tabla from "../Genericos/Tabla.vue";

export default {
  name: "ServicesContentAdmin",
  components: {
    Tabla,
  },
  data() {
    return {
      dataResult: null,
      tableInfo: {
        idData: 0,
        header: "Información de Servicios",
        dataKey: "IdServicio",
        fields: [
          {
            field: "IdServicio",
            showField: "IdServicio",
            header: "Id",
            dropDown: null,
          },
          {
            field: "Descripcion",
            showField: "Descripcion",
            header: "Descripción",
            dropDown: null,
          },
          {
            field: "IdEstadoServicio",
            showField: "estadoservicio.Descripcion",
            header: "Estado Servicio",
            dropDown: {
              apiPath: "estadoServicio/getAll",
              fieldLabel: "Descripcion",
              fieldValue: "IdEstadoServicio",
            },
          },
        ],
        detailFields: [
          {
            name: "subservicios",
            fields: ["Descripcion", "medico"],
          },
        ],
        apiPathGet: "servicio/getAll",
        apiPathUpdate: "servicio/update",
        apiPathCreate: "servicio/create",
      },
    };
  },
  mounted() {
    if (this.apiPath) {
      this.$store
        .dispatch(this.apiPath)
        .then((result) => {
          this.dataResult = result.data;
        })
        .catch((error) => {
          console.log("catch Error: " + error.message);
          if (error.response.status == 403) {
            this.$store.state.auth.status.loggedIn = false;
            this.$router.push("/login");
          }
        });
    }
  },
  methods: {
    AddItem(id) {
      this.idData = id;
    },
    EditItem(id) {
      this.idData = id;
    },
    DelItem() {},
  },
};
</script>

<style></style>
