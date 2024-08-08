'use client'

import { useEffect, useState } from "react";
import { Blog } from "../types";
import BlogsBox from "../views/BlogsBox";
import { collection, DocumentData, limit, onSnapshot, orderBy, query, QuerySnapshot, startAfter } from "firebase/firestore";
import { db } from "@/services/firebase";
import Swal from "sweetalert2";


export default function SharesPage() {

    const [blogs, setBlogs] = useState<Blog[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [firstDocument, setFirstDocument] = useState<any>(null)
    const [lastDocument, setLastDocument] = useState<any>(null)
    const [pageState, setPageState] = useState(1)
    const [blogsNumber] = useState(3)



    useEffect(() => {
        setIsLoading(true)
        const blogs = collection(db, "entity", `concejo-charata`, "blogs");
        let q = query(blogs, limit(blogsNumber), orderBy('date', 'desc'))
        try {
            onSnapshot(q, (querySnapshot) => {
                setFirstDocument(querySnapshot.docs[0])
                setLastDocument(querySnapshot.docs[querySnapshot.docs.length - 1])
                setBlogs([])
                querySnapshot.forEach((doc) => {
                    setBlogs((state: any) => [...state, { id: doc.id, data: doc.data() }])
                    setIsLoading(false)
                })
            })
        } catch (error) {
            setIsLoading(false)
            Swal.fire('Error', 'Hubo un error en la base de datos', 'error');
        }
    }, [])



    const handleNextPage = () => {
        const blogs = collection(db, "entity", `concejo-charata`, "blogs");
        let q = query(blogs, limit(blogsNumber), orderBy('date', 'desc'), startAfter(lastDocument))
        try {
            onSnapshot(q, (querySnapshot) => {
                if (querySnapshot.docs.length >= 1) {
                    setPageState(pageState + 1)
                }
                if (querySnapshot.docs.length > 0) {
                    setIsLoading(true)
                    setBlogs([])
                    setFirstDocument(querySnapshot.docs[0])
                    setLastDocument(querySnapshot.docs[querySnapshot.docs.length - 1])
                    querySnapshot.docs.forEach((doc) => {
                        setBlogs((state: any) => [...state, { id: doc.id, data: doc.data() }])
                    })
                    setIsLoading(false)
                }
            })

        } catch (error) {
            setIsLoading(false)
            Swal.fire('Error', 'Hubo un error en la base de datos', 'error');
        }
    }


    const handlePrevPage = () => {
        const blogs = collection(db, "entity", `concejo-charata`, "blogs");
        let q = query(blogs, limit(blogsNumber), orderBy('date', 'asc'), startAfter(firstDocument))
        try {
            onSnapshot(q, (snapshot) => {
                const documentsRevers: any = snapshot.docs.reverse()
                if (documentsRevers.length > 0 && pageState !== 1) {
                    setPageState(pageState - 1)
                    setIsLoading(true)
                    setBlogs([])
                    setFirstDocument(documentsRevers[0])
                    setLastDocument(documentsRevers[documentsRevers.length - 1])
                    documentsRevers.forEach((doc: any) => {
                        setBlogs((state: any) => [...state, { id: doc.id, data: doc.data() }])
                    })
                    setIsLoading(false)
                }
            })

        } catch (error) {
            setIsLoading(false)
            Swal.fire('Error', 'Hubo un error en la base de datos', 'error');
        }
    }


    return <BlogsBox
        section="Noticias - Blogs"
        title="Enterate De Todas Las Participaciones del Concejo"
        blogs={blogs}
        setBlogs={setBlogs}
        isLoading={isLoading}
        paginado={true}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        pageState={pageState}
    />
}