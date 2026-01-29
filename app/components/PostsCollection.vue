<template>
  <div v-if="posts" class="flex flex-col items-start">
    <div v-for="(post, index) in posts" :key="post.id">
      <PostPreview
        :title="post.title"
        :description="post.description"
        :date="post.date"
        :reading-minutes="post.readingMinutes"
      />
      <div
        v-if="index !== posts.length - 1"
        class="my-3 h-px w-full bg-zinc-950/10"
      />
    </div>
  </div>
</template>

<script setup>
  // 1. Fetch content from the 'blog' collection
  const { data: posts } = await useAsyncData("blog-home", async () => {
    const allPosts = await queryCollection("blog")
      .order("date", "DESC") // Sort by newest first
      .select("path", "title", "description", "date", "readingMinutes") // Only fetch needed fields
      .all();

    // 2. Transform the raw data to match your child component's props
    return allPosts.map((post) => ({
      id: post.path, // Use the path as a unique ID
      title: post.title,
      description: post.description,
      date: new Date(post.date), // Convert string to Date object
      path: post.path, // Useful if you want to link to the post later
      readingMinutes: post.readingMinutes,
    }));
  });
</script>
