import { ref } from "vue";
import { projectFirestore } from "../firebase/config";

const getPosts = (collection) => {
    const error = ref(null);
    const posts = ref(null);

    const gets = async () => {
        error.value = null;

        try {
            const res = await projectFirestore.collection(collection).get();
            posts.value = res.docs.map((doc) => {
                return { ...doc.data(), id: doc.id };
            });
 
        } catch (err) {
            error.value = err.message;
            posts.value = null;
        }
    };

    return { error, posts, gets };
};

export default getPosts;