<template>
  <div class="full-width within-padding overflow-scroll">
    <div class="scroll-reel flex items-start gap-4 py-4 pr-10">
      <div
        v-for="n in 10"
        :key="n"
        class="my-outline -my-4 aspect-[0.9375] shrink-0 basis-80 rounded-lg bg-red-300"
      />
      <div
        class="-my-4 aspect-[0.9375] shrink-0 basis-4 md:basis-8 xl:basis-12"
        aria-hidden="true"
      />
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
  .scroll-reel {
    /* 1. Start at the center of the screen (50vw).
       2. Move left by half the container width (-38rem).
          (This gets us to the edge of the white box).
       3. Move right by the current padding to align with text.
    */
    --offset: 1rem; /* Default mobile padding */

    translate: max(var(--offset), calc(50vw - 38rem + var(--offset))) 0;
  }

  /* Tablet: Match your layout's total padding (Nuxt 2rem + Container 2rem = 4rem) */
  @media (width >= 768px) {
    .scroll-reel {
      --offset: 4rem;
    }
  }

  /* Desktop: Match layout padding (Nuxt 2rem? + Container 3rem) 
     Note: On large screens where auto-margin takes over, the math 
     simplifies to just Container Padding (3rem) added to the gutter. 
  */
  @media (width >= 1280px) {
    .scroll-reel {
      --offset: 3rem;
    }
  }
</style>
