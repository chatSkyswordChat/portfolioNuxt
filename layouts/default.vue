<template>
  <v-app>
    <navbar />
    <v-content>
        <v-container>
          <v-row>
            <router-view />
          </v-row>
        </v-container>
    </v-content>
  </v-app>
</template>

<script>
import navbar from "@/components/navbar/navbar";
export default {
  components: {
    navbar
  }
};
</script>

<style></style>
