<template>
  <v-app>
    <Header />
    <v-main>
      <v-content>
        <router-view></router-view>
      </v-content>
    </v-main>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "./components/common/header.vue";
import Footer from "./components/common/footer.vue";

export default Vue.extend({
  name: "App",

  components: {
    Header,
    Footer
  },

  data: () => ({
    //
  })
});
</script>
