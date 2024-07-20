'use client'
import { DataBlog } from "@/app/types";
import { Layout } from "@/app/views/Layout";
import { useEffect, useState, useRef } from 'react';
import Loading from "@/app/loading";
import { SidebarBlog } from "@/app/components/sidebar/SidebarBlog";
import { getBlogByIdFromDB } from "@/services/blogs";
import './styles.css'


interface Props {
    params: { id: string; }
}



export default function BlogPage({ params }: Props) {

    const [blogState, setBlogState] = useState<DataBlog | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const htmlRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        setIsLoading(true)
        getBlogByIdFromDB(params.id)
            .then((resp: any) => setBlogState(resp.data))
            .catch(err => setIsLoading(false))
            .finally(() => setIsLoading(false))
    }, [])

    useEffect(() => {
        if (htmlRef.current && blogState && typeof blogState !== 'string') htmlRef.current.innerHTML = blogState.html
    }, [blogState])

    if (isLoading) return <Loading />

    if (blogState)
        return (
            <Layout title={blogState.title}>
                <div className="row">
                    <div ref={htmlRef} id='blog-html' className="col-lg-8"></div>
                    <SidebarBlog />
                </div>
            </Layout>
        );
}