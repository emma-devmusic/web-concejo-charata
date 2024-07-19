
import { MiniCardBlog } from "../blog/MiniCardBlog";
import { Blog } from "@/app/types";
import { useEffect, useState } from "react";
import Loading from "@/app/loading";

export const RecentPosts = () => {

    const [miniBlogs, setMiniBlogs] = useState([])
    const [ loading, setLoading ] = useState(false)
    const getBlogs = async() => {
        try {
            setLoading(true)
            const blogs = await fetch('/api/blogs');
            const data = await blogs.json()
            return data;
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getBlogs()
            .then( resp=> {
                setMiniBlogs(resp)
                setLoading(false)
            } )
            .catch(err => {
                setLoading(false)
                alert(err)
            })
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
