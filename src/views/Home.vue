<template>
  <div class="bg-white h-auto w-3/4 mx-auto my-5 rounded p-5">
    <div
      class="shadow rounded p-5 flex justify-between my-5"
      v-for="post in posts"
      :key="post.id"
    >
      <div class="space-y-4">
        <div
          class="bg-blue-600 text-white font-bold text-2xl inline-block p-2 transform -rotate-2"
        >
          {{ post.title }}
        </div>
        <div class="text-gray-700">{{ post.body }}</div>
        <div class="flex space-x-2">
          <span v-for="tag in post.tags" :key="tag" class="text-gray-400"
            >#{{ tag }}</span
          >
        </div>
      </div>
      <div class="flex space-x-2 text-gray-400">
        <svg
          @click="handleEdit(post)"
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 cursor-pointer hover:text-blue-600"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
          />
        </svg>
        <svg
          @click="handleDelete(post.id)"
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5  cursor-pointer hover:text-blue-600"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import getPosts from "@/composables/getPosts";
import deletePost from "@/composables/deletePost";
import { useRouter } from "vue-router";
import { onMounted } from "@vue/runtime-core";

export default {
  setup() {
    const { gets, error, posts } = getPosts("posts");
    const { remove } = deletePost("posts");
    const router = useRouter();

    onMounted(async () => {
      await gets();
    });

    const handleDelete = async (id) => {
      await remove(id);
    };

    const handleEdit = (doc) => {
      router.push({ name: "CreatePost", params: { id: doc.id } });
    };

    return { posts, error, handleDelete, handleEdit };
  },
};
</script>
