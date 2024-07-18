'use server'
import { Blog, DataBlog } from "@/app/types";
import { Metadata } from "next";


interface Props {
    params: { id: string; },
    children: React.ReactNode;
}


export const getBlogById = async (id: string): Promise<DataBlog> => {
    const resp = await fetch(`http://localhost:3000/api/blogs/${id}`)
    const blogData:Blog = await resp.json()
    return blogData.data
}



export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const blogData = await getBlogById(params.id)
    return {
        title: blogData.title,
        description: blogData.description
    }
}

export default async function BlogPageLayout({params, children}: Props) {

   
    return (
        <div>
            {children}
        </div>
    );
}