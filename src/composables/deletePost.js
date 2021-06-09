import { ref } from "vue";
import { projectFirestore } from "@/firebase/config";

const deletePost = (collection) => {
    const error = ref(null);

    const remove = async (id) => {
        error.value = null;
        
        try {
            const res = await projectFirestore.collection(collection).doc(id).delete();
            return res;

        } catch (err) {
            error.value = err.message;
        }
    };

    return { remove, error };
};

export default deletePost;