import Swal from "sweetalert2";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import { Category } from "@/app/types/store";

export const getterCategoriesFromDB = async (slug: string) => {

    let categoriesList: Category[] = []
    const blogsEntity = collection(db, "entity", `${slug}`, "categories");
    
    try {
        const docSnap = await getDocs(blogsEntity);
        if (docSnap) {
            docSnap.forEach(e => {
                categoriesList.push(e.data() as Category)
            })
        }
    } catch (error) {
        Swal.fire('Sin Blogs', 'No hay blogs en esta página', 'warning')
        console.log(error)
    }
    return categoriesList
}
