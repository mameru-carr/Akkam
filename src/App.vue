<script setup lang="ts">
import './styles/main.css';
import './styles/fonts.css';

import TitleBar from '@/components/custom/TitleBar.vue';
import { RouterView } from 'vue-router';
import { Button } from '@/components/ui/button';

</script>

<template lang="pug">
  title-bar
  router-view
</template>

<style lang="sass">
</style>
