import { ref } from "vue";
import { projectFirestore } from "../firebase/config";

const getPost = (collection) => {
    const error = ref(null);
    const post = ref(null);

    const get = async (id) => {
        error.value = null;

        try {
            const res = await projectFirestore.collection(collection).doc(id).get();
            post.value = { ...res.data(), id: res.id };
            return res;
        } catch (err) {
            error.value = err.message;
            post.value = null;
        }
    };

    return { error, post, get };
};

export default getPost;