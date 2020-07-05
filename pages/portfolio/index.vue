<template>
  <v-col cols="12" class="portTop">
    <article class="mb-7">
      <h2 class="fontHeading">Print Media</h2>
      <tabOne class="pb-7" />
    </article>

    <v-divider class="bggrayLight mb-7"></v-divider>

    <article class="mb-7">
      <h2 class="fontHeading">Banner</h2>
      <tabTwo class="pb-7" />
    </article>

    <v-divider class="bggrayLight mb-7"></v-divider>

    <article class="mb-7">
      <h2 class="fontHeading">Logo</h2>
      <tabThree class="pb-7" />
    </article>

    <v-divider class="bggrayLight mb-7"></v-divider>

    <article class="mb-7">
      <h2 class="fontHeading">Web Design</h2>
      <tabFour class="pb-7" />
    </article>
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
.portTop {
  padding-top: 55px;
}
</style>
