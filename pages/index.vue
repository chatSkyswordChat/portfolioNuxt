<template>
  <div class="calC">
    <v-container>
      <v-row>
        <v-col cols="12">
          <oneself />
          <threeColumn />
          <experience />
          <skill />
          <project />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import oneself from "@/components/indexCPN/oneself";
import threeColumn from "@/components/indexCPN/threeColumn";
import experience from "@/components/indexCPN/experience";
import skill from "@/components/indexCPN/skill";
import project from "@/components/indexCPN/project";
export default {
  components: {
    oneself,
    threeColumn,
    experience,
    skill,
    project
  }
};
</script>

<style></style>
