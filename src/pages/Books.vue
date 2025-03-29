<script setup lang="ts">
import { Button } from "@/components/ui/button"
</script>

<template lang="pug">
.container.mx-auto
  .books.p-4
    h1 Translations
    .book(class="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4")
      .about.space-y-4
        h2
          | Uyar Jaathi Indhu Penn
        p A tamil translation of "The High Caste Hindu Woman" by Pandita Ramabai Saraswati
        p Published By: #[strong Her Stories]
        p.description The High Caste Hindu Woman, which, according to her beliefs, "showed" the darkest aspects of the life of Hindu women, including child brides and child widows, sought to expose the oppression of women in Hindu-dominated British India. In 1896, during a severe famine Ramabai toured the villages of Maharashtra with a caravan of bullock carts and rescued thousands of outcast children, child widows, orphans, and other destitute women and brought them to the shelter of Mukti and Sharada Sadan. A learned woman knowing seven languages, she also translated the Bible into her mother tongue - Marathi - from the original Hebrew and Greek.
        p #[button Buy the Book]
      .img
        img(src="@/assets/Picture1.jpg" alt="Book Cover for tamil translation of 'The High Caste Hindu Woman'")
</template>

<style scoped lang="sass">
h1
  font-family: 'Faculty Glyphic', sans-serif
  font-size: 3rem
  line-height: 1.15
  margin-bottom: 2rem
.about
  h2
    font-family: 'Alegreya', sans-serif
    font-size: 3rem
    font-weight: bold
    border-left: 4px solid maroon
    padding-left: 2rem
  p
    padding-left: 2rem
    font-family: 'Alegreya Sans', sans-serif
    font-size: 1.52rem
  button
    border-radius: 5px
    background-color: maroon
    color: white
    padding: .5rem
</style>
