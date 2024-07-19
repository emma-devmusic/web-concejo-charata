import { getBlogByIdFromDB } from "@/services/blogs"

export async function GET(
     req: Request, res: Response,
    { params }: { params: { id: string } }
) {
    try {
        const blog = await getBlogByIdFromDB(params.id)
        return Response.json(blog)
    } catch (error) {
        return Response.json({ message: 'No existe el blog' })
    }
}
