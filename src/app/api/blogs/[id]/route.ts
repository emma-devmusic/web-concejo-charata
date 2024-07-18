import { getBlogByIdFromDB } from "@/services/blogs"
import { NextRequest } from "next/server"

export async function GET( req: NextRequest, {params}: {params:{ id: string }} ) {
   
    const blog = await getBlogByIdFromDB(params.id)
    return Response.json(blog)
}
