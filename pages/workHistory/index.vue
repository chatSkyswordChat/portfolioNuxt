<template>
  <div class="calC bg3 portTop">
    <v-container>
      <v-row>
        <v-col cols="12">
          <h2 class="mb-4 colorWhite fontHeading">Work History</h2>
          <v-timeline>
            <v-timeline-item
              v-for="(item, index) in items"
              :key="index.id"
              color="bgRed"
            >
              <template v-slot:opposite>
                <span class="font10 colorWhite">{{ item.date }}</span>
              </template>
              <v-card
                class="elevation-2 experience"
                :data-aos="item.fade"
                :data-aos-duration="item.number"
              >
                <v-card-title class="colorWhite bgRed">
                  {{ item.company }}
                </v-card-title>
                <h6 class="font12 px-4">{{ item.position }}</h6>
                <v-card-text>
                  {{ item.detail }}
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          date: "June 2017 to Present",
          company: `บริษัท จัดหางาน จ๊อบบีเคเค ดอท คอม จำกัด`,
          position: "Web Designer",
          detail: `Design website, write Html Css code and make screen to be 
          Responsive, design banner for customers to use the service`,
          fade: "fade-left",
          number: "500"
        },
        {
          date: "February 2016 to May 2017",
          company: `บริษัท อีซี่วัน ไทย`,
          position: "Web Designer",
          detail: `Website Design Write Html Css Code and Make Responsive Screens, Banner and Logo Design`,
          fade: "fade-right",
          number: "1000"
        },
        {
          date: "September 2015 to February 2016",
          company: `Knight Frank Thailand | Real Estate Agents`,
          position: "Graphic Designer",
          detail: `Design banners, brochures, vinyl banners. Check the work already. To enter the printing process`,
          fade: "fade-left",
          number: "1500"
        },
        {
          date: "September 2012 to September 2015",
          company: `บริษัท วินเนอร์ ออนไลน์ จำกัด`,
          position: "Web Designer",
          detail: `Banner design, media design Design package design, logo, website design and write html css 
          and display the screen responsive`,
          fade: "fade-right",
          number: "2000"
        },
        {
          date: "September 2009 to September 2012",
          company: `Thailand Business Pages`,
          position: "Graphic Designer",
          detail: `Design various advertising media for customers who come to buy advertising pages 
          to book the company. And bring all advertisements into the picture And distributed to customers 
          And participants in Thailand Industrial Fair and Food Pack`,
          fade: "fade-left",
          number: "2500"
        },
        {
          date: "March 2009 to July 2009",
          company: `บริษัท ก.การพิมพ์แอนด์สติกเกอทันใจ`,
          position: "Graphic Designer",
          detail: `Design print media such as logos, packaging, product labels, stickers, 
          and then inspect To enter the printing process`,
          fade: "fade-right",
          number: "2800"
        }
      ]
    };
  },
  async mounted() {
    const AOS = await import("aos");
    AOS.init();
  }
  // or
  // mounted() {
  //   import("aos").then(AOS => AOS.init());
  // }
};
</script>

<style scoped>
.portTop {
  padding-top: 55px;
}
.bg3 {
  background: url(~assets/images/home/bg3.jpg) top center repeat-y;
  background-size: auto;
  min-height: 100vh;
  position: relative;
  z-index: 1;
}
.bg3::before {
  content: "";
  position: absolute;
  width: 100vw;
  max-width: 100vw;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(211, 47, 47, 0.4);
  z-index: -1;
}
.experience .v-card__title {
  font-size: var(--font12);
}
.experience .v-card__text {
  font-size: var(--font10);
}
@media (max-width: 960px) {
  .bg2 {
    display: none;
  }
}
</style>
