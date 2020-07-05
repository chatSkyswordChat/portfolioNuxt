<template>
  <v-col cols="12">
    <v-row>
      <v-col cols="12">
        <h2 class="fontHeading">My Skill</h2>
      </v-col>
      <v-col cols="12" md="6">
        <div
          v-for="(item, index) in items"
          :key="index.id"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <p class="font10">{{ item.name }}</p>
          <v-progress-linear
            color="red darken-2"
            v-model="item.skill"
            height="20"
            :rounded="true"
            reactive
            class="font10 progressCustom mb-4"
          >
            <template v-slot="{ value }">
              <span>{{ Math.ceil(value) }}%</span>
            </template>
          </v-progress-linear>
        </div>
      </v-col>

      <v-col cols="12" md="6">
        <section class="gridSkill">
          <div v-for="(skill, index) in skills" :key="index">
            <v-hover v-slot:default="{ hover }">
              <div
                class="bgSkill elevation-4"
                :data-aos="skill.fade"
                :data-aos-duration="skill.number"
              >
                <section class="flexSkill">
                  <img :src="skill.src" alt="" />
                  <h6 class="font10">{{ skill.name }}</h6>
                </section>
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out bgBlack v-card--reveal white--text"
                    style="height: 100%;"
                  >
                    <span class="font10 text-center pa-4">{{
                      skill.detail
                    }}</span>
                  </div>
                </v-expand-transition>
              </div>
            </v-hover>
          </div>
        </section>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { name: "Adobe Illustrator", skill: 90 },
        { name: "Adobe Photoshp", skill: 90 },
        { name: "Adobe Xd", skill: 70 },
        { name: "Adobe Lightroom", skill: 90 },
        { name: "Html + Css + Responsive", skill: 90 },
        { name: "Java Script", skill: 20 },
        { name: "Vue & Nuxt", skill: 20 }
      ],
      skills: [
        {
          name: "Photographer",
          src: require("@/assets/images/home/skill-01.svg"),
          detail: `I have the ability to take pictures and decorate pictures as a hobby. 
          I like traveling to take beautiful photos.`,
          fade: "fade-down",
          number: 1000
        },
        {
          name: "HTML CSS Responsive",
          src: require("@/assets/images/home/skill-02.svg"),
          detail: `I can write html css and make it support all screens, but javascript I still have to practice a lot.`,
          fade: "fade-left",
          number: 1500
        },
        {
          name: "Graphic Design",
          src: require("@/assets/images/home/skill-03.svg"),
          detail: `I use it to design banners, logos, and various publications with Adobe, Illustrator, and Photoshop.`,
          fade: "fade-up",
          number: 2000
        },
        {
          name: "Web Design",
          src: require("@/assets/images/home/skill-04.svg"),
          detail: `I designed the website with Adobe xd to present at the meeting before coding`,
          fade: "fade-right",
          number: 2500
        }
      ]
    };
  }
};
</script>

<style scoped>
.v-progress-linear.progressCustom {
  color: var(--colorWhite);
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.8;
  position: absolute;
  width: 100%;
}
.gridSkill {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
}
.bgSkill {
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background: var(--colorWhite);
  height: 100%;
}
.bgSkill img {
  max-width: 100%;
  width: 150px;
}
.flexSkill {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
@media (max-width: 960px) {
  .gridSkill {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
}
</style>
