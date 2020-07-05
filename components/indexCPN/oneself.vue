<template>
  <section class="calC bgOneself">
    <v-container>
      <v-row>
        <v-col cols="12" md="8" offset-md="4">
          <div class="bgHead pa-4" data-aos="fade-up" data-aos-duration="2000">
            <h2 class="colorBlack fontHeading">I'm Chatthong Hongwisuthikul</h2>
            <h6 class="colorRed">Web Designer</h6>
            <p>
              Have experience in 9 year old web designer, print design and
              photography and image decoration
            </p>

            <div class="lineDash"></div>

            <ul class="contact mb-4">
              <li>
                <span class="bgRed colorWhite">
                  <font-awesome-icon icon="envelope" />
                </span>
                <p class="font12">dynastystrike@gmail.com</p>
              </li>

              <li>
                <a
                  href="https://www.facebook.com/home.php?ref=hp"
                  target="_blank"
                >
                  <span class="bgRed colorWhite">
                    <font-awesome-icon :icon="['fab', 'facebook-f']" />
                  </span>
                  <p class="font12">chatthong hongwisuthikul</p>
                </a>
              </li>
            </ul>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.bgOneself {
  background: url(~assets/images/home/bg1.jpg) center center no-repeat;
  min-height: 100vh;
  background-size: cover;
  padding-top: 55px;
}
.bgHead {
  margin: 10vh 0;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
  text-align: center;
}
.bgHead h6 {
  font-size: 4rem;
  font-weight: 900;
}
.contact {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
.contact > * {
  flex: 1 1 auto;
  max-width: 50%;
}
.contact li {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
  margin-right: 15px;
  border-right: 1px solid var(--colorBlack);
}
.contact li:last-child {
  border-right: 0;
}
.contact li a {
  text-decoration: none;
  color: var(--colorBlack);
  display: flex;
  align-items: center;
}
.contact li a:hover {
  color: var(--colorRed);
}
.contact span {
  border-radius: 50%;
  padding: 5px 10px;
  margin-right: 10px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
@media (max-width: 1264px) {
  .contact {
    flex-direction: column;
  }
  .contact > * {
    max-width: 100%;
    margin-bottom: 15px;
  }
  .contact li {
    border-right: 0;
    margin-right: 0;
    padding: 0;
  }
}
@media (max-width: 960px) {
  .bgOneself {
    background-size: auto;
    background-position: 40% 50%;
  }
  .bgHead h6 {
    font-size: 3rem;
  }
  .contact {
    flex-direction: inherit;
  }
  .contact > * {
    margin-bottom: 0;
  }
  .contact li {
    border-right: 1px solid var(--colorBlack);
  }
}
@media (max-width: 640px) {
  .contact {
    flex-direction: column;
  }
  .contact > * {
    margin-bottom: 15px;
  }
  .contact li {
    border-right: 0;
  }
}
</style>
