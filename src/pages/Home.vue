<script setup lang="ts">
import { Card, CardTitle, CardHeader, CardContent } from '@/components/ui/card'
const tts_wiki: string = "https://en.wikipedia.org/wiki/Tamil_Nadu_Theological_Seminary";
</script>

<template lang="pug">
.container.mx-auto
  div(class="grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-4")
    .about.p-4.grid.gap-4.grid-cols-1
      h1.font-serif
        | Dr. J Christy Femila loves translating Feminist, Christian and Persian works into Tamil
      p
        | Lecturer of Religion at&nbsp;
        a(:href="tts_wiki" :title="'Tamil Nadu Theological Seminary'" target="_blank") Tamil Nadu Theological Seminary, Madurai
      h2 Quick Links
      .cards(class="my-4 flex flex-col gap-2 md:flex-row md:justify-between")
        router-link(:to="{ name: 'Books' }")
          card.bg-green-200
            card-header
              card-title
                p Uyar Jaathi Indhu Penn
              card-description
                p A tamil translation of "The High Caste Hindu Woman" by Pandita Ramabai Saraswati
            card-content
              p Published By: #[em Her Stories]
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
h2
  font-family: 'Oswald', sans-serif
  font-size: 2rem
p
  font-size: 2rem
  font-family: 'Alegreya', serif
  a
    font-family: 'Alegreya SC', sans-serif
    color: maroon
.cards
  p
    font-family: 'Alegreya Sans', sans-serif
    font-size: 1.25rem
</style>
