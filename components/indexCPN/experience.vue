<template>
  <div class="calC bg3">
    <v-container>
      <v-row>
        <v-col cols="12">
          <h2 class="mb-4 colorWhite">WORK HISTORY</h2>
        </v-col>

        <section class="flexEx">
          <v-col cols="12" md="4">
            <div class="bg2 elevation-8"></div>
          </v-col>
          <v-col cols="12" md="8">
            <v-timeline>
              <v-timeline-item
                v-for="(item, index) in items"
                :key="index.id"
                color="bgRed"
              >
                <template v-slot:opposite>
                  <span class="font10 colorWhite">{{ item.date }}</span>
                </template>
                <v-card class="elevation-2 experience">
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
        </section>
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
          Responsive, design banner for customers to use the service`
        },
        {
          date: "February 2016 to May 2017",
          company: `บริษัท อีซี่วัน ไทย`,
          position: "Web Designer",
          detail: `Website Design Write Html Css Code and Make Responsive Screens, Banner and Logo Design`
        },
        {
          date: "February 2016 to May 2017",
          company: `Knight Frank Thailand | Real Estate Agents`,
          position: "Graphic Designer",
          detail: `Design banners, brochures, vinyl banners. Check the work already. To enter the printing process`
        }
      ]
    };
  }
};
</script>

<style scoped>
.flexEx {
  display: flex;
  flex-wrap: wrap;
}
.bg2 {
  background: url(../../assets/images/home/bg2.jpg) 40% 50% no-repeat;
  background-size: auto;
  min-height: 100vh;
}
.bg3 {
  background: url(../../assets/images/home/bg3.jpg) top center no-repeat;
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
@media (max-width:960px){
    .bg2 { display: none;}
}
</style>
