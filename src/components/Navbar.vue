<template>
  <div
    class="w-3/4 mx-auto p-10 flex justify-between items-center bg-white rounded"
  >
    <div>
      <h1 class="text-blue-600 text-4xl font-bold">Technology Blog</h1>
    </div>

    <div class="flex justify-end space-x-3">
      <router-link
        class="text-gray-400 py-2 px-4 rounded hover:text-blue-600"
        :to="{ name: 'Home' }"
        >Home</router-link
      >
      <router-link
        class="text-gray-400 py-2 px-4 rounded hover:text-blue-600"
        :to="{ name: 'CreatePost' }"
        >Create Post</router-link
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
a.router-link-active {
  color: #2563eb;
}
</style>
