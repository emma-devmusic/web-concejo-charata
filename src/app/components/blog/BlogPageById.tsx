'use client'
import { Blog } from "@/app/types";
import { Layout } from "@/app/views/Layout";
import { useEffect, useRef } from "react";
import { SidebarBlog } from "../sidebar/SidebarBlog";

export const BlogPageById = ({ blog }: { blog: Blog }) => {

    const htmlRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (htmlRef.current && blog && typeof blog !== 'string') htmlRef.current.innerHTML = blog.data.html
    }, [blog.data])
    
    if(!blog) return <p>Cargado...</p>

    return (
        <Layout title={blog.data.title}>
            <div className="row">
                <div ref={htmlRef} id='blog-html' className="col-lg-8"></div>
                <SidebarBlog />
            </div>
        </Layout>
    );
};
