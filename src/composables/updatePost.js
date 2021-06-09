import { ref } from "vue";
import { projectFirestore } from "../firebase/config";

const updatePost = (collection) => {
    const error = ref(null);

    const update = async (post) => {
        error.value = null;

        try {
            const res = await projectFirestore.collection(collection).doc(post.id).update(post);
            return res;
        } catch (err) {
            error.value = err.message;
        }
    };

    return { error, update };
};

export default updatePost;
