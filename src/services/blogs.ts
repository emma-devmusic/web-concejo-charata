
import { getFirestore, collection, getDocs, query, where, limit, startAfter, endBefore, doc, getDoc, endAt } from "firebase/firestore/lite";
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


export const getBlogByIdFromDB = (id: string): Promise<Blog> => new Promise(async (res, rej) => {

    const docRef = doc(db, 'entity', `concejo-charata`, `blogs/${id}`);
    const blog = await getDoc(docRef)

    if (blog.data()) {
        res({ id: blog.id, data: blog.data() as DataBlog })
    }
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


export const getNineBlogsByPage = async (blogStart: number | null, blogEnd: number | null) => {

    let blogsByPage: any[] = []
    const blogs = collection(db, "entity", `concejo-charata`, "blogs");
    let q = query(blogs, limit(9))

    if (blogStart) {
        console.log('aquí')
        console.log(blogStart)
        q = query(blogs, where("id", ">", blogStart), limit(9));
    }
    if (blogEnd) {
        console.log('aquí2')
        console.log(blogEnd)
        q = query(blogs, where("id", ">", blogEnd - 9), limit(9));
    }
    try {
        const docSnap = await getDocs(q);
        docSnap.forEach(doc => {
            console.log(doc.id)
            blogsByPage.push({ id: doc.id, data: doc.data() })
        })
        return blogsByPage
    } catch (error) {
        Swal.fire('Error', 'Error al cargar blogs', 'error')
    }
}