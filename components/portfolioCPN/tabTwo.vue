<template>
  <section class="gridPortfolio">
    <div v-for="tabTwo in tabTwos" :key="tabTwo.id">
      <nuxt-link :to="tabTwo.to" target="_blank">
        <figure class="elevation-4 bgWhite pa-4">
          <img :src="tabTwo.name" :lazy-src="tabTwo.name" alt />
        </figure>
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      tabTwos: [
        {
          name: require("@/assets/images/portfolio/port6.jpg"),
          to: { name: "portfolio-id", params: { id: 6 } }
        },
        {
          name: require("@/assets/images/portfolio/port7.jpg"),
          to: { name: "portfolio-id", params: { id: 7 } }
        },
        {
          name: require("@/assets/images/portfolio/port8.jpg"),
          to: { name: "portfolio-id", params: { id: 8 } }
        },
        {
          name: require("@/assets/images/portfolio/port9.jpg"),
          to: { name: "portfolio-id", params: { id: 9 } }
        },
        {
          name: require("@/assets/images/portfolio/port10.jpg"),
          to: { name: "portfolio-id", params: { id: 10 } }
        },
        {
          name: require("@/assets/images/portfolio/port11.jpg"),
          to: { name: "portfolio-id", params: { id: 11 } }
        },
        {
          name: require("@/assets/images/portfolio/port12.jpg"),
          to: { name: "portfolio-id", params: { id: 12 } }
        },
        {
          name: require("@/assets/images/portfolio/port13.jpg"),
          to: { name: "portfolio-id", params: { id: 13 } }
        }
      ]
    };
  }
};
</script>

<style></style>
