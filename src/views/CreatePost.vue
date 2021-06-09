<template>
  <div class="bg-white my-5 mx-auto w-3/4 rouned">
    <form class="w-2/4 mx-auto p-5" @submit.prevent="handleSubmit">
      <div>
        <label class="block text-gray-700 font-semibold">Title</label>
        <input
          class="border-2 w-full border-gray-200 p-1 focus:outline-none focus:border-blue-600 rounded"
          v-model="title"
          type="text"
          required
        />
      </div>

      <div>
        <label class="block text-gray-700 font-semibold">Content:</label>
        <textarea
          class="border-2 w-full border-gray-200 p-1 focus:outline-none focus:border-blue-600 rounded"
          v-model="body"
          required
        ></textarea>
      </div>

      <div>
        <label class="block text-gray-700 font-semibold"
          >Tags (hits enter to add a tag)</label
        >
        <input
          class="border-2 w-full border-gray-200 p-1 focus:outline-none focus:border-blue-600 rounded"
          v-model="tag"
          type="text"
          @keydown.space.prevent="handleKeydown"
        />
      </div>

      <div v-for="tag in tags" :key="tag">#{{ tag }}</div>

      <button
        class="bg-blue-600 text-white py-2 px-4 my-2 rounded hover:bg-blue-700"
      >
        {{ post ? "Edit Post" : "Add Post" }}
      </button>
    </form>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import addPost from "@/composables/addPost";
import getPost from "@/composables/getPost";
import updatePost from "@/composables/updatePost";
import { useRouter } from "vue-router";
import { onMounted } from "@vue/runtime-core";

export default {
  props: ["id"],
  setup(props) {
    const title = ref("");
    const body = ref("");
    const tags = ref([]);
    const tag = ref("");

    const router = useRouter();
    const { load, error } = addPost("posts");
    const { get, post } = getPost("posts");
    const { update } = updatePost("posts");

    onMounted(async () => {
      if (props.id) {
        await get(props.id);
        title.value = post.value.title;
        body.value = post.value.body;
        tags.value = post.value.tags;
      }
    });

    const handleKeydown = () => {
      tags.value.push(tag.value);
      tag.value = "";
    };

    const handleSubmit = async () => {
      if (props.id) {
        await update({
          id: props.id,
          title: title.value,
          body: body.value,
          tags: tags.value,
        });
      } else {
        await load({
          title: title.value,
          body: body.value,
          tags: tags.value,
        });
      }

      if (!error.value) router.push({ name: "Home" });
    };

    return { handleSubmit, handleKeydown, title, body, tags, tag };
  },
};
</script>

<style></style>
