
import { Blog, DataBlog } from "@/app/types";
import { getBlogByIdFromDB } from "@/services/blogs";
import { Metadata } from "next";


interface Props {
    params: { id: string; },
    children: React.ReactNode;
}



export async function generateMetadata({ params }: Props): Promise<Metadata> {

    try {
        const blog = await getBlogByIdFromDB(params.id)
        return {
            title: `${blog.data.title}`,
            description: `${blog.data.description}`
        }
    } catch (error) {
        return {
            title: 'No se encuentra el blog',
            description: 'No existe descripción'
        }
    }

}

export default async function BlogPageLayout({ params, children }: Props) {


    return (
        <div>
            {children}
        </div>
    );
}