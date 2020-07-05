<template>
  <section class="gridPortfolio">
    <div
      v-for="tabFour in tabFours"
      :key="tabFour.id"
      @click="clickUrl(tabFour)"
    >
      <nuxt-link :to="tabFour.to" target="_blank">
        <figure class="elevation-4 bgWhite pa-4">
          <img :src="tabFour.name" alt />
        </figure>
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      tabFours: [
        {
          name: require("@/assets/images/portfolio/port25.jpg"),
          to: "https://chatskyswordchat.github.io/chatJobbkk/"
        },
        {
          name: require("@/assets/images/portfolio/port26.jpg"),
          to: "https://chatskyswordchat.github.io/orchidJobs/index.html"
        },
        {
          name: require("@/assets/images/portfolio/port27.jpg"),
          to: { name: "portfolio-id", params: { id: 27 } }
        }
      ]
    };
  },
  methods: {
    clickUrl(tabFour) {
      // window.location = tabFour.to;
      window.open(tabFour.to, '_blank');
    }
  }
};
</script>

<style></style>
