<template>
  <section class="contact calC pt-12 maxW">
    <v-container class="relative">
      <v-row>
        <v-col cols="12" class="contactScale">
          <h2 class="fontContact colorWhite">CONTACT</h2>
          <article class="gridContact">
            <figure
              v-for="item in items"
              :key="item.id"
              :data-aos="item.fade"
              :data-aos-duration="item.number"
              class="bgWhite elevation-5 pa-4"
            >
              <img :src="item.icon" alt="" />
              <p>{{ item.name }}</p>
            </figure>
          </article>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: "08-9762-0645",
          icon: require("@/assets/images/contact/app-01.svg"),
          fade: "fade-left",
          number: "500"
        },
        {
          name: "dynastystrike@gmail.com",
          icon: require("@/assets/images/contact/app-02.svg"),
          fade: "fade-down",
          number: "1000"
        },
        {
          name: "chatthong hongwisuthikul",
          icon: require("@/assets/images/contact/app-03.svg"),
          fade: "fade-right",
          number: "1500"
        },
        {
          name: "chat_skysword",
          icon: require("@/assets/images/contact/app-04.svg"),
          fade: "fade-up",
          number: "2000"
        }
      ]
    };
  }
};
</script>

<style scoped>
.relative {
  position: relative;
  height: 100%;
}
.contact::before {
  width: 100%;
  height: 100%;
  position: absolute;
  content: "";
  background: rgba(0, 0, 0, 0.5);
}
.contact {
  background: url(~assets/images/contact/contact.jpg) center center no-repeat;
  background-size: cover;
  min-height: 100vh;
  position: relative;
}
.contactScale {
  margin: 15vh 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}
.fontContact {
  font-size: 8rem;
  z-index: 2;
}
.gridContact {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  grid-gap: 15px;
  width: 100%;
  align-items: center;
}
.gridContact figure {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  border-radius: 10px;
}
.gridContact img {
  max-width: 80px;
}
@media (max-width: 768px) {
  .contactScale{
    margin: 0;
  }
  .fontContact {
    font-size: 5rem;
  }
}
</style>
