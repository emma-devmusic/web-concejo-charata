'use client'

import Shares from "../views/Shares";
import { useEffect, useState } from "react";
import { Blog } from "../types";
import { getNineBlogsByPage } from "@/services/blogs";


export default function SharesPage() {

    const [ blogs, setBlogs ] = useState<Blog[]>([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        getNineBlogsByPage( null, null )
        .then((resp:any) => {setBlogs(resp)})
        .catch(err => console.log(err))
        .finally(() => setIsLoading(false))
    },[])

    return <Shares section="Noticias - Blogs" title="Enterate De Todas Las Participaciones del Concejo" blogs={blogs} setBlogs={setBlogs} isLoading={isLoading} paginado={true}/>
}