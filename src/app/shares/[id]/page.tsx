
import { BlogPageById } from "@/app/components/blog/BlogPageById";
import './styles.css'


interface Props {
    params: { id: string; }
}



export default async function BlogPage({ params }: Props) {

    const resp = await fetch(`${process.env.BASE_URL}api/blogs/${params.id}`, { next: { revalidate: 60 } })
    const blog = await resp.json()

    return <BlogPageById blog={blog} />
}