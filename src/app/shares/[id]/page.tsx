'use client'
import { Blog, DataBlog } from "@/app/types";
import { Layout } from "@/app/views/Layout";
import { useEffect, useState, useRef } from 'react';
import { getBlogById } from "./layout";
import Loading from "@/app/loading";
import './styles.css'
interface Props {
    params: { id: string; }
}

export default function BlogPage({ params }: Props) {


    const [blogState, setBlogState] = useState<DataBlog>({ } as DataBlog)
    const [ isLoading, setIsLoading ] = useState<boolean>(false)
    
    const htmlRef = useRef<HTMLDivElement>(null)
    
    useEffect(() => {
        setIsLoading(true)
        getBlogById(params.id)
        .then(
            resp => {
                setBlogState( resp )
                setIsLoading(false)
                
            }
        )
    }, [])

    useEffect(() => {
        console.log(blogState.html)
        if(htmlRef.current && blogState) htmlRef.current.innerHTML = blogState.html
    },[blogState])

    if(isLoading && !!blogState) return <Loading />

    return (
        <Layout title={blogState.title}>
            <div ref={htmlRef} id='blog-html'>

            </div>
        </Layout>
    );
}