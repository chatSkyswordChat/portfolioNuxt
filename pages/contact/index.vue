<template>
  <section class="contact calC pt-12">
    <v-container class="relative">
      <v-row>
        <v-col cols="12" class="contactScale">
          <h2 class="fontContact colorWhite">CONTACT</h2>
          <div class="mb-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.1101868660153!2d100.63413631465448!3d13.77222819033428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d61f69cda26b9%3A0xe7335e9bf59d0a9a!2z4LiL4Lit4LiiIOC4peC4suC4lOC4nuC4o-C5ieC4suC4pyAxMDkg4LmB4LiC4Lin4LiHIOC4hOC4peC4reC4h-C4iOC4seC5iOC4mSDguYDguILguJXguJrguLLguIfguIHguLDguJvguLQg4LiB4Lij4Li44LiH4LmA4LiX4Lie4Lih4Lir4Liy4LiZ4LiE4LijIDEwMjQw!5e0!3m2!1sth!2sth!4v1594735658996!5m2!1sth!2sth"
              width="600"
              height="400"
              frameborder="0"
              style="border:0;"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
              class="map"
            ></iframe>
          </div>
          <article class="gridContact mb-8">
            <figure
              v-for="item in items"
              :key="item.id"
              :data-aos="item.fade"
              :data-aos-duration="item.number"
              class="bgWhite elevation-5 pa-4"
            >
              <img :src="item.icon" alt="" />
              <p class="font12">{{ item.name }}</p>
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
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
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
  max-width: 70px;
}
@media (max-width: 768px) {
  .map {
    max-width: 100%;
  }
  .contactScale {
    margin: 0;
  }
  .fontContact {
    font-size: 5rem;
  }
  .gridContact {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 576px) {
  .gridContact {
    grid-template-columns: 1fr;
  }
}
</style>
