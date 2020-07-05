<template>
  <section class="gridPortfolioLogo">
    <div v-for="tabThree in tabThreeS" :key="tabThree.id">
        <figure class="elevation-4 bgWhite pa-4">
          <img :src="tabThree.name" :lazy-src="tabThree.name" alt />
        </figure>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      tabThreeS: [
        {
          name: require("@/assets/images/portfolio/port14.jpg"),
          to: { name: "portfolio-id", params: { id: 14 } }
        },
        {
          name: require("@/assets/images/portfolio/port15.jpg"),
          to: { name: "portfolio-id", params: { id: 15 } }
        },
        {
          name: require("@/assets/images/portfolio/port16.jpg"),
          to: { name: "portfolio-id", params: { id: 16 } }
        },
        {
          name: require("@/assets/images/portfolio/port17.jpg"),
          to: { name: "portfolio-id", params: { id: 17 } }
        },
        {
          name: require("@/assets/images/portfolio/port18.jpg"),
          to: { name: "portfolio-id", params: { id: 18 } }
        },
        {
          name: require("@/assets/images/portfolio/port19.jpg"),
          to: { name: "portfolio-id", params: { id: 19 } }
        },
        {
          name: require("@/assets/images/portfolio/port20.jpg"),
          to: { name: "portfolio-id", params: { id: 20 } }
        },
        {
          name: require("@/assets/images/portfolio/port21.jpg"),
          to: { name: "portfolio-id", params: { id: 21 } }
        },
        {
          name: require("@/assets/images/portfolio/port22.jpg"),
          to: { name: "portfolio-printMedia", params: { printMedia: 22 } }
        },
        {
          name: require("@/assets/images/portfolio/port23.jpg"),
          to: { name: "portfolio-printMedia", params: { printMedia: 23 } }
        },
        {
          name: require("@/assets/images/portfolio/port24.jpg"),
          to: { name: "portfolio-printMedia", params: { printMedia: 24 } }
        }
      ]
    };
  }
};
</script>

<style></style>
