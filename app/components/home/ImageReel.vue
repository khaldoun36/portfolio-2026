<template>
  <section style="user-select: none">
    <div
      ref="containerRef"
      class="scroll-container full-width flex snap-x snap-mandatory gap-8 overflow-x-scroll scroll-smooth py-8"
    >
      <NuxtImg
        v-for="image in images"
        :key="image"
        :src="image"
        alt="Remote image"
        width="340"
        class="card-item aspect-[0.937] w-85 shrink-0 snap-start rounded-lg bg-zinc-100 object-cover"
      />
    </div>

    <div class="hidden gap-4 xl:flex">
      <button
        class="button-link relative isolate flex size-11 items-center justify-center rounded-lg transition-transform"
        @click="scroll(-372)"
      >
        <Icon
          name="fa7-solid:chevron-left"
          size="24px"
          class="relative z-10 text-zinc-500"
        />
      </button>
      <button
        class="button-link relative isolate flex size-11 items-center justify-center rounded-lg transition-transform"
        @click="scroll(372)"
      >
        <Icon
          name="fa7-solid:chevron-right"
          size="24px"
          class="relative z-10 text-zinc-500"
        />
      </button>
    </div>
  </section>
</template>

<script setup>
  import image_1 from "/assets/image-reel/image-reel-1.jpg";
  import image_2 from "/assets/image-reel/image-reel-2.jpg";
  import image_3 from "/assets/image-reel/image-reel-3.JPG";
  import image_4 from "/assets/image-reel/image-reel-4.JPG";
  import image_5 from "/assets/image-reel/image-reel-5.JPG";
  import image_6 from "/assets/image-reel/image-reel-6.JPG";

  const containerRef = ref(null);

  const scroll = (offset) => {
    containerRef.value?.scrollBy({ left: offset, behavior: "smooth" });
  };

  const images = [image_1, image_2, image_3, image_4, image_5, image_6];
</script>

<style scoped>
  .scroll-container {
    /* 1. Define the Alignment Logic as a Variable */
    --site-padding: max(1rem, calc(50vw - 38rem + 1rem));

    /* 2. Tell the container to SNAP at this offset, not at 0px */
    scroll-padding-left: var(--site-padding);
  }

  .card-item:first-child {
    /* 3. Push the first card physically to that offset */
    margin-left: var(--site-padding);
  }
  .card-item:last-child {
    /* 3. Push the last card physically to that offset */
    margin-right: var(--site-padding);
  }

  /* Update variable for larger breakpoints */
  @media (width >= 768px) {
    .scroll-container {
      --site-padding: max(2rem, calc(50vw - 38rem + 2rem));
    }
  }

  @media (width >= 1280px) {
    .scroll-container {
      --site-padding: max(3rem, calc(50vw - 38rem + 3rem));
    }
  }
</style>
