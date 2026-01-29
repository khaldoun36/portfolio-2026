<template>
  <div>
    <HeroSection />
    <ImageReel />
    <section class="top-padding grid lg:grid-cols-2">
      <PostsCollection />
    </section>
  </div>
</template>

<script setup>
  import HeroSection from "~/components/home/HeroSection.vue";
  import ImageReel from "~/components/home/ImageReel.vue";
</script>

<style scoped></style>
