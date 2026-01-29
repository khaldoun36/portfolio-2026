<template>
  <div class="flex flex-col gap-6">
    <div
      ref="scrollContainer"
      class="full-width within-padding hide-scrollbar overflow-x-auto"
      @scroll="onScroll"
    >
      <div class="scroll-reel flex items-start gap-4 py-4 pr-10">
        <div
          v-for="n in 10"
          :key="n"
          class="-my-4 aspect-[0.9375] shrink-0 basis-80 rounded-lg bg-red-300"
        />
        <div
          class="aspect-[0.9375] shrink-0 basis-4 md:basis-8 xl:basis-12"
          aria-hidden="true"
        />
      </div>
    </div>

    <input
      v-model="scrollProgress"
      type="range"
      min="0"
      max="100"
      class="custom-range hidden w-75 lg:block"
      @input="onRangeInput"
    />
  </div>
</template>

<script setup>
  import { ref } from "vue";

  const scrollContainer = ref(null);
  const scrollProgress = ref(0);

  // 1. Sync Input -> Scroll Container
  const onRangeInput = () => {
    const el = scrollContainer.value;
    if (!el) return;

    // Calculate scroll position based on range value (0-100)
    const maxScroll = el.scrollWidth - el.clientWidth;
    el.scrollLeft = (scrollProgress.value / 100) * maxScroll;
  };

  // 2. Sync Scroll Container -> Input
  const onScroll = () => {
    const el = scrollContainer.value;
    if (!el) return;

    // Calculate percentage (0-100) based on current scroll
    const maxScroll = el.scrollWidth - el.clientWidth;
    // Avoid division by zero
    scrollProgress.value =
      maxScroll > 0 ? (el.scrollLeft / maxScroll) * 100 : 0;
  };
</script>

<style scoped>
  /* Your existing Reel styles */
  .scroll-reel {
    --offset: 1rem;
    translate: max(var(--offset), calc(50vw - 38rem + var(--offset))) 0;
  }
  @media (width >= 768px) {
    .scroll-reel {
      --offset: 4rem;
    }
  }
  @media (width >= 1280px) {
    .scroll-reel {
      --offset: 3rem;
    }
  }

  /* 1. Hide default scrollbar */
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  /* 2. Custom Range Styling (The Blue Bar) */
  .custom-range {
    appearance: none; /* Remove default styling */
    height: 0.5rem; /* Track height */
    background: var(--color-zinc-100);
    border-radius: 9999px;
    cursor: pointer;
  }

  /* Chrome/Safari/Edge Thumb */
  .custom-range::-webkit-slider-thumb {
    appearance: none;
    width: 2rem; /* Thumb width */
    height: 1.5rem; /* Match track height */
    background: var(--color-zinc-800); /* Bright Blue Thumb */
    border-radius: var(--radius-lg);
    cursor: pointer;
    outline: 6px solid white;
  }
</style>
