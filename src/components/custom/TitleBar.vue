<script setup lang="ts">
</script>

<template lang="pug">
  div(class="container mx-auto my-4")
    div(class="flex flex-col items-center justify-center md:justify-between md:flex-row")
      p
        router-link(:to="{name: 'Home'}") AKKAM
      nav.text-2xl.flex.items-center
        ul
          li.space-x-4
            router-link(:to="{ name: 'About'}") About J. Christy Femila
            router-link(:to="{ name: 'Books'}") Translations
            router-link(:to="{ name: 'Papers'}") Papers
</template>

<style scoped lang="sass">
p
  font-family: "Aladin", sans-serif
  font-size: 4rem
nav
  font-family: "Alegreya Sans", sans-serif
  font-size: 2rem
</style>
