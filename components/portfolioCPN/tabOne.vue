<template>
  <section class="gridPortfolio">
    <div v-for="tabOne in tabOneS" :key="tabOne.id">
      <nuxt-link :to="tabOne.to" target="_blank">
        <figure class="elevation-4 bgWhite pa-4">
          <img :src="tabOne.name" :lazy-src="tabOne.name" alt />
        </figure>
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      tabOneS: [
        {
          name: require("@/assets/images/portfolio/port1.jpg"),
          to: { name: "portfolio-id", params: { id: 1 } }
        },
        {
          name: require("@/assets/images/portfolio/port2.jpg"),
          to: { name: "portfolio-id", params: { id: 2 } }
        },
        {
          name: require("@/assets/images/portfolio/port3.jpg"),
          to: { name: "portfolio-id", params: { id: 3 } }
        },
        {
          name: require("@/assets/images/portfolio/port4.jpg"),
          to: { name: "portfolio-id", params: { id: 4 } }
        },
        {
          name: require("@/assets/images/portfolio/port5.jpg"),
          to: { name: "portfolio-id", params: { id: 5 } }
        }
      ]
    };
  }
};
</script>

<style></style>
