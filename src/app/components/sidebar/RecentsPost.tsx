
import { MiniCardBlog } from "../blog/MiniCardBlog";
import { Blog } from "@/app/types";
import { useEffect, useState } from "react";

export const RecentPosts = () => {

    const [miniBlogs, setMiniBlogs] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('/api/blogs', { method: 'POST', body: JSON.stringify({ limit: 3 }), cache: 'force-cache' })
            .then(resp => resp.json())
            .then(data => setMiniBlogs(data))
            .finally(() => setLoading(false))
    }, [])


    return (
        <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
            <div className="section-title section-title-sm position-relative pb-3 mb-4">
                <h3 className="mb-0">Publicaciones Recientes</h3>
            </div>
            {
                loading
                    ? <p>Cargando posts...</p>
                    : miniBlogs.map(
                        (blog: Blog, i: number) => <MiniCardBlog blogData={blog} key={i} />
                    )
            }
        </div>
    );
}
