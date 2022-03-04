<template>
  <div class="row" style="margin-bottom: 10px">
    <div class="header row degradadoBanderaGal">
      <div class="col-md-12">
        <div class="left col-md-6 horizontalText">
          <div class="left logo">
            <img src="../assets/logoHG.png" style="width: 60px" />
          </div>
          <div class="left subtitulo">
            <span class="textoRojo yellowShadowText_2_2_5 bold">
              Hermandad Gallega de Venezuela A.C.
            </span>
            <br />
            <span class="textoAmarillo redShadowText_2_2_5"> Galicia en Caracas </span>
          </div>
        </div>
        <div class="left InfoUser col-md-3 mr-1">
          <span class="fw-bold">Bienvenido: </span> {{ username }}<br />
          <span class="fw-bold">Última conexión: {{ lastConnectionDate }}</span>
        </div>
        <div class="right col-md-2">
          <div class="horizontalText">
            <div>
              <p>Fecha: {{ currentDate() }}</p>
            </div>
            <div>
              <font-awesome-icon icon="globe" size="1x" /> &nbsp;Idioma: &nbsp;
              <select class="form-control" id="selLang">
                <option value="spa" selected>Español</option>
                <option value="gal">Gallego</option>
                <option value="eng">Inglés</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-12 text-center">
        <h3 class="text-white blackShadowText_2_2_5" v-if="IsPartner">
          Portal para Asociados
        </h3>
        <h3 class="text-white blackShadowText_2_2_5" v-if="!IsPartner">
          Portal Administrativo
        </h3>
      </div>
      <div class="col-md-12">
        <ul id="menuDD" class="dropdown">
          <li v-for="menu in primaryMenu" :key="menu">
            <a :href="menu.path">
              {{ menu.name }}
              <span v-if="menu.children"><i class="fas fa-caret-down"></i> </span>
            </a>
            <ul v-if="menu.children">
              <li v-for="child in menu.children" :key="child">
                <a :href="child.path" v-if="!child.children"> {{ child.name }} </a>
                <a href="#" v-if="child.children">
                  {{ child.name }} <span><i class="fas fa-caret-right"></i> </span>
                </a>
                <ul v-if="child.children">
                  <li v-for="child1 in child.children" :key="child1">
                    <a href=""> {{ child1.name }} </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="right">
            <span class="right">
              <button class="btn btn-primary" @click="signOut">Cerrar Sesión</button>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "InternalHeader",
  data() {
    return {
      lastConnectionDate: null,
      IsPartner: false,
      username: "",
      userId: 0,
      rolId: [],
      primaryMenu: [
        {
          name: "Resumen",
          path: "\\ResumePartner",
        },
        {
          name: "Administración",
          children: [
            {
              name: "Servicios",
              path: "\\AdminServicios",
            },
          ],
        },
      ],
    };
  },
  mounted() {
    if (!this.$store.state.userName) {
      this.$router.push("/login");
    }
    if (this.$store.state.IdSocio) {
      this.IsPartner = true;
    }
    var date = this.$store.state.lastConnectedDate;
    this.username = this.$store.state.userName;
    this.userId = this.$store.state.userId;
    this.rolId = this.$store.state.rolId;
    if (!date) {
      date = new Date();
    }
    this.lastConnectionDate = moment.utc(date).local().format("DD-MM-YYYY HH:mm");
  },
  methods: {
    currentDate() {
      return new Date().toLocaleString();
    },
    signOut() {
      this.$store.dispatch("auth/logout", this.userId);
      this.$router.push("/login");
    },
  },
};
</script>
