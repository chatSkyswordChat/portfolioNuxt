<template>
  <v-col cols="12">
    <section class="gridThree py-4">
      <div
        class="bgWhite elevation-8 pa-4 flexThree"
        v-for="(item, index) in items"
        :key="index.id"
        :data-aos="item.fade"
        :data-aos-duration="item.number"
      >
        <figure>
          <img :src="item.img" alt="" />
        </figure>

        <div>
          <h6 class="font14">{{ item.name }}</h6>
          <p class="font10 colorgray">{{ item.detail }}</p>
        </div>
      </div>
    </section>
  </v-col>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          img: require("@/assets/images/home/three-02.svg"),
          name: "Web Designer",
          detail: "I specialize in website design.",
          fade: "fade-up",
          number: 1000
        },
        {
          img: require("@/assets/images/home/three-03.svg"),
          name: "Photographer",
          detail: "I have the ability to take pictures and edit images.",
          fade: "fade-up",
          number: 2000
        },
        {
          img: require("@/assets/images/home/three-01.svg"),
          name: "Graphic Design",
          detail: "I have the ability to draw vector and design banners.",
          fade: "fade-up",
          number: 3000
        }
      ]
    };
  },
};
</script>

<style scoped>
.gridThree {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 15px;
}
.flexThree {
  display: flex;
  align-items: center;
  border-radius: 10px;
}
.flexThree figure {
  margin-right: 10px;
  flex-basis: 20%;
}
.flexThree div {
  flex-basis: 80%;
}
.flexThree img {
  max-width: 100px;
}
</style>
