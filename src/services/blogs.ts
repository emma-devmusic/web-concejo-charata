
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { app } from "./firebase";
import Swal from "sweetalert2";
import { Blog, DataBlog } from "@/app/types";


//conect database
export const db = getFirestore(app);

export const getterBlogFromDB = async (slug: string) => {

    let blogsListItem: Blog[] = []

    const blogsEntity = collection(db, "entity", `${slug}`, "blogs");
    const docSnap = await getDocs(blogsEntity);
    if (docSnap) {
        docSnap.forEach(e => {
            blogsListItem.push({
                id: e.id,
                data: e.data() as DataBlog
            })
        })
    } else {
        Swal.fire('Sin Blogs', 'No hay blogs en esta página', 'warning')
    }
    return blogsListItem
}


export const getBlogByIdFromDB = async (id: string) => new Promise((res, rej) => {


    const blogsEntity = collection(db, "entity", `concejo-charata`, "blogs");
    getDocs(blogsEntity)
        .then(
            docSnap => {
                docSnap.forEach(e => {
                    if (e.id === id) {
                        res({ id: e.id, data: e.data() })
                    }
                })
            })
        .catch(
            err => rej('No existe el Blog')
        )
})      