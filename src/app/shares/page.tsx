'use client'
import { useEffect, useState } from "react";
import Shares from "../views/Shares";
import { Blog } from "../types";

export default function SharesPage() {
    const [someBlogs, setSomeBlogs] = useState<Blog[]>([])

    useEffect(() => {
        fetch('/api/blogs')
            .then(resp => resp.json())
            .then(data => setSomeBlogs(data))
    }, [])
    return <Shares section="Noticias - Blogs" title="Enterate De Todas Las Participaciones del Concejo" blogs={someBlogs} />
}