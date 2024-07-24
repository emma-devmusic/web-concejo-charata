import { getNineBlogsByPage, getSomeBlogsFromDB, getterBlogFromDB } from "@/services/blogs"

export async function GET( ) {
   
    try {
        const blogs = await getNineBlogsByPage(null, null)
        return Response.json(blogs)
    } catch (error) {
        return Response.json({ message: 'Error al cargar archivos' })
    }

}


export async function POST( request: Request ) {

    const resp: { limit: number } = await request.json()

    try {
        const blogs = await getSomeBlogsFromDB(resp.limit)
        return Response.json(blogs)
    } catch (error) {
        return Response.json({ message: 'Error al cargar archivos' })
    }
}


