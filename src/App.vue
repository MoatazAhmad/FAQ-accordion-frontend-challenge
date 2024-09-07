<script setup>
import Accordion from "./components/accordion.vue";
const faq = "FAQs";
const acc1 = "What is Frontend Mentor, and how will it help me?";
const acc2 = "Is Frontend Mentor free?";
const acc3 = "Can I use Frontend Mentor projects in my portfolio?";
const acc4 = "How can I get help if I'm stuck on a Frontend Mentor challenge?";
</script>

<template lang="pug">
  Accordion(
    :faq="faq"
    :acc1="acc1"
    :acc2="acc2"
    :acc3="acc3"
    :acc4="acc4"
  )
    template(#accAns1)
      | Frontend Mentor offers realistic coding challenges to help developers improve their
      |  frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for
      | all levels and ideal for portfolio building.
    template(#accAns2)
      | Yes, Frontend Mentor offers both free and premium coding challenges, with the free
      | option providing access to a range of projects suitable for all skill levels.
    template(#accAns3)
      | Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
      | way to showcase your skills to potential employers!
    template(#accAns4)
      | The best place to get help is inside Frontend Mentor's Discord community. There's a help
      | channel where you can ask questions and seek support from other community members.
</template>

<style scoped lang="scss"></style>
