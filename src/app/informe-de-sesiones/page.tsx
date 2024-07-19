'use client'

import { useEffect, useState } from "react";
import Shares from "../views/Shares";
import { Blog } from "../types";

export default function InformeSesionesPage() {
    
    const [blogs, setBlogs] = useState<Blog[]>([])

    useEffect(() => {
        fetch('/api/sessions', { next: { revalidate: 3600 } })
            .then(resp => resp.json())
            .then(data => setBlogs(data))
    }, [])
    return <Shares section="Noticias - Blogs" title="Enterate De Todas Las Participaciones del Concejo" blogs={blogs} />
}