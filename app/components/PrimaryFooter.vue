<template>
  <div class="top-padding">
    <footer
      class="relative flex flex-col gap-6 pt-10 pb-16 lg:flex-row lg:items-center lg:justify-between"
    >
      <p class="text-sm">
        &copy; {{ new Date().getFullYear() }} Khaldoon Mohammed. All rights
        reserved.
      </p>
    </footer>
  </div>
</template>

<script setup></script>

<style scopped>
  footer::after {
    --negative-margin: -1rem;
    content: "";
    position: absolute;
    top: 0;
    left: var(--negative-margin);
    right: var(--negative-margin);
    z-index: 1;
    height: 1px;
    background: color-mix(in srgb, var(--color-zinc-950) 10%, transparent 90%);
  }

  @media (width >= 768px) {
    footer::after {
      --negative-margin: -2rem;
    }
  }

  @media (width >= 1280px) {
    footer::after {
      --negative-margin: -3rem;
    }
  }
</style>
