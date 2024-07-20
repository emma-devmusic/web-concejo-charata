'use client'
import { useEffect, useState } from "react";
import Shares from "../views/Shares";
import { Blog } from "../types";

export default function SharesPage() {
    const [someBlogs, setSomeBlogs] = useState<Blog[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        setIsLoading(true)
        fetch('/api/blogs', { next: { revalidate: 3600 } })
            .then(resp => resp.json())
            .then(data => setSomeBlogs(data))
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false))
    }, [])
    return <Shares section="Noticias - Blogs" title="Enterate De Todas Las Participaciones del Concejo" blogs={someBlogs}/>
}