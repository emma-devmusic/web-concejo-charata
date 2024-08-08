
import { Blog } from "@/app/types";
import Shares from "@/app/views/BlogsBox";
import { useEffect, useState } from "react";

export const BlogPosts = () => {

    const [someBlogs, setSomeBlogs] = useState<Blog[]>([])

    useEffect( () => {
        fetch('/api/blogs', {method: 'POST',body: JSON.stringify({limit: 3})})
        .then(resp => resp.json())
        .then(data => setSomeBlogs(data))
    }, [])
    
    return <Shares section="Blogs - Noticias" title="Enterate de Noticias y Resúmenes de Sesiones" blogs={ someBlogs } withLayout={false} setBlogs={setSomeBlogs}/>

}
