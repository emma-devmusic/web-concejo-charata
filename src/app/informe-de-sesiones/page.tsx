'use client'

import { useEffect, useState } from "react";
import Shares from "../views/Shares";
import { Blog } from "../types";

export default function InformeSesionesPage() {
    
    const [isLoading, setIsLoading] = useState(false)
    const [blogs, setBlogs] = useState<Blog[]>([])

    useEffect( () => {
        setIsLoading(true)
        fetch('/api/sessions')
        .then(resp => resp.json())
        .then(data => setBlogs(data))
        .finally(() => setIsLoading(false))
    }, [])

    return <Shares section="Noticias - Blogs" title="Enterate De Todas Las Participaciones del Concejo" blogs={blogs} isLoading={isLoading}/>
}