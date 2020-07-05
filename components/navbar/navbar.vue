<template>
  <div>
    <v-app-bar tile fixed color="white" class="headerMenu">
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="drawer = true"
      ></v-app-bar-nav-icon>

      <v-spacer class="hidden-md-and-up"></v-spacer>

      <v-toolbar-title class="logo">
        <nuxt-link to="/">
          <img src="@/assets/images/home/logoChatSkysword.svg" alt="" />
        </nuxt-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
        v-for="(menu, index) in menus"
        :key="index.id"
        text
        exact-active-class="active"
        :to="menu.route"
        class="btnMenu hidden-sm-and-down"
      >
        {{ menu.name }}
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item
            v-for="(menu, index) in menus"
            :key="index.id"
            :to="menu.route"
            exact-active-class="active"
            class="btnMenu"
          >
            <v-list-item-icon class="font14 mr-2">
              <font-awesome-icon :icon="menu.icon" />
            </v-list-item-icon>
            <v-list-item-title class="mobileMenu">{{
              menu.name
            }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        { name: "HOME", route: { name: "index" }, icon: "home" },
        {
          name: "Curriculum Vitae",
          route: { name: "curriculumVitae" },
          icon: "portrait"
        },
        {
          name: "PORTFOLIO",
          route: { name: "portfolio" },
          icon: "file"
        },
        {
          name: "WORK HISTORY",
          route: { name: "workHistory" },
          icon: "graduation-cap"
        },
        {
          name: "CONTACT",
          route: { name: "contact" },
          icon: "mobile-alt"
        }
      ],
      drawer: false
    };
  }
};
</script>

<style scoped>
.logo {
  padding-left: 0 !important;
}
.logo a {
  display: flex;
  align-items: center;
}
.logo img {
  max-width: 100px;
}
.btnMenu {
  margin-right: 10px;
  color: var(--colorBlack);
  position: relative;
}
.btnMenu:last-child {
  margin-right: 0;
}
.btnMenu:hover,
.btnMenu:focus {
  background: var(--colorRed);
  color: var(--colorWhite) !important;
  transition: 0.5s ease-in-out;
}
.btnMenu::before {
  opacity: 0;
}
.btnMenu.active {
  background: var(--colorRed);
  color: var(--colorWhite) !important;
  opacity: 1;
}
.mobileMenu {
  font-size: var(--font10) !important;
}
</style>
