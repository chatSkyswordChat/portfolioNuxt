<template>
  <v-container class="detailContainer bggrayLight">
    <v-row>
      <v-col cols="12">
        <div class="mb-4 pt-12">
          <p>
            <b>Project Name :</b>
            <span class="colorRed">{{ condition.head }}</span>
          </p>
          <p><b>Size :</b> {{ condition.size }}</p>
          <p><b>Create :</b> {{ condition.create }}</p>
        </div>

        <figure v-for="image in condition.imgaes" :key="image.id">
          <img :src="image.name" alt="" />
        </figure>

        <p><b>Detail :</b> {{ condition.detail }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      condition: {}
    };
  },
  created() {
    var items = [
      {
        id: 1,
        head: `Medis Kit`,
        size: `width 29 cm. x height 23 cm.`,
        create: `November 2011`,
        detail: `Is a printed media for sales Let Zel bring this media to sell booths
            to entrepreneurs. Which this exhibition will be held every year at Bitec Bangna`,
        imgaes: [
          { name: require(`@/assets/images/portfolioDetail/detail1.jpg`) },
          { name: require(`@/assets/images/portfolioDetail/detail2.jpg`) }
        ]
      },
      {
        id: 2,
        head: `Light Box`,
        size: `width 152 cm. x height 91.5 cm.`,
        create: `May 2011`,
        detail: `Light box sign located in front of the elephant building To
            indicate that the company has been stationed in front of the elephant building`,
        imgaes: [
          { name: require(`@/assets/images/portfolioDetail/detail3.jpg`) },
          { name: require(`@/assets/images/portfolioDetail/detail4.jpg`) }
        ]
      },
      {
        id: 3,
        head: `Advertisement The Metropolis`,
        size: `width 33.6 cm. x height 25.4 cm.`,
        create: `October 2015`,
        detail: `Luxury condo in Bangna area To promote the condo,
        it has been posted in many media such as newspapers, expressway signs, vinyl signs, brochures.`,
        imgaes: [
          { name: require(`@/assets/images/portfolioDetail/detail5.jpg`) }
        ]
      },
      {
        id: 4,
        head: `Advertisement NARA 9`,
        size: `width 29.7 cm. x height 14 cm.`,
        create: `November 2015`,
        detail: `Luxury condo on Narathiwas-Sathorn road The design of this
        publication Want to look elegant and elegant Emphasizing on clean and comfortable color tones`,
        imgaes: [
          { name: require(`@/assets/images/portfolioDetail/detail6.jpg`) },
          { name: require(`@/assets/images/portfolioDetail/detail7.jpg`) }
        ]
      },
      {
        id: 5,
        head: `Advertisement Villa Nakarin`,
        size: `width 33.6 cm. x height 25.4 cm.`,
        create: `October 2015`,
        detail: `Large luxury house Onnut-Ring Road With a simple, spacious design,
        natural colors are used to look comfortable. Because it is truly a symbol of the backyard style`,
        imgaes: [
          { name: require(`@/assets/images/portfolioDetail/detail8.jpg`) }
        ]
      },
      {
        id: 6,
        head: `Banner Knight Frank Thailand | Real Estate Agents`,
        size: `width 1920 px. x height 600 px.`,
        create: `May 2019`,
        detail: `Knight Frank Thailand Banner. It is designed to reflect the search for personnel
        in various positions. To join us In which the color is red That is a symbol of Knight Frank.`,
        imgaes: [
          { name: require(`@/assets/images/portfolioDetail/detail9.jpg`) }
        ]
      },
      {
        id: 7,
        head: `Banner Mitsubishi`,
        size: `width 1920 px. x height 600 px.`,
        create: `February 2019`,
        detail: `The design will focus on comfort. Natural energy The power that loves the world,
        there is no pollution, so use colors that look comfortable and clean.`,
        imgaes: [
          { name: require(`@/assets/images/portfolioDetail/detail10.jpg`) }
        ]
      },
      {
        id: 8,
        head: `Banner CBRE`,
        size: `width 960 px. x height 3500 px.`,
        create: `July 2019`,
        detail: `The design will focus on green. Which is a symbol of cbre and uses images related to job applications
        By focusing on various manners to look interesting`,
        imgaes: [
          { name: require(`@/assets/images/portfolioDetail/detail11.jpg`) }
        ]
      },
      {
        id: 9,
        head: `Banner London Property Exhibition`,
        size: `width 1000 px. x height 500 px.`,
        create: `January 2016`,
        detail: `knight frank is also a broker to help sell real estate to clients.
        Which each house and condo Is also luxurious and beautiful as well Therefore designed to be colorful,
        comfortable to the eyes Suitable for rest And see the beautiful scenery`,
        imgaes: [
          { name: require(`@/assets/images/portfolioDetail/detail12.jpg`) }
        ]
      },
      {
        id: 10,
        head: `Banner Duplex Penhouse`,
        size: `width 1000 px. x height 500 px.`,
        create: `December 2015`,
        detail: `knight frank is also a broker to help sell real estate to clients.
        Which each house and condo Is also luxurious and beautiful as well Therefore designed to be colorful,
        comfortable to the eyes Suitable for rest And see the beautiful scenery`,
        imgaes: [
          { name: require(`@/assets/images/portfolioDetail/detail13.jpg`) }
        ]
      },
      {
        id: 11,
        head: `Banner The Emporio Place`,
        size: `width 1000 px. x height 500 px.`,
        create: `December 2015`,
        detail: `knight frank is also a broker to help sell real estate to clients.
        Which each house and condo Is also luxurious and beautiful as well Therefore designed to be colorful,
        comfortable to the eyes Suitable for rest And see the beautiful scenery`,
        imgaes: [
          { name: require(`@/assets/images/portfolioDetail/detail14.jpg`) }
        ]
      },
      {
        id: 12,
        head: `Direct Mail Icon Idea`,
        size: `width 960 px. x height 3500 px.`,
        create: `December 2019`,
        detail: `icon idea is a company to make and design greeting cards, calendars and business cards and gifts.
        Which exists for over 20 years. The design wants to convey happiness Simplicity, luxury`,
        imgaes: [
          { name: require(`@/assets/images/portfolioDetail/detail15.jpg`) }
        ]
      },
      {
        id: 13,
        head: `Direct Mail Icon Idea`,
        size: `width 960 px. x height 3500 px.`,
        create: `December 2019`,
        detail: `On the end of the year festival Therefore having the concept to design impressive gifts And receive
        different sweepstakes prizes`,
        imgaes: [
          { name: require(`@/assets/images/portfolioDetail/detail16.jpg`) }
        ]
      },
      {
        id: 27,
        head: `UX / UI Application Jobbkk`,
        size: `none`,
        create: `January 2020`,
        detail: `Design jobbkk's ux / ui applications with the red color that symbolizes the organization. 
        Modern, simple, following the trend of the IT era. And issuing various usage functions`,
        imgaes: [
          { name: require(`@/assets/images/portfolioDetail/detail17.jpg`) },
          { name: require(`@/assets/images/portfolioDetail/detail18.jpg`) }
        ]
      }
    ];
    const id = this.$route.params.id;
    items.forEach((item, index) => {
      if (item.id == id) {
        this.condition = items[index];
      }
    });
  }
};
</script>

<style>
.detailContainer {
  max-width: 768px !important;
  min-height: 100vh;
}
.detailContainer p {
  font-size: var(--font12);
}
</style>
