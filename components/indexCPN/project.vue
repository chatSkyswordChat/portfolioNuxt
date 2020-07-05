<template>
  <v-col cols="12">
    <v-tabs background-color="white" color="red darken-2" left class="mb-4">
      <v-tab>Print Media</v-tab>
      <v-tab>Banner</v-tab>
      <v-tab>Logo</v-tab>
      <v-tab>Web Design</v-tab>

      <v-tab-item v-for="protfolioOne in 1" :key="protfolioOne.id">
        <tabOne />
      </v-tab-item>

      <v-tab-item v-for="protfolioTwo in 1" :key="protfolioTwo.id">
        <tabTwo />
      </v-tab-item>

      <v-tab-item v-for="protfolioThree in 1" :key="protfolioThree.id">
        <tabThree />
      </v-tab-item>

      <v-tab-item v-for="protfolioFour in 1" :key="protfolioFour.id">
        <tabFour />
      </v-tab-item>
    </v-tabs>
  </v-col>
</template>

<script>
import tabOne from "@/components/portfolioCPN/tabOne";
import tabTwo from "@/components/portfolioCPN/tabTwo";
import tabThree from "@/components/portfolioCPN/tabThree";
import tabFour from "@/components/portfolioCPN/tabFour";
export default {
  components: {
    tabOne,
    tabTwo,
    tabThree,
    tabFour
  }
};
</script>

<style>
.gridPortfolio figure,
.gridPortfolioLogo figure {
  display: flex;
  align-items: center;
}
</style>

<style scoped>
.gridPortfolio {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 15px;
  margin-top: 30px;
  justify-items: center;
}
.gridPortfolioLogo {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 15px;
  margin-top: 30px;
}
</style>
