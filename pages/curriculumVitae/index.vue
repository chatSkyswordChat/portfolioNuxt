<template>
  <div class="calC bggrayLight bgVitae">
    <v-container>
      <v-row>
        <v-col cols="12" class="bgWhite vitaeTop">
          <section class="gridVitae">
            <div class="leftVitae bgRed pa-4">
              <figure class="cvPic mb-4">
                <img
                  src="@/assets/images/curriculumVitae/0N8A2756.jpg"
                  alt=""
                />
              </figure>

              <article>
                <div class="gridVitaeAlign mb-4">
                  <figure>
                    <img
                      src="@/assets/images/curriculumVitae/CurriculumVitae-01.svg"
                      alt=""
                    />
                  </figure>
                  <div>
                    <p>Birthday : 30 January 1987</p>
                    <p>Height : 165 cm.</p>
                    <p>Weight : 55 kg.</p>
                    <p>Sex : Male</p>
                    <p>Status : Single</p>
                    <p>Nationality : Thai</p>
                    <p>Religion : Buddha</p>
                  </div>
                </div>

                <v-divider class="bgWhite mb-4"></v-divider>

                <div class="gridVitaeAlign mb-4">
                  <figure>
                    <img
                      src="@/assets/images/curriculumVitae/CurriculumVitae-02.svg"
                      alt=""
                    />
                  </figure>
                  <div>
                    <p>
                      447 Lat Phrao 109 Road, Khlong Chan Subdistrict, Bang Kapi
                      District, Bangkok 10240
                    </p>
                  </div>
                </div>

                <v-divider class="bgWhite mb-4"></v-divider>

                <div class="gridVitaeAlign mb-4">
                  <figure>
                    <img
                      src="@/assets/images/curriculumVitae/CurriculumVitae-03.svg"
                      alt=""
                    />
                  </figure>
                  <div>
                    <p>dynastystrike@gmail.com</p>
                  </div>
                </div>

                <v-divider class="bgWhite mb-4"></v-divider>

                <div class="gridVitaeAlign mb-4">
                  <figure>
                    <img
                      src="@/assets/images/curriculumVitae/CurriculumVitae-04.svg"
                      alt=""
                    />
                  </figure>
                  <div>
                    <p>chatthong hongwisuthikul</p>
                  </div>
                </div>

                <v-divider class="bgWhite mb-4"></v-divider>

                <div class="gridVitaeAlign mb-4">
                  <figure>
                    <img
                      src="@/assets/images/curriculumVitae/CurriculumVitae-05.svg"
                      alt=""
                    />
                  </figure>
                  <div>
                    <p>chat_skysword</p>
                  </div>
                </div>

                <v-divider class="bgWhite mb-4"></v-divider>

                <div class="gridVitaeAlign mb-4">
                  <figure>
                    <img
                      src="@/assets/images/curriculumVitae/CurriculumVitae-06.svg"
                      alt=""
                    />
                  </figure>
                  <div>
                    <p>08-9762-0645</p>
                  </div>
                </div>

                <v-divider class="bgWhite mb-4"></v-divider>

                <div class="gridVitaeAlign mb-4">
                  <figure>
                    <img
                      src="@/assets/images/curriculumVitae/CurriculumVitae-07.svg"
                      alt=""
                    />
                  </figure>
                  <div>
                    <p>Skill</p>
                  </div>
                </div>

                <article>
                  <div class="mb-4 pa-4 bgWhite radius">
                    <section
                      class="gridVitaeIcon"
                      v-for="item in items"
                      :key="item.id"
                    >
                      <figure>
                        <img :src="item.icon" alt="" />
                      </figure>

                      <div>
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
                    </section>
                  </div>
                </article>
              </article>
            </div>

            <div class="rightVitae">
              <div class="gridVitaeVer mb-4">
                <figure>
                  <img
                    src="@/assets/images/curriculumVitae/CurriculumVitae-17.svg"
                    alt=""
                  />
                </figure>
                <div>
                  <h2 class="font16">Education</h2>
                  <p>มหาวิทยาลัย ราชภัฎสวนสุนันทา (2004 - 2008)</p>
                  <p>ระดับการศึกษา : ปริญญาตรี</p>
                  <p>สาชาวิชา : ออกแบบนิเทศศิลป์</p>
                  <p>GPA : 3.07</p>
                </div>
              </div>

              <v-divider class="bggray mb-4"></v-divider>

              <div class="gridVitaeVer mb-4">
                <figure>
                  <img
                    src="@/assets/images/curriculumVitae/CurriculumVitae-18.svg"
                    alt=""
                  />
                </figure>
                <div>
                  <h2 class="font16 mb-4">Work History</h2>
                  <article
                    class="gridWork"
                    v-for="work in works"
                    :key="work.id"
                  >
                    <p>{{ work.number }}</p>
                    <div class="lineWork">
                      <p><b>Company :</b> <span class="colorRed">{{ work.name }}</span></p>
                      <p><b>Duration :</b> {{ work.time }}</p>
                      <p><b>Position :</b> {{ work.position }}</p>
                      <p><b>Salary :</b> {{ work.salary }}</p>
                      <p><b>Responsibility :</b> {{ work.mission }}</p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </section>
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
          name: "Adobe Illustrator",
          skill: 90,
          icon: require("@/assets/images/curriculumVitae/CurriculumVitae-08.svg")
        },
        {
          name: "Adobe Photoshp",
          skill: 90,
          icon: require("@/assets/images/curriculumVitae/CurriculumVitae-09.svg")
        },
        {
          name: "Adobe Xd",
          skill: 70,
          icon: require("@/assets/images/curriculumVitae/CurriculumVitae-10.svg")
        },
        {
          name: "Adobe Lightroom",
          skill: 90,
          icon: require("@/assets/images/curriculumVitae/CurriculumVitae-11.svg")
        },
        {
          name: "Html",
          skill: 90,
          icon: require("@/assets/images/curriculumVitae/CurriculumVitae-12.svg")
        },
        {
          name: "Css",
          skill: 90,
          icon: require("@/assets/images/curriculumVitae/CurriculumVitae-13.svg")
        },
        {
          name: "Java Script",
          skill: 20,
          icon: require("@/assets/images/curriculumVitae/CurriculumVitae-14.svg")
        },
        {
          name: "Vue",
          skill: 20,
          icon: require("@/assets/images/curriculumVitae/CurriculumVitae-15.svg")
        },
        {
          name: "Nuxt",
          skill: 20,
          icon: require("@/assets/images/curriculumVitae/CurriculumVitae-16.svg")
        }
      ],
      works: [
        {
          number: 1,
          name: "บริษัท จัดหางาน จ๊อบบีเคเค ดอท คอม จำกัด",
          time: "June 2017 to Present",
          position: "Web Designer",
          salary: "30,000 baht",
          mission: `Design website, write Html Css code and make screen to be 
          Responsive, design banner for customers to use the service`
        },
        {
          number: 2,
          name: "บริษัท อีซี่วัน ไทย",
          time: "February 2016 to May 2017",
          position: "Web Designer",
          salary: "23,000 baht",
          mission: `Website Design Write Html Css Code and Make Responsive Screens, Banner and Logo Design`
        },
        {
          number: 3,
          name: "Knight Frank Thailand | Real Estate Agents",
          time: "September 2015 to February 2016",
          position: "Graphic Designer",
          salary: "23,000 baht",
          mission: `Design banners, brochures, vinyl banners. Check the work already. To enter the printing process`
        },
        {
          number: 4,
          name: "บริษัท วินเนอร์ ออนไลน์ จำกัด",
          time: "September 2012 to September 2015",
          position: "Web Designer",
          salary: "18,000 baht",
          mission: `Banner design, media design Design package design, logo, website design and write html css 
          and display the screen responsive`
        },
        {
          number: 5,
          name: "Thailand Business Pages",
          time: "September 2009 to September 2012",
          position: "Graphic Designer",
          salary: "11,000 baht",
          mission: `Design various advertising media for customers who come to buy advertising pages 
          to book the company. And bring all advertisements into the picture And distributed to customers 
          And participants in Thailand Industrial Fair and Food Pack`
        },
        {
          number: 6,
          name: "บริษัท ก.การพิมพ์แอนด์สติกเกอทันใจ",
          time: "March 2009 to July 2009",
          position: "Graphic Designer",
          salary: "9,400 baht",
          mission: `Design print media such as logos, packaging, product labels, stickers, 
          and then inspect To enter the printing process`
        }
      ]
    };
  }
};
</script>

