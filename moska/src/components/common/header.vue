<template>
  <v-card class="mx-auto overflow-hidden" height="400">
    <v-app-bar color="deep-purple" dark app>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" fixed temporary app>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <router-link to="/">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/transactions">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-format-list-bulleted</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Transactions</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/credit-cards">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-credit-card</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Credit Cards</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/accounts">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-wallet</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Accounts</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/about">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>About</v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {
  private drawer = false;
  private group = null;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.v-navigation-drawer__content{
  a {
    text-decoration: none;
  }
}

</style>
