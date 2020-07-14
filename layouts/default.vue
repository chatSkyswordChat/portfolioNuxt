<template>
  <v-app>
    <navbar />
    <v-content class="overflow-x-hidden">
        <v-container>
          <v-row>
            <nuxt />
          </v-row>
        </v-container>

        <v-footer>
          <footerPort/>
        </v-footer>
    </v-content>
  </v-app>
</template>

<script>
import navbar from "@/components/navbar/navbar";
import footerPort from "@/components/footer/footer";
export default {
  components: {
    navbar,
    footerPort
  }
};
</script>

<style>

</style>