<style scoped>
.bgVitae {
  min-height: 100vh;
}
.leftVitae{
  border-radius: 10px;
}
.vitaeTop {
  padding-top: 75px;
}
.gridVitae {
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  grid-gap: 30px;
}
.cvPic {
  display: flex;
  justify-content: center;
  align-items: center;
}
.cvPic img {
  border-radius: 50%;
  object-fit: cover;
  max-width: 250px;
  min-height: 250px;
  border: 5px solid var(--colorWhite);
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
}
.radius {
  border-radius: 10px;
}
.gridVitaeAlign {
  display: grid;
  grid-template-columns: 0.1fr 1fr;
  grid-gap: 15px;
}
.gridVitaeAlign img {
  max-width: 40px;
}
.gridVitaeAlign p {
  font-size: var(--font10);
  color: var(--colorWhite);
}
.v-progress-linear.progressCustom {
  color: var(--colorWhite);
}
.skill p {
  color: var(--colorBlack);
}
.gridVitaeIcon {
  display: grid;
  grid-template-columns: 40px 1fr;
  grid-gap: 15px;
  align-items: center;
}
.gridVitaeVer {
  display: grid;
  grid-template-columns: 0.1fr 1fr;
  grid-gap: 15px;
}
.gridVitaeVer p {
  font-size: var(--font10);
}
.gridVitaeVer img {
  max-width: 40px;
}
.gridWork {
  display: grid;
  grid-template-columns: 20px 1fr;
  grid-gap: 15px;
}
.lineWork{ border-bottom: 1px solid var(--colorgray); padding-bottom: 15px; margin-bottom: 15px;}
@media (max-width: 960px) {
  .gridVitae {
    grid-template-columns: 1fr;
  }
}
</style>
