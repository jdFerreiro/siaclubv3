<template>
  <div class="row">
    <div class="header row degradadoBanderaGal">
      <div class="col-md-12">
        <div class="left col-md-8 horizontalText">
          <div class="left logo">
            <img src="../../assets/logoHG.png" style="width: 60px" />
          </div>
          <div class="left subtitulo">
            <span class="textoRojo yellowShadowText_2_2_5 bold">
              Hermandad Gallega de Venezuela A.C.
            </span>
            <br />
            <span class="textoAmarillo redShadowText_2_2_5"> Galicia en Caracas </span>
          </div>
        </div>
        <div class="right">
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
      <ul id="menuDD" class="dropdown w-100">
        <li v-for="menu in primaryMenu" :key="menu">
          <a href="#">
            {{ menu.name }}
            <span v-if="menu.children"><i class="fas fa-caret-down"></i> </span>
          </a>
          <ul v-if="menu.children">
            <li v-for="child in menu.children" :key="child">
              <a href="" v-if="!child.children"> {{ child.name }} </a>
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
        <li class="force-right">
          <router-link to="/Login">
            <span><i class="fas fa-user"></i></span>&nbsp;&nbsp;Ingresar&nbsp;&nbsp;<span
            ></span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "../../plugins/font-awesome";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      primaryMenu: [
        {
          name: "Inicio",
        },
        {
          name: "Junta Directiva",
          children: [
            { name: "Junta Directiva" },
            { name: "Órganos Electivos" },
            {
              name: "Comité de Damas",
              children: [{ name: "Escuela de Sevillanas" }, { name: "Contacto" }],
            },
            {
              name: "Comité Juvenil",
            },
          ],
        },
        {
          name: "Direcciones",
          children: [
            {
              name: "Dirección de Admisión y Órden Social",
              children: [
                { name: "Planillas para descargar" },
                { name: "Trámites" },
                { name: "Contacto" },
              ],
            },
            {
              name: "Dirección de Asistencia Social",
              children: [
                { name: "Centro de Día Santiago Apostol" },
                { name: "Jornadas de Salud" },
                { name: "Directorio Médico" },
                { name: "Contacto" },
              ],
            },
            {
              name: "Dirección de Cultura",
              children: [
                { name: "Planillas para descargar" },
                { name: "Grupos Folklóricos" },
                { name: "Teatro" },
                { name: "Corales" },
                { name: "Gaitas" },
                { name: "Ballet" },
                { name: "Contacto" },
              ],
            },
            {
              name: "Dirección de Deportes",
              children: [
                { name: "Gimnasio" },
                { name: "Actividades Deportivas" },
                { name: "Contacto" },
              ],
            },
            {
              name: "Dirección de Fiestas",
              children: [
                { name: "Día de Galicia" },
                { name: "Noite de San Xoan" },
                { name: "Contacto" },
              ],
            },
            {
              name: "Obras y Mantenimiento",
              children: [
                { name: "Mantenimiento y Remodelaciones" },
                { name: "Contacto" },
              ],
            },
            {
              name: "Dirección de Relaciones Públicas",
              children: [{ name: 'Boletín "Somos Hermandad"' }, { name: "Contacto" }],
            },
            {
              name: "Oficina de Administración",
            },
          ],
        },
        {
          name: "Estatutos y Reglamentos",
          children: [
            {
              name: "Estatutos",
            },
            {
              name: "Reglamento de la Cámara de Representantes",
            },
          ],
        },
        {
          name: "Servicios",
          children: [
            {
              name: "Servicios Médicos",
            },
            {
              name: "Restaurantes y Cafeterías",
            },
            {
              name: "Área Comercial",
            },
          ],
        },
        {
          name: "OBAS",
          children: [
            {
              name: "Planillas para Descargar",
            },
            {
              name: "Programas",
            },
            {
              name: "Contacto",
            },
            {
              name: "Convocatorias",
            },
          ],
        },
        {
          name: "Conócenos",
          children: [
            {
              name: "Historia",
            },
            {
              name: "Sedes",
              children: [
                {
                  name: "Maripérez",
                },
                {
                  name: "Valle Fresco",
                },
              ],
            },
          ],
        },
        {
          name: "Prensa Española",
          children: [
            {
              name: "Magazine Español",
            },
            {
              name: "La Voz de Galicia",
            },
            {
              name: "La Región Internacional",
            },
            {
              name: "Galicia en el Mundo",
            },
          ],
        },
      ],
      selectedDropdown: "None",
      content: "",
    };
  },
  methods: {
    currentDate() {
      return new Date().toLocaleString();
    },
    setSelectedItem(item) {
      this.selectedDropdown = item;
    },
  },
};
</script>
