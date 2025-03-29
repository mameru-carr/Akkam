<script setup lang="ts">
const tts_wiki: string = "https://en.wikipedia.org/wiki/Tamil_Nadu_Theological_Seminary";
</script>

<template lang="pug">
.container.mx-auto
  div(class="grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-4")
    .about.p-4
      h1.font-serif
        | Dr. J Christy Femila loves translating Feminist, Christian and Persian works into Tamil
      p
        | Lecturer of Religion at&nbsp;
        a(:href="tts_wiki" :title="'Tamil Nadu Theological Seminary'" target="_blank") Tamil Nadu Theological Seminary, Madurai
    .image.flex.justify-center
      img(src="@/assets/Christy.png" alt="J. Christy Femila" class="")
</template>
<style scoped lang="sass">
.introduction
  display: none
h1
  font-family: 'Faculty Glyphic', sans-serif
  font-size: 3rem
  line-height: 1.15
  margin-bottom: 2rem
p
  font-size: 2rem
  a
    font-family: 'Alegreya SC', sans-serif
    color: maroon
</style>
