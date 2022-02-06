<template>
  <div id="app">
    <b-container>
      <b-row>
        <Header />
      </b-row>
      <b-row>
        <b-col xl="7" lg="7" md="7" sm="12" cols="12">
          <Profile :character="character" :fetchChar="fetchChar" />
        </b-col>
        <b-col xl="5" lg="5" md="5" sm="12" cols="12">
          <Beer />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Profile from "./components/Profile.vue";
import Beer from "./components/Beer.vue";

export default {
  name: "App",
  components: {
    Header,
    Profile,
    Beer,
  },
  data: () => ({
    character: [],
  }),
  mounted() {
    this.fetchChar();
  },
  methods: {
    fetchChar() {
      this.axios
        .get(`https://random-data-api.com/api/users/random_user`)
        .then((response) => (this.character = response.data));
    },
  },
};
</script>