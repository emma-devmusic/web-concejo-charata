import { getBlogByIdFromDB, getterBlogFromDB } from "@/services/blogs"
import { NextRequest } from "next/server"

export async function GET( req: NextRequest ) {
   

    const blogs = await getterBlogFromDB('concejo-charata')
    return Response.json(blogs)
}
