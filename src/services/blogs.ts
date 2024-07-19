
import { getFirestore, collection, getDocs, query, where, limit  } from "firebase/firestore/lite";
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


export const getBlogByIdFromDB = async (id: string): Promise<Blog> => new Promise((res, rej) => {

    const blogsEntity = collection(db, "entity", `concejo-charata`, "blogs");
    getDocs(blogsEntity)
        .then(
            docSnap => {
                docSnap.forEach(e => {
                    if (e.id === id) {
                        res({ id: e.id, data: e.data() as DataBlog })
                    }
                })
            })
        .catch(
            err => rej('No existe el Blog')
        )
})



export const getBlogByCategoryFromDB = async (category: string) => {

    let blogsListItem: Blog[] = []
    const blogsEntity = collection(db, "entity", `concejo-charata`, "blogs");
    const q = query(blogsEntity, where("category", "==", category));    
    try {
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach(doc => {
            blogsListItem.push({
                id: doc.id,
                data: doc.data() as DataBlog
            })
        })
    } catch (error) {
        console.log(error, 'No existen blogs en esa categoría')
        return 'No existen blogs en esa categoría'
    }
    return blogsListItem
}


export const getSomeBlogsFromDB = async (numberOfBLogs: number) => {

    let blogsListItem: Blog[] = []
    const blogsEntity = collection(db, "entity", `concejo-charata`, "blogs");
    const q = query(blogsEntity, limit(numberOfBLogs));    
    try {
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach(doc => {
            blogsListItem.push({
                id: doc.id,
                data: doc.data() as DataBlog
            })
        })
    } catch (error) {
        return 'No existen blogs'
    }
    return blogsListItem
}
