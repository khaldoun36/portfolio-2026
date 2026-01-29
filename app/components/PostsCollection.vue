<template>
  <div class="posts flex flex-col items-start">
    <div v-for="(post, index) in posts" :key="post.id">
      <PostPreview
        :title="post.title"
        :description="post.description"
        :date="post.date"
      />
      <div
        v-if="index !== posts.length - 1"
        class="my-3 h-px w-full bg-zinc-950/10"
      />
    </div>
  </div>
</template>

<script setup>
  const posts = [
    {
      id: 1,
      title: "The Future of Nuxt",
      description:
        "Exploring the new features in Nuxt 4 and what they mean for developers.",
      date: new Date("2025-01-15"),
    },
    {
      id: 2,
      title: "Vue 3.5 Reactivity",
      description:
        "A deep dive into the new reactivity system and props destructuring syntax.",
      date: new Date("2024-12-10"),
    },
    {
      id: 3,
      title: "Mastering Tailwind",
      description:
        "Tips and tricks for building beautiful, responsive layouts quickly.",
      date: new Date("2024-11-28"),
    },
  ];
</script>
