// 'use client'
import { DataBlog } from "@/app/types";
import { Layout } from "@/app/views/Layout";
import { useEffect, useState, useRef } from 'react';
import Loading from "@/app/loading";
import { SidebarBlog } from "@/app/components/sidebar/SidebarBlog";
import { getBlogByIdFromDB } from "@/services/blogs";
import './styles.css'
import { BlogPageById } from "@/app/components/blog/BlogPageById";


interface Props {
    params: { id: string; }
}



export default async function BlogPage({ params }: Props) {

    // const [blogState, setBlogState] = useState<DataBlog | null>(null)
    // const [isLoading, setIsLoading] = useState<boolean>(false)

    // const htmlRef = useRef<HTMLDivElement>(null)

    // useEffect(() => {
    //     setIsLoading(true)
    //     getBlogByIdFromDB(params.id)
    //         .then((resp: any) => setBlogState(resp.data))
    //         .catch(err => setIsLoading(false))
    //         .finally(() => setIsLoading(false))
    // }, [])

    const resp = await fetch(`${process.env.BASE_URL}api/blogs/${params.id}`, { next: { revalidate: 60 } })
    const blog = await resp.json()

    // if (isLoading) return <Loading />

        return <BlogPageById blog={blog} />
}