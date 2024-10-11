
import { getFirestore, collection, getDocs, query, where, limit, startAfter, endBefore, doc, getDoc, endAt, orderBy, onSnapshot, QuerySnapshot, DocumentData } from "firebase/firestore";
import { db } from "./firebase";
import Swal from "sweetalert2";
import { Blog, DataBlog } from "@/app/types";



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


// export const getBlogsByPages = (
//     blogsNumber: number, 
//     document: QuerySnapshot<DocumentData, DocumentData> | null,
//     pageState: number, 
//     setIsLoading: React.Dispatch<React.SetStateAction<boolean>>, 
//     setBlogs: React.Dispatch<React.SetStateAction<Blog[]>>, 
//     setFirstDocument: React.Dispatch<React.SetStateAction<any>>, 
//     setLastDocument: React.Dispatch<React.SetStateAction<any>>,
//     setPageState:React.Dispatch<React.SetStateAction<any>>,
//     orderDirection: 'asc' | 'desc'
// ) => {

//     const blogs = collection(db, "entity", `concejo-charata`, "blogs");
//         let q = query(blogs, limit(blogsNumber), orderBy('date', orderDirection), startAfter(document))
//         try {
//             onSnapshot(q, (snapshot) => {
//                 const documentsRevers: any = snapshot.docs.reverse()
//                 if (documentsRevers.length > 0 && pageState !== 1) {
//                     setPageState(pageState - 1)
//                     setIsLoading(true)
//                     setBlogs([])
//                     setFirstDocument(documentsRevers[0])
//                     setLastDocument(documentsRevers[documentsRevers.length - 1])
//                     documentsRevers.forEach((doc: any) => {
//                         setBlogs((state: any) => [...state, { id: doc.id, data: doc.data() }])
//                     })
//                     setIsLoading(false)
//                 }
//             })

//         } catch (error) {
//             setIsLoading(false)
//             Swal.fire('Error', 'Hubo un error en la base de datos', 'error');
//         }
// }

