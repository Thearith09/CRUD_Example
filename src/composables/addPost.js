import { ref } from "vue";
import { projectFirestore } from "../firebase/config";

const addPost = (collection) => {
    const error = ref(null);

    const load = async (post) => {
        error.value = null;

        try {
            const res = await projectFirestore.collection(collection).add(post);
            return res;
        } catch (err) {
            error.value = err.message;
        }
    };

    return { error, load };
};

export default addPost;
