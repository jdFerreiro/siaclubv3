<template>
  <div class="row mt-5">
    <div class="col-md-6 card mx-auto justify-content-center py-3 px-2">
      <img
        id="profile-img"
        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
        class="mx-auto profile-img-card"
        width="100"
      />
      <Form @submit="handleLogin" :validation-schema="schema">
        <div class="form-group mb-3">
          <label for="username">Correo Electrónico</label>
          <Field name="username" type="text" class="form-control" />
          <ErrorMessage name="username" class="error-feedback" />
        </div>
        <div class="form-group mb-3">
          <label for="userpassword">Contraseña</label>
          <Field name="userpassword" type="password" class="form-control" />
          <ErrorMessage name="userpassword" class="error-feedback" />
        </div>
        <div class="form-group">
          <a href="#" class="left">¿Olvidó su contraseña?</a>
          <button class="right btn btn-primary btn-block" :disabled="loading">
            <span v-show="loading" class="spinner-border spinner-border-sm"></span>
            <span>Login</span>
          </button>
        </div>
        <div class="form-group">
          <div v-if="message" class="alert alert-danger" role="alert">
            {{ message }}
          </div>
        </div>
      </Form>
    </div>
  </div>
</template>
<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "LoginContent",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      username: yup.string().required("Username is required!"),
      userpassword: yup.string().required("Password is required!"),
    });
    return {
      loading: false,
      message: "",
      schema,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/ResumePartner");
    }
  },
  methods: {
    handleLogin(data) {
      this.loading = true;

      var user = {
        email: data.username,
        password: data.userpassword,
      };

      this.$store.dispatch("auth/login", user).then(
        (response) => {
          if (!response.success) {
            this.receiveError = true;
            this.errorMsg = response.message;
            return;
          }

          var data = response.data;

          this.$store.commit("setAuthenticated", true);
          localStorage.setItem("token", data.accessToken);
          this.$store.commit("setAuthData", {
            userId: data.userId,
            email: data.email,
            stateId: data.userStateId,
            userName: data.userName,
            lastConnectedDate: data.lastConnectedDate,
            rolId: data.userRolId,
            idSocio: data.idSocio,
            idPersona: data.idPersona,
          });

          this.loading = false;
          if (!data.firstTime) {
            this.$router.push("/profile");
          }

          this.$router.push("/ResumePartner");
        },
        (error) => {
          this.loading = false;
          this.message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    },
  },
};
</script>
