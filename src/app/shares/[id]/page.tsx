'use client'
import { BlogPageById } from "@/app/components/blog/BlogPageById";
import './styles.css'
import { Blog } from "@/app/types";
import { useEffect, useState } from "react";
import { Spinner } from "@/app/components/spinner/Spinner";
import Loading from "@/app/loading";
import { getBlogByIdFromDB } from "@/services/blogs";


interface Props {
    params: { id: string; }
}



export default function BlogPage({ params }: Props) {

    const [isLoading, setIsLoading] = useState(true)
    const [blog, setBlog] = useState<Blog | null>(null)


    useEffect(() => {
        const data = getBlogByIdFromDB(params.id)
        data.then(resp => setBlog(resp))
        .catch( err => console.log(err))
        .finally(() => {
            setIsLoading(false)
        })
    }, [])


    if (isLoading) return <Loading />
    if(blog) return <BlogPageById blog={blog} />
}