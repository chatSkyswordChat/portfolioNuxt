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
          // to: "/portfolio/27",
          to: { name: "portfolio", params: { id: 27 } }
        }
      ]
    };
  },
  methods: {
    clickUrl(tabFour) {     
      if(tabFour.to.name != null){
        var url = `/${tabFour.to.name}/${tabFour.to.params.id}`
        window.open(url);
      }else{
        window.open(tabFour.to, '_blank');
      }
      // window.open(tabFour.to, '_blank');
    }
  }
};
</script>

<style></style>
