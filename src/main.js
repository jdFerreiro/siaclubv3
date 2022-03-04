import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Toaster from '@meforma/vue-toaster';

import PrimeVue from "primevue/config";
import InputText from "primevue/inputtext";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import DropDown from "primevue/dropdown"

import "bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/bootstrap4-light-blue/theme.css";
import "primeicons/primeicons.css";
import "@/css/site.css";
import "@/css/colores.css";
import "@/css/menu.css";


import "bootstrap/dist/js/bootstrap.min.js";

import { FontAwesomeIcon } from './plugins/font-awesome';
import setupInterceptors from './services/setupInterceptors';
setupInterceptors(store);

createApp(App)
  .use(router)
  .use(store)
  .use(Toaster)
  .use(PrimeVue)
  .component("font-awesome-icon", FontAwesomeIcon)
  .component("InputText", InputText)
  .component("DataTable", DataTable)
  .component("Column", Column)
  .component("DropDown",DropDown)
  .mount("#app");