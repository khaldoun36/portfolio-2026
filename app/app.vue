<template>
  <div
    class="my-container min-h-screen border-r border-l border-zinc-950/10 shadow-xs"
  >
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<script setup></script>

<style>
  #__nuxt {
    background: var(--color-zinc-50);
  }

  .my-container {
    background: white;
    width: min(76rem, 100%);
    padding-inline: 1rem;
    margin-inline: auto;
  }

  @media (width >= 768px) {
    #__nuxt {
      padding-inline: 2rem;
    }

    .my-container {
      padding-inline: 2rem;
    }
  }

  @media (width >= 1280px) {
    .my-container {
      padding-inline: 3rem;
    }
  }
</style>
