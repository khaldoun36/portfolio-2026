<template>
  <main class="top-padding max-w-[75ch]">
    <NuxtImg
      :src="imageUrl"
      alt="Remote image"
      width="600"
      height="600"
      class="my-outline aspect-square size-16 rounded-full bg-cover bg-clip-border"
    />

    <h1 class="mt-6 text-3xl font-semibold md:text-5xl">
      Building apps, launching ideas, and chasing PRs.
    </h1>

    <p class="mt-4 text-base">
      I&#8217;m Khaldoon, software developer by trade, an entrepreneur by
      necessity, and an amateur athlete by choice. I spend most of my time
      building Bananabread, a social space for real photos and actual friends.
    </p>

    <div class="mt-6 flex items-center gap-4">
      <NuxtLink
        v-for="item in socials"
        :key="item.label"
        :to="item.href"
        target="_blank"
        :aria-label="`${item.label} opens in new tab`"
        class="social-link relative isolate flex size-11 items-center justify-center rounded-lg transition-transform"
      >
        <Icon
          :name="item.icon"
          size="24px"
          class="relative z-10 text-zinc-500"
          aria-hidden="true"
        />
      </NuxtLink>
    </div>
  </main>
</template>

<script setup lang="ts">
  const imageUrl =
    "https://images.unsplash.com/photo-1671639334426-e27d616492f7?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const socials = [
    {
      icon: "fa7-brands:linkedin-in",
      label: "LinkedIn profile",
      href: "https://www.linkedin.com/in/khaldoon-alnuaimi-8618b7350/",
    },
    {
      icon: "fa7-brands:github",
      label: "GitHub profile",
      href: "https://github.com/khaldoun36",
    },
    {
      icon: "fa7-brands:bluesky",
      label: "Bluesky profile",
      href: "https://bsky.app/profile/khaldoon.bsky.social",
    },
  ];
</script>

<style scoped>
  @reference "tailwindcss";

  .social-link::after {
    @apply absolute inset-0 h-full w-full rounded-lg border border-zinc-950/10 bg-zinc-50 transition-all content-[''];
  }

  @media (hover: hover) {
    .social-link:hover {
      @apply -translate-y-0.5 shadow-xs;
    }
  }

  .social-link:hover:active {
    @apply translate-y-0 scale-98;
  }
</style>
