<template>
  <article
    class="relative isolate -ml-6 flex flex-col rounded-lg p-6 transition-colors hover:bg-zinc-50"
  >
    <div>
      <!-- <time :datetime="isoString" class="inline-block mb-2 text-xs">
        {{ finalString }}
      </time> -->
      <p class="mb-2 inline-block text-xs">
        <time :datetime="isoString">
          {{ finalString }}
        </time>
        <span class="px-1.5">&mdash;</span>{{ `${readingMinutes}` }} minutes
        read
      </p>
    </div>

    <h2 class="text-lg font-semibold">
      <NuxtLink to="/">
        <span>{{ title }}</span>
        <span class="absolute inset-0" />
      </NuxtLink>
    </h2>

    <p class="mt-2 text-base">
      {{ description }}
    </p>
  </article>
</template>

<script setup>
  // Vue 3.5+ reactive destructuring with runtime props
  const {
    title = "Hello title",
    description = "Hello description",
    date = new Date(),
    readingMinutes = 5,
  } = defineProps({
    title: String,
    description: String,
    date: Date,
    readingMinutes: Number,
  });

  const isoString = computed(() => date.toISOString());

  const finalString = computed(() => {
    const formatted = new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(date);

    return formatted.replace(", ", " • ");
  });
</script>
